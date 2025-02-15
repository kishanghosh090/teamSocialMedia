import express from "express";

const app = express();

// routes middlewares
import userRoute from "./routes/user.routes.js";

app.use("/api/v1/users", userRoute);

export { app };
