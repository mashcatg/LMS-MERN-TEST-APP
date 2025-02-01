const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/register', userController.createUser);
router.post('/login', userController.login);
router.put('/update', protect, userController.updateUser);

module.exports = router;
