import { User } from "../models/user.models";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";

// register controller
const register = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;
    if ([userName, email, password].some((value) => !value)) {
      return next(new ApiError(400, "All fields are required"));
    }
    // check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return next(new ApiError(400, "User already exists"));
    }
    // create new user
    const newUser = await User.create({ userName, email, password });
    if (!newUser) {
      return next(
        new ApiError(500, "User not created|| Internal server error")
      );
    }
    return res.status(201).json(new ApiResponse(201, newUser, "User created"));
  } catch (error) {
    return next(new ApiError(500, error.message || "Internal server error"));
  }
};

// login controller
const login = (req, res, next) => {
    
};

// google login
const googleLogin = (req, res, next) => {};

// edit profile
const editProfile = (req, res, next) => {};

export { register, login, googleLogin, editProfile };
