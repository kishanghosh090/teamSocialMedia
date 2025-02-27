import { User } from "../models/user.models.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

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
const login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      let user = await User.findOne({ email : email });

      if (!user) {
        return next(new ApiError(500, error.message || "User doesn't exist"));
      }

      // Compare the password entered by the user
      if (password !== user.password){
        return res.status(404).send("Invalid Cradentials");
      }

      return res.status(201).json(new ApiResponse(201, user, "Login Successful"));

    } catch (error) {
      return next(new ApiError(500, error.message || "Internal Server Error"));
    }
};

// google login
const googleLogin = (req, res, next) => {};

// edit profile
const editProfile = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { userName, email, password, profilePic, dob, gender, phone } = req.body;
    if([userName, email, password].some((value) => !value)){
      return next(new ApiError(500, error.message || "Please provide valid userName, email and password"));
    }

    const newUser = {};

    if(profilePic){ newUser.profilePic = profilePic; }
    if(dob){ newUser.dob = dob; }
    if(gender){ newUser.gender = gender; }
    if(phone){ newUser.phone = phone; }

    // find user and update
    let user = await User.findByIdAndUpdate( id, { $set: newUser }, { new: true });
    return res.status(201).json(new ApiResponse(201, user, "User Profile Updated"));

  } catch (error) {
    return next(new ApiError(500, error.message || "Internal Server Error"));
  }
};

export { register, login, googleLogin, editProfile };
