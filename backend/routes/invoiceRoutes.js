const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');
const { protect } = require('../middlewares/authMiddleware');

console.log('Invoice routes being set up');

router.use(protect);

router.post('/', invoiceController.createInvoice);
router.get('/', invoiceController.getInvoices);
router.put('/:id', invoiceController.updateInvoice);
router.delete('/:id', invoiceController.deleteInvoice);
router.get('/search', invoiceController.searchInvoices);

console.log('Invoice routes setup complete');

module.exports = router;
