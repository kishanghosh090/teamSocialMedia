const mongoose = require("mongoose");
const UserSchema = require('./user.models');
const { Schema } = mongoose;

const CommentSchema = new Schema ({
    userId : {
        type: mongoose.Schema.Types.ObjectId, // Jiske Post pr comment hua
        ref: UserSchema
    },
    date: {
        type: Date,
        default: Date.now
    },
    message: {
        type: String,
        required: true 
    },
    likes: {
        type: Number,
    },
    replyId: [{
        type: mongoose.Schema.Types.ObjectId, // Jisne reply kia
        ref: UserSchema
    }]
});

module.exports = mongoose.model('comment', CommentSchema);