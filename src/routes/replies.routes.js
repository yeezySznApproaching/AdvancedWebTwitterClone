const express = require('express');
const router = express.Router();
const repliesController = require('../services/replies.services');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/tweets/:tweetId/replies', authenticateToken, repliesController.addReply);
router.get('/tweets/:tweetId/replies', authenticateToken, repliesController.getReplies);
router.put('/replies/:replyId', authenticateToken, repliesController.updateReply);
router.delete('/replies/:replyId', authenticateToken, repliesController.deleteReply);

module.exports = router;


// REDUNDANT