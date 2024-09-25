const mongoose = require('mongoose')

const Schema = mongoose.Schema

const flashcardSchema = new Schema({
    keyword:{
        type: String,
        required: true
    },
    explanation:{
        type: String,
        required: true
    }
}, { timestamps: true })

// Set Schema that contains multiple flashcards
const setSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    flashcards: [flashcardSchema]
}, { timestamps: true })

module.exports = mongoose.model('Set', setSchema);