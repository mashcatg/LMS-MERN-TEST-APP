const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  serviceName: { type: String, required: true },
  subDomain: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // create new admin account 
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Service', ServiceSchema);
