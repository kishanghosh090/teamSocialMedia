import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  updatePost,
} from "../controllers/post.controller";
import { likeOrDislike } from "../controllers/likes.controller";

const router = express.Router();

router.route("/getAllPosts").get(getAllPosts);
router.route("/createPost").post(createPost);
router.route("/updatePost").post(updatePost);
router.route("/deletePost").post(deletePost);
router.route("/likePost").post(likeOrDislike);
export default router;
