const mongoose = require('mongoose');

const WithdrawalHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  trxId: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('WithdrawalHistory', WithdrawalHistorySchema);