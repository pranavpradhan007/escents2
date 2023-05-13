//connect to the database mongodb
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const db = process.env.DATABASE;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection successful");
}).catch((err) => console.log("No connection"));
