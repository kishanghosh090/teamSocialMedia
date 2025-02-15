const mongoose = require("mongoose");
const UserSchema = require('./user.models'); // Is it correct
const { Schema } = mongoose;

const PostSchema = new Schema ({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UserSchema  // Correct here if required
    },
    image: {
        type: String,
    },
    title: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        required: true 
    },
    likes: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId, // Jisne Comment Kia
        ref: UserSchema  // Correct here if required
    }],
    public: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('post', PostSchema);