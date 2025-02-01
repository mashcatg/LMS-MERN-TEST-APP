const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  ticketId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket', required: true },
  senderType: { type: String, enum: ['user', 'admin'], required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', MessageSchema);
