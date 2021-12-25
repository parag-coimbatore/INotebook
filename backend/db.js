//To connect to our mongodb

const mongoose = require('mongoose');
const mongoURI= "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false" //our mongo uri
//name of database is given before the ?
const connectToMongo= ()=> {
    mongoose.connect(mongoURI, ()=> {
        console.log("Connected to Mongodb successfully");
    })
}

module.exports = connectToMongo;
