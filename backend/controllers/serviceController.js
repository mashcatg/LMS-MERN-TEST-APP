const Service = require('../models/Service');

exports.createService = async (req, res) => {
  try {
    const { serviceName, subDomain } = req.body;
    const service = new Service({
      serviceName,
      subDomain,
      userId: req.user.id
    });
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: 'Error creating service', error: error.message });
  }
};

exports.getServices = async (req, res) => {
  try {
    const services = await Service.find({ userId: req.user.id });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching services', error: error.message });
  }
};

exports.updateService = async (req, res) => {
  try {
    const { serviceName, subDomain, status } = req.body;
    const service = await Service.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { serviceName, subDomain, status },
      { new: true }
    );
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: 'Error updating service', error: error.message });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting service', error: error.message });
  }
};

exports.searchServices = async (req, res) => {
  try {
    const { query } = req.query;
    const services = await Service.find({
      userId: req.user.id,
      $or: [
        { serviceName: { $regex: query, $options: 'i' } },
        { subDomain: { $regex: query, $options: 'i' } },
        { status: { $regex: query, $options: 'i' } }
      ]
    });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Error searching services', error: error.message });
  }
};
