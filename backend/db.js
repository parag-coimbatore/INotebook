//To connect to our mongodb

const mongoose = require('mongoose');
const mongoURI= "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false" //our mongo uri

const connectToMongo= ()=> {
    mongoose.connect(mongoURI, ()=> {
        console.log("Connected to Mongodb successfully");
    })
}

module.exports = connectToMongo;
