import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import arcjetMiddleware from "./middlewares/arcjetMiddleware.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet({
  contentSecurityPolicy: false,
}));
app.use(morgan("dev"));

// Custom middlewares
app.use(arcjetMiddleware);

// Routes
app.use("/api", routes);

// Error handling middleware (add this at the end)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;