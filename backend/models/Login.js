const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ipAddress: { type: String, required: true },
  token: { type: String, required: true },
  expiryTime: { type: Date, required: true },
  loginTime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Login', LoginSchema);