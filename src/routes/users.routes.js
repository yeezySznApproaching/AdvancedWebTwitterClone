const express = require('express');
const router = express.Router();
const usersController = require('../services/users.services');
const authenticateToken = require('../middleware/authenticateToken');

router.get('/profile/:userId', authenticateToken, usersController.getUserProfile);

module.exports = router;
