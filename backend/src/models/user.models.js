const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  userName: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String, // Please Correct Here
    default: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  dob: {
    type: Date,
  },
  Gender: {
    type: String,
    enum: ["Male", "Female", "Other"], // Is that correct or should we add radio buttons only
  },
  phone: {
    type: Number,
    required: true, // Take a look here
  },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectsId,
      ref: "UserSchema",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserSchema",
    },
  ],
  posts: [
    {
      type: mongoose.Schema.Type.ObjectId,
      ref: "UserSchema",
      required: true,
    },
  ],
});

export const User = mongoose.model("User", UserSchema);
