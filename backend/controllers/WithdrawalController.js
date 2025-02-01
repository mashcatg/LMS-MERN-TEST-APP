const WithdrawalHistory = require('../models/WithdrawalHistory');
const Service = require('../models/Service');

const checkServiceAccess = async (userId, serviceId) => {
  const service = await Service.findOne({ _id: serviceId, userId });
  if (!service) throw new Error('Service not found or you do not have access to it');
  return service;
};

exports.createWithdrawal = async (req, res) => {
  try {
    const { serviceId, amount, trxId } = req.body;
    await checkServiceAccess(req.user.id, serviceId);
    
    // Check if the service exists in the database
    const serviceExists = await Service.exists({ _id: serviceId });
    if (!serviceExists) {
      return res.status(404).json({ message: 'Service not found' });
    }
    
    const withdrawal = new WithdrawalHistory({
      userId: req.user.id,
      serviceId,
      amount,
      trxId
    });
    await withdrawal.save();
    res.status(201).json(withdrawal);
  } catch (error) {
    res.status(500).json({ message: 'Error creating withdrawal history', error: error.message });
  }
};

exports.getWithdrawals = async (req, res) => {
  try {
    const withdrawals = await WithdrawalHistory.find({ userId: req.user.id })
      .populate('serviceId', 'serviceName');
    res.json(withdrawals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching withdrawals', error: error.message });
  }
};

exports.updateWithdrawal = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, trxId, serviceId } = req.body;

    // Check if the withdrawal exists and belongs to the user
    const withdrawal = await WithdrawalHistory.findOne({ _id: id, userId: req.user.id });
    if (!withdrawal) {
      return res.status(404).json({ message: 'Withdrawal not found or you do not have permission to update it' });
    }

    // Check if the new service exists (if provided)
    if (serviceId) {
      const serviceExists = await Service.exists({ _id: serviceId });
      if (!serviceExists) {
        return res.status(404).json({ message: 'Service not found' });
      }
    }

    // Check if the new trxId is unique (if provided)
    if (trxId && trxId !== withdrawal.trxId) {
      const existingWithdrawal = await WithdrawalHistory.findOne({ trxId });
      if (existingWithdrawal) {
        return res.status(400).json({ message: 'Transaction ID must be unique' });
      }
    }

    const updatedWithdrawal = await WithdrawalHistory.findByIdAndUpdate(
      id,
      { 
        amount: amount || withdrawal.amount,
        trxId: trxId || withdrawal.trxId,
        serviceId: serviceId || withdrawal.serviceId
      },
      { new: true, runValidators: true }
    );

    res.json({
      message: 'Withdrawal updated successfully',
      withdrawal: updatedWithdrawal
    });
  } catch (error) {
    console.error('Error updating withdrawal:', error);
    res.status(500).json({ 
      message: 'Error updating withdrawal', 
      error: error.message 
    });
  }
};

exports.deleteWithdrawal = async (req, res) => {
  try {
    const withdrawal = await WithdrawalHistory.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!withdrawal) return res.status(404).json({ message: 'Withdrawal not found' });
    res.json({ message: 'Withdrawal deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting withdrawal', error: error.message });
  }
};

exports.searchWithdrawals = async (req, res) => {
  try {
    const { query } = req.query;
    const searchConditions = [
      { trxId: { $regex: query, $options: 'i' } }
    ];

    if (!isNaN(query)) {
      searchConditions.push({ amount: Number(query) });
    }

    // Remove the mongoose.Types.ObjectId check for now
    // if (mongoose.Types.ObjectId.isValid(query)) {
    //   searchConditions.push({ serviceId: mongoose.Types.ObjectId(query) });
    // }

    const withdrawals = await WithdrawalHistory.find({
      userId: req.user.id,
      $or: searchConditions
    }).populate('serviceId', 'serviceName');

    res.json(withdrawals);
  } catch (error) {
    console.error('Error searching withdrawals:', error);
    res.status(500).json({ 
      message: 'Error searching withdrawals', 
      error: error.message 
    });
  }
};