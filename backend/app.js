import express from "express";

const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

// Listen
app.listen(5000, () => console.log("Server running on port 5000"));