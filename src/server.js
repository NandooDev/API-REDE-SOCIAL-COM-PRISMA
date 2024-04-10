import express from 'express';
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";
import { routes } from "./routes/index.js";
import { AppError } from "./errors/appError.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
})