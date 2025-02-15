import mongoose from "mongoose";

const CommentReplySchema = new mongoose.Schema({
  userId: {
    UserId: mongoose.Schema.Type.ObjectId, // Jisne comment ka reply kia
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  message: {
    type: String,
    required: true,
  },
});

export const CommentReply = mongoose.model("commentReply", CommentReplySchema);
