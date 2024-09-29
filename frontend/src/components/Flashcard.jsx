import React, { useState } from 'react'

const Flashcard = ({ flashcard }) => {
    const [isHeld, setIsHeld] = useState(false)

    // Handle press-and-hold for desktop (mouse) and mobile (touch)
    const handleMouseDown = () => {
        setIsHeld(true)
    }

    const handleMouseUp = () => {
        setIsHeld(false)
    }

    return (
        <div
            className="relative h-96 flex items-center justify-center bg-sky-50 border border-gray-200 rounded-lg shadow-lg p-6 text-center cursor-pointer transition-transform duration-150 ease-in-out transform hover:scale-105"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
        >
            <h3 className={`text-2xl font-semibold text-gray-900 ${isHeld ? 'hidden' : 'block'}`}>
                {flashcard.keyword}
            </h3>
            <p className={`text-l text-gray-700 ${isHeld ? 'block' : 'hidden'}`}>
                {flashcard.explanation}
            </p>
        </div>
    )
}

export default Flashcard
