const mongoose = require("mongoose");

const uri="mongodb+srv://furyyruf007:OLZFqSCTc1QxBet6@cluster0.b3hzuob.mongodb.net/";

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("DB Connection Successful");
    } catch (err) {
        throw new Error(err.message); // Throw error
    }
}

module.exports = connectDB;
