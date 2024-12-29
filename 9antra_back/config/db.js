const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const db = async () =>{
    try {
        await mongoose.connect(
            'mongodb://localhost:27017/9antra_db'
            );
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log('MongoDB connection error:', error)
    }
} 

module.exports = db