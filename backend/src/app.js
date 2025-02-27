import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import ApiError from "./utils/ApiError.js";

const app = express();

// cors config---------
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// middlewares----------------
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes middlewares---------------------
import userRoute from "./routes/user.routes.js";
import postRoute from "./routes/post.routes.js";

app.use("/api/v1/users", userRoute);
app.use("/api/v1/posts", postRoute);

// error middlewares-----------------------
app.use((error, req, res, next) => {
  if (error instanceof ApiError) {
    return res.json(new ApiError(error.status, error.message));
  }
});

export { app };
