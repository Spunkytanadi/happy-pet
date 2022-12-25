const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String
})

module.export = mongoose.model('registration', userSchema)