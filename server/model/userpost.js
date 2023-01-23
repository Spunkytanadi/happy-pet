const mongoose = require('mongoose')

const shareSchema = new mongoose.Schema ({
    title: String,
    picture: String
});

module.exports = mongoose.model("Share", userSchema)