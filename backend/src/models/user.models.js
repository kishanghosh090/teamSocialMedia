const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema ({
    userName: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true 
    },
    profilePic: {
        type: String, // Please Correct Here
    },
    dob: {
        type: Date,
        required: true 
    },
    Gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'], // Is that correct or should we add radio buttons only
        required: true
    },
    phone: {
        type: Number,
        required: true // Take a look here
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectsId,
        ref: 'UserSchema'
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserSchema'
    }],
    posts: [{
        userId: {
            type: mongoose.Schema.Type.ObjectId,
            ref: 'UserSchema',
            required: true 
        },
        image: {
            type: String // Correct here
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
            type: Number
        },
        date: {
            type: Date,
            default: Date.now
        },
        comments: [{
            userId: {
                type: mongoose.Schema.Type.ObjectId,
                ref: 'UserSchema'
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
            replies: [{
                userId: {
                    type: mongoose.Schema.Type.ObjectId,
                    ref: 'UserSchema'
                },
                date: {
                    type: Date,
                    default: Date.now
                },
                likes: {
                    type: Number
                },
                message: {
                    type: String,
                    required: true
                }
            }]
        }]
    }]
})