//require('dotenv').config({path:'./env'});
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js"

import connnectDB from "./db/index.js";
dotenv.config({
    path: "./.env"
    });
    console.log(process.env.MONGODB_URI);
connnectDB()

.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
    console.log(`server is running at port:${process.env.PORT}`);
})
})

.catch((err)=>{
    console.error("Error connecting to MongoDB:", err);
})






/*
import express from "express";
const app = express();

;(async () => {
    try {
        const connection = await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}',)
        app.on("error", (error) => {
            console.error("Error connecting to MongoDB:", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        }
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
})()*/
