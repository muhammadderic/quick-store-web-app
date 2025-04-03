import express from "express";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Initialize
const app = express();
const PORT = process.env.PORT || 5000;

// Initial routes
app.get("/", (req, res) => {
  res.send("Hello from the backend");
})

// Start server
app.listen(PORT, () => {
  console.log("Server is running on port 5000");
})