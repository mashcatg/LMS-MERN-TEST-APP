const Invoice = require('../models/Invoice');
const Service = require('../models/Service');

// Add this function to check service access
const checkServiceAccess = async (userId, serviceId) => {
  const service = await Service.findOne({ _id: serviceId, userId });
  if (!service) throw new Error('Service not found or you do not have access to it');
  return service;
};

exports.createInvoice = async (req, res) => {
  try {
    const { serviceId, amount, trxId } = req.body;
    await checkServiceAccess(req.user.id, serviceId);
    const dueDate = new Date();
    dueDate.setDate(28);
    dueDate.setMonth(dueDate.getMonth() + 1);

    const invoice = new Invoice({
      serviceId,
      userId: req.user.id,
      dueDate,
      amount
    });

    await invoice.save();
    console.log('Invoice created successfully');
    res.status(201).json(invoice);
  } catch (error) {
    console.error('Error creating invoice:', error);
    res.status(500).json({ message: 'Error creating invoice', error: error.message });
  }
};

exports.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({ userId: req.user.id });
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching invoices', error: error.message });
  }
};

exports.updateInvoice = async (req, res) => {
  try {
    const { paymentDate, trxId, status } = req.body;
    const invoice = await Invoice.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { paymentDate, trxId, status },
      { new: true }
    );
    if (!invoice) return res.status(404).json({ message: 'Invoice not found' });
    res.json(invoice);
  } catch (error) {
    res.status(500).json({ message: 'Error updating invoice', error: error.message });
  }
};

exports.deleteInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!invoice) return res.status(404).json({ message: 'Invoice not found' });
    res.json({ message: 'Invoice deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting invoice', error: error.message });
  }
};

exports.searchInvoices = async (req, res) => {
  try {
    const { query } = req.query;
    const invoices = await Invoice.find({
      userId: req.user.id,
      $or: [
        { trxId: { $regex: query, $options: 'i' } },
        { status: { $regex: query, $options: 'i' } },
        { amount: isNaN(query) ? undefined : Number(query) },
        { 'serviceId.serviceName': { $regex: query, $options: 'i' } }
      ].filter(condition => condition !== undefined)
    }).populate('serviceId', 'serviceName');

    res.json(invoices);
  } catch (error) {
    console.error('Error searching invoices:', error);
    res.status(500).json({ message: 'Error searching invoices', error: error.message });
  }
};
