const express = require('express')
const {
    createNewSet,
    createNewFlashcard,
    getAllSets,
    getOneSet,
    deleteSet,
    deleteFlashcard
} = require('../controllers/setController')

const router = express.Router()

router.get('/', getAllSets)

router.get('/:id', getOneSet)

// Create new set
router.post('/', createNewSet)

// Create new flashcard
router.post('/:setId/flashcards', createNewFlashcard)

// Delete a set
router.delete('/:id', deleteSet)

// Delete a flashcard
router.delete('/:setId/flashcards/:flashcardsId', deleteFlashcard)

// Update a set
router.patch('/:setId', (req, res) => {
    res.json({msg: 'update a set'})
})

// Update a flashcard
router.patch('/:setId/flashcards/:flashcardsId', (req, res) => {
    res.json({msg: 'update a flashcard'})
})

module.exports = router