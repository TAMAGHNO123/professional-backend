import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})



// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";
// (                    //asynchronous IIFE (Immediately Invoked Function Expression)
//     async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         } catch (error) {
//             console.error("Error : ",error)
//             throw error
//         }
//     }
// )()