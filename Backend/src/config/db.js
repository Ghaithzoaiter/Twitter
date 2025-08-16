import mongoose from "mongoose";
import { ENV } from "./env.js";

export const  connectDB = async () => {
    try{
        await mongoose.connect(ENV.MONGO_URI);
        console.log("Connected to the DB successfully✅");
    }catch(error){
        console.error("Error connecting to the database");
        process.exit(1);
    }
};