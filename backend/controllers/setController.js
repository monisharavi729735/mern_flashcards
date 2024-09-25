const Set = require('../models/setModel')
const mongoose = require('mongoose')

// get all sets
const getAllSets = async (req, res) => {
    const sets = await Set.find({}).sort({createdAt:-1})
    res.status(200).json(sets)
}

// get one set
const getOneSet = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error:'no such set' })
    }

    const set = await Set.findById(id)

    if (!set){
      return res.status(404).json({ error:'no such set' }) 
    }

    res.status(200).json(set)
}

// Create new set
const createNewSet = async (req, res) => {
    const { name, flashcards } = req.body
    try {
        const set = await Set.create({ name, flashcards })
        res.status(200).json(set)
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: error.message })
    }
}

// Create new flashcard
const createNewFlashcard = async (req, res) => {
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
}

// Delete a set
const deleteSet = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error:'no such set' })
    }

    const set = await Set.findOneAndDelete({_id:id})

    if (!set){
      return res.status(404).json({ error:'no such set' }) 
    }

    res.status(200).json(set)

}

// Delete a flashcard
const deleteFlashcard = async (req, res) => {
    const { setId, flashcardsId} = req.params

    if (!mongoose.Types.ObjectId.isValid(setId)){
        return res.status(404).json({ error:'no such set' })
    }

    if (!mongoose.Types.ObjectId.isValid(flashcardsId)){
        return res.status(404).json({ error:'no such flashcard' })
    }

    try {
        const set = await Set.findById(setId)

        if (!set){
            return res.status(404).json({ error:'no such set' }) 
        } 

        // Find the flashcard by ID and remove it
        const flashcardIndex = set.flashcards.findIndex(
            (flashcard) => flashcard._id.toString() === flashcardsId
        );

        if (flashcardIndex === -1) {
            return res.status(404).json({ error: 'Flashcard not found' });
        }

        set.flashcards.splice(flashcardIndex, 1)
        await set.save()

        res.status(200).json({msg: 'Flashcard deleted sucessfully'})

    } catch(error) {
        console.error(error)
        res.status(400).json({ error: error.message })
    }
}

// update a set

// update a flashcard

module.exports = {
    createNewSet,
    createNewFlashcard,
    getAllSets,
    getOneSet,
    deleteSet,
    deleteFlashcard
}