import React, { useState } from 'react';

const Flashcard = ({ flashcard, onDelete, onEdit }) => {
    const [isHeld, setIsHeld] = useState(false);

    const handleMouseDown = () => {
        setIsHeld(true);
    };

    const handleMouseUp = () => {
        setIsHeld(false);
    };

    // Stop flip behavior when using edit/delete buttons
    const handleStopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            className="relative h-96 flex items-center justify-center bg-sky-50 border border-gray-200 rounded-lg shadow-lg p-6 text-center cursor-pointer transition-transform duration-150 ease-in-out transform hover:scale-105"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
        >
            {/* Edit and Delete Buttons */}
            <div className="absolute top-2 right-2 flex space-x-2">
                {/* Delete Button */}
                <button
                    onClick={(e) => {
                        handleStopPropagation(e);
                        onDelete(flashcard._id);
                    }}
                    className="ml-2 rounded-md bg-teal-900 p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-teal-600 focus:shadow-none active:bg-teal-600 hover:bg-teal-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>
                </button>

                {/* Edit Button */}
                <button
                    onClick={(e) => {
                        handleStopPropagation(e);
                        onEdit(flashcard);
                    }}
                    className="ml-2 rounded-md bg-teal-900 p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-teal-600 focus:shadow-none active:bg-teal-600 hover:bg-teal-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    <svg
                        className="h-4 w-4 text-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                    </svg>
                </button>
            </div>

            <h3 className={`text-2xl font-semibold text-gray-900 ${isHeld ? 'hidden' : 'block'}`}>
                {flashcard.keyword}
            </h3>
            <p className={`text-l text-gray-700 ${isHeld ? 'block' : 'hidden'}`}>
                {flashcard.explanation}
            </p>
        </div>
    );
};

export default Flashcard;
