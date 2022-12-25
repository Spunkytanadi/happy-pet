const express = require('express')
const app = express();
const dotenv = require('dotenv').config()
const path = require('path')
const mongoose = require('mongoose')
const PORT = process.env.PORT  
const User = require('./Router/signuprouter') 

require("./Router/signuprouter")

const cors = require('cors')
app.use(cors())
app.use(express.json)
app.use(express.urlencoded({ extended: false }))

mongoose.set('strictQuery', true)
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB."))
  .catch((err) => console.log(err));

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
  

app.listen(process.env.RUNNING_PORT, function () {
    console.log("API is Running on Port: " + process.env.RUNNING_PORT)
})