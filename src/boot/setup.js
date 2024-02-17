require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimiter = require('../middleware/rateLimiter');
const errorHandler = require('../middleware/errorHandler');
const authenticateToken = require('../middleware/authenticateToken');

const authRoutes = require('../routes/auth.routes');
const tweetsRoutes = require('../routes/tweets.routes');
const usersRoutes = require('../routes/users.routes');

const { initializeDatabase } = require('./database/db_connect');

const app = express();

app.use(rateLimiter);
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/tweets', authenticateToken, tweetsRoutes);
app.use('/api/users', authenticateToken, usersRoutes);
app.use(errorHandler);

initializeDatabase();

module.exports = app;
