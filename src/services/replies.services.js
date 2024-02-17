const Tweet = require('../models/tweetsModel');
const Reply = require('../models/repliesModel');

exports.addReply = async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.tweetId);
    if (!tweet) {
      return res.status(404).json({ message: 'Tweet not found' });
    }

    const reply = new Reply({
      content: req.body.content,
      author: req.user._id,
      tweet: req.params.tweetId
    });

    await reply.save();

    tweet.repliesCount += 1;
    await tweet.save();

    res.status(201).json({ message: 'Reply added', reply });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getReplies = async (req, res) => {
  try {
    const tweetId = req.params.tweetId;

    const replies = await Reply.find({ tweet: tweetId }).populate('author');
    res.status(200).json(replies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateReply = async (req, res) => {
  try {
    const replyId = req.params.replyId;
    const { content } = req.body;

    const reply = await Reply.findOneAndUpdate(
      { _id: replyId, author: req.user._id },
      { content },
      { new: true }
    );

    if (!reply) {
      return res.status(404).json({ message: 'Reply not found or you do not have permission to update it' });
    }

    res.status(200).json({ message: 'Reply updated', reply });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteReply = async (req, res) => {
  try {
    const reply = await Reply.findOneAndDelete({
      _id: req.params.replyId,
      author: req.user._id
    });

    if (!reply) {
      return res.status(404).json({ message: 'Reply not found or you do not have permission to delete it' });
    }

    const tweet = await Tweet.findById(reply.tweet);
    if (tweet) {
      tweet.repliesCount = Math.max(0, tweet.repliesCount - 1);
      await tweet.save();
    }

    res.status(200).json({ message: 'Reply deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};