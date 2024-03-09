const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const uri = `${process.env.MONGODB_URI}/${process.env.DB_NAME}`;
        const connectionInstance = await mongoose.connect(uri);
        console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`MONGODB connection error for URI: ${process.env.MONGODB_URI}/${process.env.DB_NAME}`, error);
        process.exit(1);
    }
};

module.exports = {
    connectDB
};
