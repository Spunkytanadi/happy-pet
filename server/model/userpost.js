const mongoose = require('mongoose')

const shareSchema = new mongoose.Schema ({
    title: String,
    picture: Boolean
});

module.exports = mongoose.model("Share", userSchema)