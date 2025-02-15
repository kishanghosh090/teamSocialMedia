const mongoose = require("mongoose");
const UserSchema = require('./user.models')
const { Schema } = mongoose;

const CommentReplySchema = new Schema ({
    userId : {
        UserId: mongoose.Schema.Type.ObjectId, // Jiske Comment pr reply hua
        ref: UserSchema
    },
    date: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
    },
    message: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('reply', CommentReplySchema);