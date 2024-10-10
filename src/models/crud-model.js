const mongoose = require('mongoose');
const { MongooseConnection } = require('../config');
MongooseConnection()


const crudSchema = mongoose.Schema({
    username: {
        type: String,
    },
    description: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    }
})

const Crud = mongoose.model("Crud", crudSchema);

module.exports = Crud;