// Modules and Globals
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')
const PORT = process.env.PORT
const methodOverride = require('method-override')
const users = [];
const generateID = () => Math.random().toString(36).substring(2, 10);


// Express Settings
app.use(cors())
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/api", (req, res) => {
    res.json({ message: "Hello world" });
});

app.post("/api/register", (req, res) => {
    const { email, password, username } = req.body;
    let result = users.filter((user) => user.email === email);

    if (result.length === 0) {
        const newUser = { id: generateID(), email, password, username, tel };
        users.push(newUser);
        return res.json({
            message: "Account created successfully!",
        });
    }
    res.json({
        error_message: "User already exists",
    });
});

app.use('./login', (req,res) => {
    res.send({
        token: 'test123'
    });
}) ;


app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})