const { app } = require("./app.js")
const {connectDB} = require("./db/index.js")
const auth = require('./file/auth.forward.js')
const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()

connectDB()
    .then(() => {
        console.log("connected !!");
    })
    .catch((err) => {
        console.log('MONGO db connection failed !!!', err);
    })

    app.get("/",(req,res)=>{
        res.status(200).json({
            name:"vishal",
            class:12,
            roll:"2ADDHDH&^&"
        })
    })