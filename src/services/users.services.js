const User = require('../models/usersModel');

exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userTweets = await Tweet.find({ author: userId }).sort({ createdAt: -1 });

    const userProfile = {
      user,
      tweets: userTweets,
    };

    res.status(200).json(userProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
