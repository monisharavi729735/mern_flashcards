const express = require('express')
const {
    createNewSet,
    createNewFlashcard,
    getAllSets,
    getOneSet,
    deleteSet,
    deleteFlashcard,
    updateSet,
    updateFlashcard
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
router.patch('/:id', updateSet)

// Update a flashcard
router.patch('/:setId/flashcards/:flashcardsId', updateFlashcard)

module.exports = router