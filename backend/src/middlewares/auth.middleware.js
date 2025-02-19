import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";

const verifyJWT = async (req, res, next) => {
  try {
    const token = req?.cookies?.token;

    if (!token) {
      return next(new ApiError(401, "Unauthorized"));
    }

    // is Authenticated
    await jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return next(new ApiError(401, "Unauthorized"));
      }
      req.user = decoded;
      next();
    });
  } catch (error) {
    next(new ApiError(401, error.message || "Unauthorized"));
  }
};

export { verifyJWT };
