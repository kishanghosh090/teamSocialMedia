import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  updatePost,
} from "../controllers/post.controller.js";
import { likeOrDislike } from "../controllers/likes.controller.js";
import {
  createComment,
  deleteComment,
  editComment,
} from "../controllers/comments.controller.js";

const router = express.Router();

router.route("/getAllPosts").get(getAllPosts);
router.route("/createPost").post(createPost);
router.route("/updatePost").post(updatePost);
router.route("/deletePost").post(deletePost);
router.route("/likePost").post(likeOrDislike);
router.route("/createComment").post(createComment);
router.route("/editComment").put(editComment);
router.route("/deleteComment").delete(deleteComment);

export default router;
