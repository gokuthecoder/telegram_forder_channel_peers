const { app } = require("./app.js")
const {connectDB} = require("./db/index.js")
const auth = require('./file/auth.forward.js')
const dotenv = require("dotenv")
dotenv.config()

connectDB()
    .then(() => {
        console.log("connected !!");
    })
    .catch((err) => {
        console.log('MONGO db connection failed !!!', err);
    })