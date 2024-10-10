const dotenv= require("dotenv");
const { connect } = require('./db')
dotenv.config();

module.exports={
  PORT:process.env.PORT,
  MongooseConnection: connect,
  SECRET: process.env.JWT_SECRET
}