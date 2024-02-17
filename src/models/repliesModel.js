const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    tweet: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Tweet', 
        required: true 
    },
    content: { 
        type: String, 
        required: true 
    },
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

const Reply = mongoose.model('Reply', replySchema);
module.exports = Reply;
