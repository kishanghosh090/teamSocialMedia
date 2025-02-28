import ApiError from "../utils/ApiError.js";
import { Post } from "../models/post.models.js";
import ApiResponse from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";

// create user post controller
const createPost = async (req, res, next) => {
    try {
        const userId = req.params.id; // <<<<<<<<<<<<<<<<<<
        console.log(userId);
        const { image, title, description } = req.body;
        if([userId, image, title, description].some((value) => !value)){
            return next(new ApiError(500, error.message || "Internal Server Error"));
        }

        // create post
        const newPost = await Post.create({ userId, image, title, description });
        if(!newPost){
            return next(new ApiError(500, error.message || "Post not created"));
        }
        return res.status(201).json(new ApiResponse(201, newPost, "Post Created"));
    } catch (error) {
        return next(new ApiError(500, error.message || "Internal Server Error"));
    }
};

// update user post controller
const updatePost = async (req, res, next) => {
    const id = req.params.id;
    const { title, description } = req.body;
    if([title, description].some((value) => !value)){
        return next(new ApiError(500, error.message || "Internal Server Error"));
    }
    
    const newPost = {};
    if(title){newPost.title = title;}
    if(description){newPost = description;}

    //find the post and updata
    const updatedPost = await Post.findByIdAndUpdate(id, { $set: newPost}, { new: true });

    if(!updatedPost){
        return next(new ApiError(500, error.message || "Internal Server Error"));
    }

    return res.status(201).json(new ApiResponse(201, updatedPost, "Post Updated"));
};

// delete user post controller
const deletePost = (req, res, next) => {};

// get all user posts
const getAllPosts = async (req, res, next) => {
    const userId = req.params.id;  //  <<<<<<<<<<<<<<<<<<<<<<
    if(!id){
        return next(new ApiError(404, error.message || "User not found"));
    }
    const user = await User.findById();
    if(!user){
        return next(new ApiError(500, error.message || "Internal Server Error"));
    }
    const posts = user.posts;
    if(!post){
        return next(new ApiError(500, error.message || "Internal Server Error"));
    }
    return res.status(201).json(new ApiResponse(201, posts, "Success"));
};

export { createPost, updatePost, deletePost, getAllPosts };
