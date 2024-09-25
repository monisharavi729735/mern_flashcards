const express = require('express')
const Set = require('../models/SetModel')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({msg: 'get all sets'})
})

router.get('/:id', (req, res) => {
    res.json({msg: 'get one set'})
})


// Create new set
router.post('/', async (req, res) => {
    const { name, flashcards } = req.body
    try {
        const set = await Set.create({ name, flashcards })
        res.status(200).json(set)
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: error.message })
    }
});


// Create new flashcard
router.post('/:setId/flashcards', async (req, res) => {
    const {keyword, explanation} = req.body
    const {setId} = req.params
    try {
        const set = await Set.findById(setId)
        if (!set) {
            return res.status(404).json({ error: 'Set not found' });
        }
        set.flashcards.push({ keyword: keyword, explanation: explanation })
        await set.save()
        res.status(200).json(set)
    } catch(error){
        console.error(error)
        res.status(400).json({ error: error.message })
    }
})



// Delete a set
router.delete('/:id', (req, res) => {
    res.json({msg: 'delete a set'})
})


// Delete a flashcard
router.delete(':setId/flashcards/:flashcardsId', (req, res) => {
    res.json({msg: 'delete a flashcard'})
})


// update a set
router.patch('/:setId', (req, res) => {
    res.json({msg: 'update a set'})
})


// update a flashcard
router.patch('/:setId/flashcards/:flashcardsId', (req, res) => {
    res.json({msg: 'update a flashcard'})
})

module.exports = router