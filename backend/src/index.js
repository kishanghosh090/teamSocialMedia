import "dotenv/config";
import { app } from "./app";
import connectDB from "./db";

const PORT = process.env.PORT || 3000;

// Connect to MongoDB------------
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  });
