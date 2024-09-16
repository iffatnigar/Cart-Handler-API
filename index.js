import express from "express";
import mongoose from "mongoose";
import cartRoutes from "./routes/cartRoutes.js"; // Adjust the path if necessary

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/cart", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Use cart routes
app.use("/cart", cartRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
