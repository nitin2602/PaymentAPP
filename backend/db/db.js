import mongoose from "mongoose";
import 'dotenv/config'


export async function connect() {
  try {
    await mongoose.connect(
      process.env.DATABASE_URL
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

