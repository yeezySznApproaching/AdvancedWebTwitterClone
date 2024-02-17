const express = require('express');
const router = express.Router();
const tweetsController = require('../services/tweets.services');
const repliesController = require('../services/replies.services');
const authenticateToken = require('../middleware/authenticateToken');

router.get('/', authenticateToken, tweetsController.getHomeFeed);
router.post('/tweet', authenticateToken, tweetsController.postTweet);
router.get('/:tweetId', authenticateToken, tweetsController.getTweet);
router.delete('/:tweetId', authenticateToken, tweetsController.deleteTweet);

router.post('/:tweetId/likes', authenticateToken, tweetsController.likeTweet);
router.delete('/:tweetId/likes', authenticateToken, tweetsController.unlikeTweet);

router.post('/:tweetId/replies', authenticateToken, repliesController.addReply);
router.get('/:tweetId/replies', authenticateToken, repliesController.getReplies);
router.put('/replies/:replyId', authenticateToken, repliesController.updateReply);
router.delete('/replies/:replyId', authenticateToken, repliesController.deleteReply);

module.exports = router;
