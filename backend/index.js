import express from "express"
import dotenv from "dotenv";
import connection from "./config/db.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin:'*'
  }));

const PORT = process.env.PORT || 8080;




app.listen(PORT,async()=>{
    try {
       await connection;
       console.log(`Server is running on PORT: ${PORT} and DB is also connected`) 
    } catch (error) {
        console.log(`Error occured during server connection${error}`)
        
    }
})