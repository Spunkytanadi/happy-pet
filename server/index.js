const express = require('express')
const app = require('express');
require('dotenv').config()
const path = require('path')
const mongoose = require('mongoose')
const PORT = process.env.PORT  
const User = require('./model/user')
const db = process.env.MONGO 
const cors = require('cors')
const router = express.Router();
const methodOverride = require('method-override')

require("./model/user")

mongoose.connect('mongodb://localhost:27017/signup', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }).then(() => {
    console.log("Connected to MongoDB.");
  }).catch(error => {
    console.log("mongo error", error);
});

app.listen(process.env.PORT, function () {
    console.log("API is Running on Port: " + process.env.PORT)
});