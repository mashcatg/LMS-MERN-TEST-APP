const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },//remove it
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  status: { type: String, enum: ['open', 'in-progress', 'resolved'], default: 'open' },
  time: { type: Date, default: Date.now },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  problemStatement: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Ticket', TicketSchema);
