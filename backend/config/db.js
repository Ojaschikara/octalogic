import mongoose from "mongoose";

import dotenv from 'dotenv';
dotenv.config();

const  connection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
   
  }
};

export default connection;