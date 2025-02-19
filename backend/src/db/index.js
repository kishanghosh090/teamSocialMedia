import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// Check if MONGO_URI is defined
if (!process.env.MONGODB_URI || !DB_NAME) {
  throw new Error("MONGO_URI is not defined");
}

// Connect to MongoDB
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );

    if (!connectionInstance) {
      process.exit(1);
    }
    console.log("Connected to MongoDB at ", connectionInstance.connection.host);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
