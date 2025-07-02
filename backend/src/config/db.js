import mongoose from 'mongoose';

// Connect to MongoDB database
export const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNECTED");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit the process with failure
    }
};