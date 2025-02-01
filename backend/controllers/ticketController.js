const Ticket = require('../models/Ticket');
const Service = require('../models/Service');

const checkServiceAccess = async (userId, serviceId) => {
  console.log(`Checking service access for userId: ${userId}, serviceId: ${serviceId}`);
  const service = await Service.findOne({ _id: serviceId, userId });
  if (!service) {
    console.log(`Service not found or access denied. userId: ${userId}, serviceId: ${serviceId}`);
    throw new Error('Service not found or you do not have access to it');
  }
  console.log(`Service access granted for userId: ${userId}, serviceId: ${serviceId}`);
  return service;
};

exports.createTicket = async (req, res) => {
  try {
    const { priority, problemStatement, description } = req.body;
    const { serviceId } = req.params;
    console.log('Creating ticket for service:', serviceId);
    console.log('User:', req.user);

    await checkServiceAccess(req.user.id, serviceId);

    const ticket = new Ticket({
      userId: req.user.id,
      serviceId,
      priority,
      problemStatement,
      description
    });

    await ticket.save();
    console.log(`Ticket created successfully. ticketId: ${ticket._id}`);
    res.status(201).json(ticket);
  } catch (error) {
    console.error('Error creating ticket:', error);
    res.status(error.message.includes('Service not found') ? 404 : 500)
      .json({ message: 'Error creating ticket', error: error.message });
  }
};

exports.getTickets = async (req, res) => {
  try {
    const { serviceId } = req.params;
    await checkServiceAccess(req.user.id, serviceId);

    const tickets = await Ticket.find({ serviceId });
    res.json(tickets);
  } catch (error) {
    console.error('Error fetching tickets:', error);
    res.status(error.message.includes('Service not found') ? 404 : 500)
      .json({ message: 'Error fetching tickets', error: error.message });
  }
};

exports.getTicket = async (req, res) => {
  try {
    const { serviceId, ticketId } = req.params;
    await checkServiceAccess(req.user.id, serviceId);

    const ticket = await Ticket.findOne({ _id: ticketId, serviceId });
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

    res.json(ticket);
  } catch (error) {
    console.error('Error fetching ticket:', error);
    res.status(error.message.includes('Service not found') ? 404 : 500)
      .json({ message: 'Error fetching ticket', error: error.message });
  }
};

exports.updateTicket = async (req, res) => {
  try {
    const { serviceId, ticketId } = req.params;
    const { status, priority, problemStatement, description } = req.body;

    await checkServiceAccess(req.user.id, serviceId);

    const ticket = await Ticket.findOneAndUpdate(
      { _id: ticketId, serviceId },
      { status, priority, problemStatement, description },
      { new: true }
    );

    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.json(ticket);
  } catch (error) {
    console.error('Error updating ticket:', error);
    res.status(error.message.includes('Service not found') ? 404 : 500)
      .json({ message: 'Error updating ticket', error: error.message });
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    const { serviceId, ticketId } = req.params;
    await checkServiceAccess(req.user.id, serviceId);

    const ticket = await Ticket.findOneAndDelete({ _id: ticketId, serviceId });
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

    res.json({ message: 'Ticket deleted successfully' });
  } catch (error) {
    console.error('Error deleting ticket:', error);
    res.status(error.message.includes('Service not found') ? 404 : 500)
      .json({ message: 'Error deleting ticket', error: error.message });
  }
};

exports.searchTickets = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const { query } = req.query;

    await checkServiceAccess(req.user.id, serviceId);

    const tickets = await Ticket.find({
      serviceId,
      $or: [
        { status: { $regex: query, $options: 'i' } },
        { priority: { $regex: query, $options: 'i' } },
        { problemStatement: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } }
      ]
    });

    res.json(tickets);
  } catch (error) {
    console.error('Error searching tickets:', error);
    res.status(error.message.includes('Service not found') ? 404 : 500)
      .json({ message: 'Error searching tickets', error: error.message });
  }
};
