import ApiError from "../utils/ApiError.js";
import { Post } from "../models/post.models.js";

// create user post controller
const createPost = async (req, res, next) => {
    try {
        const { image, title, description } = req.body;
        if([image, title, description].some((value) => !value)){
            return next(new ApiError(500, error.message || "Internal Server Error"));
        }

        // create post
        const newPost = await Post.create({ image, title, description });
        if(!newPost){
            return next(new ApiError(500, error.message || "Post not created"));
        }
        return res.json({newPost});
    } catch (error) {
        return next(new ApiError(500, error.message || "Internal Server Error"));
    }
};

// update user post controller
const updatePost = (req, res, next) => {};

// delete user post controller
const deletePost = (req, res, next) => {};

// get all user posts
const getAllPosts = (req, res, next) => {};

export { createPost, updatePost, deletePost, getAllPosts };
