const { model } = require('mongoose')
const mongoose = require('mongose')

const Schema = mongoose.Schema

const flashcardSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    keyword:{
        type: String,
        required: true
    },
    explanation:{
        type: String,
        required: true
    }
})

// Set Schema that contains multiple flashcards
const setSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    flashcards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flashcard'
    }]
})

const Flashcard = mongoose.model('Flashcard', flashcardSchema)
const Set = mongoose.model('Set', setSchema)

module.exports = { Flashcard, Set }