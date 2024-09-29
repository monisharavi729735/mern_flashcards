import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Flashcard from '../components/Flashcard'

const Flashcards = () => {
    const [flashcards, setFlashcards] = useState(null)
    const { id } = useParams()  // Get the collection ID from the URL

    useEffect(() => {
        const fetchFlashcards = async () => {
            const response = await fetch(`/api/sets/${id}`)  // Use the ID in the URL
            const json = await response.json()
            console.log('Raw response:', json)

            if (response.ok) {
                setFlashcards(json.flashcards)  // Assuming `json` contains a set with a `flashcards` field
            }
        }

        if (id) {
            fetchFlashcards()
        }
    }, [id])  // Add `id` as a dependency to re-fetch if the ID changes

    return (
        <>
            <section className="px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-teal-600 mb-10 text-center">
                        Flashcards
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Collection Cards - spanning only 3 columns */}
                        <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Existing Collection Card */}
                            {flashcards && flashcards.map((flashcard, index) => (
                                <Flashcard key={index} flashcard={flashcard} />
                            ))}
                        </div>

                        <div className="col-span-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow p-5 h-96 overflow-auto">
                            <h5 className="text-xl font-bold mb-4 text-teal-900">Add New Flashcard</h5>
                            <form>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Keyword</label>
                                <input type="text" id="title" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Enter the keyword" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Explanantion</label>
                                <textarea id="description" rows="4" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Enter the explanation"></textarea>
                            </div>
                            <button type="submit" className="w-full py-2 px-4 bg-teal-900 text-white font-medium rounded-md shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500">
                                Add Flashcard
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Flashcards
