// Modules and Globals
const path = require('path')
require('dotenv').config();
const express = require('express')

const cors = require('cors')
const app = express();

const PORT = process.env.PORT
const User = require('./Router/signuprouter') 

require("./Router/signuprouter")

const mongoose = require('mongoose')

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
    .then (() => console.log('DB connection Sucessful'))

app.use(cors())
app.use(express.json)

//signup routes
app.post("/signup", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
  });
  
  //login route
  app.post("/login", async (req, res) => {
    if (req.body.password && req.body.email) {
      let user = await User.findOne(req.body).select("-password");
      if (user) {
        res.send(user);
      } else {
        res.send({ result: "No data found!" });
      }
    } else {
      res.send({ result: "No data found!" });
    }
  });
  

app.listen(process.env.PORT)