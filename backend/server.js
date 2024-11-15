import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import questionRoutes from "./routes/questionRoutes.js";
import cors from "cors";

dotenv.config();
connectDB(); //connect to mongoDB database

const app = express();
app.use(express.json());
app.use(cors());

// Question routes
app.use("/api/questions", questionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
