// app.js or server.js
import express from 'express';
import connectDB from './config/db.js';
import Router from './routes/routes.js';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

dotenv.config(); 
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser()); 
app.use("/uploads", express.static("uploads")); 

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true 
}));

// Connect to MongoDB
connectDB();

// All routes go here
app.use('/', Router);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
