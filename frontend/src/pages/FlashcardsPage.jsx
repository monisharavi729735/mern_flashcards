import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Flashcard from '../components/Flashcard';

const FlashcardsPage = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [title, setTitle] = useState ('');
    const [keyword, setKeyword] = useState('');
    const [explanation, setExplanation] = useState('');
    const { id } = useParams();  // Get the collection ID from the URL

    // Fetch flashcards on component mount or when ID changes
    useEffect(() => {
        const fetchFlashcards = async () => {
            const response = await fetch(`/api/sets/${id}`);
            const json = await response.json();
            console.log('Fetched flashcards:', json);

            if (response.ok) {
                setFlashcards(json.flashcards);
                setTitle(json.title);
            }
        };

        if (id) {
            fetchFlashcards();
        }
    }, [id]);

    const handleAddFlashcard = async (e) => {
        e.preventDefault();

        const newFlashcard = { keyword, explanation };

        // Send the new flashcard to the backend
        const response = await fetch(`/api/sets/${id}/flashcards/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFlashcard),
        });

        if (response.ok) {
            const flashcardsResponse = await fetch(`/api/sets/${id}`);
            const updatedFlashcards = await flashcardsResponse.json();
            if (flashcardsResponse.ok) {
                setFlashcards(updatedFlashcards.flashcards);
            }

            // Clear the form fields
            setKeyword('');
            setExplanation('');
        }
    };

    const handleDeleteFlashcard = (flashcardId) => {
        setFlashcards(flashcards.filter((flashcard) => flashcard._id !== flashcardId));
    };

    return (
        <>
            <section className="px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-teal-600 mb-10 text-center">
                        {title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Flashcards - spanning only 3 columns */}
                        <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {flashcards && flashcards.map((flashcard, index) => (
                            <Flashcard key={index} flashcard={flashcard} setId={id} onDelete={handleDeleteFlashcard} />
                        ))}
                        </div>

                        <div className="col-span-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow p-5 h-96 overflow-auto">
                            <h5 className="text-xl font-bold mb-4 text-teal-900">Add New Flashcard</h5>
                            <form onSubmit={handleAddFlashcard}>
                                <div className="mb-4">
                                    <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">Keyword</label>
                                    <input
                                        type="text"
                                        id="keyword"
                                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                                        placeholder="Enter the keyword"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="explanation" className="block text-sm font-medium text-gray-700">Explanation</label>
                                    <textarea
                                        id="explanation"
                                        rows="4"
                                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                                        placeholder="Enter the explanation"
                                        value={explanation}
                                        onChange={(e) => setExplanation(e.target.value)}
                                    ></textarea>
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
    );
};

export default FlashcardsPage;