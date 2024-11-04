import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import routes from "./routes/index.js";

dotenv.config();

const app = express();

connectDB();

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server up");
});

// Routes
app.use("/", routes);

export default app;
