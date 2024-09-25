require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

// express app
const app = express()
const flashcardRoutes = require('./routes/flashcards')

// middleware
app.use(express.json())

// routes
app.use('/api/flashcards', flashcardRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
            // listen for requests
            app.listen(process.env.PORT, () => {
            console.log('connected to db, listening on port ', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
