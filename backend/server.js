const express = require('express');
const connectDB = require('./db/connectDB');
const users = require('./routes/auth');
const hostels = require('./routes/hostels');
const userjson = require('./users.json');
const User = require('./models/userModel');

const bodyParser = require('body-parser');

const app = express();

const start = async () => {
    try {
        await connectDB();
        // remove down
        await User.deleteMany({});
        await User.create(userjson);
        //remove up
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(express.json());
        app.use("/", users);
        app.use("/api",hostels);
        console.log("Server started on port 3000");
        app.listen(3000);
    } catch (error) {
        console.error("Connection failed and error occurred", error);
    }
}

start();
