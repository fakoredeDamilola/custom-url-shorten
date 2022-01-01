const mongoose = require("mongoose")

const UrlSchema = new mongoose.Schema({
    urlID: {
        type: String,
        required: true
    },
    originalURL: {
        type: String,
        required: true
    },
    shortURL: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        required: true,
        default: 0,
    },
    date: {
        type:String,
        default:Date.now
    }
})

module.exports = mongoose.model("Url",UrlSchema)