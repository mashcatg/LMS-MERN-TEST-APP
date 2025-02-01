const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
const { protect } = require('../middlewares/authMiddleware');

router.use(protect);

router.post('/:serviceId', ticketController.createTicket);
router.get('/:serviceId', ticketController.getTickets);
router.get('/:serviceId/search', ticketController.searchTickets);
router.get('/:serviceId/:ticketId', ticketController.getTicket);
router.put('/:serviceId/:ticketId', ticketController.updateTicket);
router.delete('/:serviceId/:ticketId', ticketController.deleteTicket);

module.exports = router;
