const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log("======== MongoDB Conected ========");
        return connection;
    } catch (error) {
        console.log("MongoDB Connection Failed:", error)
    }
}

module.exports = connectDB;