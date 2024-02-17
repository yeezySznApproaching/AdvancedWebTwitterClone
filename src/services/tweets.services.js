const Tweet = require('../models/tweetsModel');

exports.getHomeFeed = async (req, res) => {
    try {
      const tweets = await Tweet.find().populate('author').sort({ createdAt: -1 });
      res.status(200).json(tweets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.postTweet = async (req, res) => {
    try {
      const newTweet = new Tweet({
        content: req.body.content,
        author: req.user._id,
      });
  
      await newTweet.save();
      res.status(201).json({ message: "Tweet posted successfully", tweet: newTweet });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  exports.deleteTweet = async (req, res) => {
    try {
      const tweet = await Tweet.findByIdAndDelete({
        _id: req.params.tweetId,
        author: req.user._id,
      });
  
      if (!tweet) {
        return res.status(404).json({ message: "Tweet not found or user not authorized" });
      }
  
      res.status(200).json({ message: "Tweet deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.getTweet = async (req, res) => {
    try {
      const tweet = await Tweet.findById(req.params.tweetId).populate('author', 'username');
  
      if (!tweet) {
        return res.status(404).json({ message: "Tweet not found" });
      }
  
      res.status(200).json(tweet);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.likeTweet = async (req, res) => {
    try {
      const tweet = await Tweet.findById(req.params.tweetId);
  
      if (!tweet) {
        return res.status(404).json({ message: "Tweet not found" });
      }
  
      if (tweet.likedBy.includes(req.user._id)) {
        return res.status(400).json({ message: "Tweet already liked" });
      }
  
      tweet.likesCount += 1;
      tweet.likedBy.push(req.user._id);
      await tweet.save();
  
      res.status(200).json({ message: "Tweet liked successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.unlikeTweet = async (req, res) => {
    try {
      const tweet = await Tweet.findById(req.params.tweetId);
  
      if (!tweet) {
        return res.status(404).json({ message: "Tweet not found" });
      }
  
      if (!tweet.likedBy.includes(req.user._id)) {
        return res.status(400).json({ message: "Tweet not liked yet" });
      }
  
      tweet.likesCount = Math.max(0, tweet.likesCount - 1);
      tweet.likedBy.pull(req.user._id);
      await tweet.save();
  
      res.status(200).json({ message: "Tweet unliked successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };