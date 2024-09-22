import mongoose from "mongoose";
const mongoose = require('mongoose');
require('dotenv').config();

const  connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
   
  }
};

export default connection