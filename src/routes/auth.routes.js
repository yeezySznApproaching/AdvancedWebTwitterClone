const express = require('express');
const router = express.Router();
const authServices = require('../services/auth.services');

router.post('/register', authServices.registerUser);
router.post('/login', authServices.loginUser);

module.exports = router;
