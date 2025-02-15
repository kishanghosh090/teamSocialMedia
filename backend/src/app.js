import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//cors config
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes middlewares
import userRoute from "./routes/user.routes.js";

app.use("/api/v1/users", userRoute);

export { app };
