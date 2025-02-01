const express = require('express');
const router = express.Router();
const withdrawalController = require('../controllers/WithdrawalController');
const { protect } = require('../middlewares/authMiddleware');

router.use(protect);

router.post('/', withdrawalController.createWithdrawal);
router.get('/', withdrawalController.getWithdrawals);
router.put('/:id', withdrawalController.updateWithdrawal);
router.delete('/:id', withdrawalController.deleteWithdrawal);
router.get('/search', withdrawalController.searchWithdrawals);

module.exports = router;
