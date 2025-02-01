const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const { protect } = require('../middlewares/authMiddleware');

router.use(protect);

router.post('/:serviceId/:ticketId', messageController.createMessage);
router.get('/:serviceId/:ticketId', messageController.getMessages);
router.put('/:serviceId/:ticketId/:messageId', messageController.updateMessage);
router.delete('/:serviceId/:ticketId/:messageId', messageController.deleteMessage);

module.exports = router;
