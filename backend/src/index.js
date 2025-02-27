import "dotenv/config";
import { app } from "./app.js";
import connectDB from "./db/index.js";

const port = process.env.PORT || 3000;

// Connect to MongoDB------------
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port${port}` );
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  });
