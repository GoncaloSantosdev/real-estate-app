import express from "express";
import dotenv from "dotenv";
dotenv.config();
// DB Connection
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;
connectDB();

const app = express();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
