// Modules and Globals
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')
const PORT = process.env.PORT
const methodOverride = require('method-override')

// Express Settings
app.use(cors())
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/feed', require('./controllers/'))
app.use('/profile', require('./controllers/users'))

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})