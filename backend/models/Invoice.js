const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dueDate: { type: Date, required: true },
  paymentDate: { type: Date },
  amount: { type: Number, required: true },
  trxId: { type: String },
  status: { type: String, enum: ['pending', 'paid', 'overdue'], default: 'pending' } // paid, unpaid, expired
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
