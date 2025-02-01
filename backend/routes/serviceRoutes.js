const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const { protect } = require('../middlewares/authMiddleware');

router.use(protect);

router.post('/', serviceController.createService);
router.get('/', serviceController.getServices);
router.put('/:id', serviceController.updateService);
router.delete('/:id', serviceController.deleteService);
router.get('/search', serviceController.searchServices);

module.exports = router;
