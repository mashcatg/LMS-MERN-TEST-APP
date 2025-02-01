const Message = require('../models/Message');
const Ticket = require('../models/Ticket');
const Service = require('../models/Service');

const checkServiceAccess = async (userId, serviceId) => {
  const service = await Service.findOne({ _id: serviceId, userId });
  if (!service) throw new Error('Service not found or you do not have access to it');
  return service;
};

const checkTicketAccess = async (serviceId, ticketId) => {
  const ticket = await Ticket.findOne({ _id: ticketId, serviceId });
  if (!ticket) throw new Error('Ticket not found or does not belong to the specified service');
  return ticket;
};

exports.createMessage = async (req, res) => {
  try {
    const { serviceId, ticketId } = req.params;
    const { message } = req.body;

    await checkServiceAccess(req.user.id, serviceId);
    await checkTicketAccess(serviceId, ticketId);

    const newMessage = new Message({
      ticketId,
      senderType: 'user',
      userId: req.user.id,
      message
    });

    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(error.message.includes('not found') ? 404 : 500)
      .json({ message: 'Error creating message', error: error.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const { serviceId, ticketId } = req.params;

    await checkServiceAccess(req.user.id, serviceId);
    await checkTicketAccess(serviceId, ticketId);

    const messages = await Message.find({ ticketId }).sort('time');
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(error.message.includes('not found') ? 404 : 500)
      .json({ message: 'Error fetching messages', error: error.message });
  }
};

exports.updateMessage = async (req, res) => {
  try {
    const { serviceId, ticketId, messageId } = req.params;
    const { message } = req.body;

    await checkServiceAccess(req.user.id, serviceId);
    await checkTicketAccess(serviceId, ticketId);

    const updatedMessage = await Message.findOneAndUpdate(
      { _id: messageId, ticketId, userId: req.user.id, senderType: 'user' },
      { message },
      { new: true }
    );

    if (!updatedMessage) return res.status(404).json({ message: 'Message not found or you are not authorized to update it' });
    res.json(updatedMessage);
  } catch (error) {
    console.error('Error updating message:', error);
    res.status(error.message.includes('not found') ? 404 : 500)
      .json({ message: 'Error updating message', error: error.message });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    const { serviceId, ticketId, messageId } = req.params;

    await checkServiceAccess(req.user.id, serviceId);
    await checkTicketAccess(serviceId, ticketId);

    const deletedMessage = await Message.findOneAndDelete({ 
      _id: messageId, 
      ticketId, 
      userId: req.user.id, 
      senderType: 'user' 
    });

    if (!deletedMessage) return res.status(404).json({ message: 'Message not found or you are not authorized to delete it' });
    res.json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(error.message.includes('not found') ? 404 : 500)
      .json({ message: 'Error deleting message', error: error.message });
  }
};
