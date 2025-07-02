import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Enable CORS for frontend
app.use(cors({ origin: "http://localhost:5173" }));

// Middleware to parse JSON bodies
app.use(express.json());

// Apply rate limiting to all requests
app.use(rateLimiter);

// Notes API routes
app.use("/api/notes", notesRoutes);

// Connect to the database, then start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('Server is running on port:', PORT);
    });
});