import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

export async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log('MongoDB connected successfully'))
    .catch((err)=>{
        console.log('Failed to connect with MongoDB', err.message);
        process.exit(1);
    });
}