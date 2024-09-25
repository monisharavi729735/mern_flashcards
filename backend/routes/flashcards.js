const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({msg: 'get all flashcards'})
})

router.get('/:id', (req, res) => {
    res.json({msg: 'get one flashcard'})
})

router.post('/', (req, res) => {
    res.json({msg: 'post new flashcard'})
})

router.delete('/:id', (req, res) => {
    res.json({msg: 'delete a flashcard'})
})

// update
router.patch('/:id', (req, res) => {
    res.json({msg: 'update a flashcard'})
})

module.exports = router