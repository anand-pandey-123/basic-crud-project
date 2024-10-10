const mongoose = require('mongoose');

function connect(){
    try {
        mongoose.connect('mongodb://localhost:27017/CRUD');
         console.log("db connected successfully");
    } catch (error) {
        console.log(error)
        process.exit();
    }
}

module.exports = {
    connect
}