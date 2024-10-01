Flashcard App
=============

This project is a simple Flashcard web application built using the **MERN stack** (MongoDB, Express, React, and Node.js). It features a backend API for managing flashcard sets and individual flashcards, and a React frontend to display and interact with them. The app allows users to add, view, edit, and delete flashcards. It can be used for various subjects, such as philosophy, science, or any study material.

Features
--------

-   **MERN stack** architecture: MongoDB (database), Express and Node.js (backend), React.js (frontend)
-   Add new flashcards with keywords and explanations
-   View flashcards in a card layout
-   Edit or delete existing flashcards
-   Fetch flashcards from a MongoDB database through a backend API

Installation
------------

Follow these steps to set up the project locally.

### Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn package manager
-   MongoDB (local or cloud, e.g., MongoDB Atlas)

### Backend Setup (Node.js + Express)

1.  Clone the repository:

    `git clone https://github.com/your-username/flashcard-app-mern.git
    cd flashcard-app-mern/backend`

2.  Install dependencies:

    `npm install`

3.  Set up a MongoDB database (either locally or using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)) and configure the MongoDB URI in the `.env` file.

    **Example `.env` file**:

    `MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/flashcardDB?retryWrites=true&w=majority
    PORT=5000`

4.  Run the backend server:

    `npm start`

    The backend should now be running on http://localhost:4000.

### Frontend Setup (React)

1.  Navigate to the frontend folder:

    `cd ../frontend`

2.  Install dependencies:

    `npm install`

3.  Start the React development server:

    `npm start`

    The frontend should now be running on http://localhost:3000.

### Running the Application

1.  With both the backend and frontend servers running, open your browser and visit http://localhost:3000.
2.  You can now start adding, editing, and deleting flashcards in the web interface.

### MongoDB Configuration

The app uses MongoDB to store flashcard sets and individual flashcards. Make sure your MongoDB database is correctly configured and the connection URI is properly set in the `.env` file.

API Endpoints
-------------

Here are the key backend API endpoints for managing flashcards:

### Flashcard Set Routes

-   **GET /api/sets**: Fetch all flashcard sets.
-   **POST /api/sets**: Create a new flashcard set.
    -   **Request body**:

        `{
          "title": "Set Title"
        }`

-   **DELETE /api/sets/:id**: Delete a flashcard set by its `id`.
-   **PATCH /api/sets/:id**: Update a flashcard set by its `id`.
    -   **Request body**:

        `{
          "title": "Updated Set Title"
        }`

### Flashcard Routes
    
-   **GET /api/sets/:id**: Fetch a single flashcard set by its `id`.
-   **POST /api/sets/:id/flashcards**: Create a new flashcard within a specific set (`setId`).
    -   **Request body**:

        `{
          "keyword": "Flashcard Keyword",
          "explanation": "Flashcard Explanation"
        }`

-   **DELETE /api/sets/:setId/flashcards/:flashcardsId**: Delete a specific flashcard from a set.
-   **PATCH /api/sets/:setId/flashcards/:flashcardsId**: Update a specific flashcard.
    -   **Request body**:

        `{
          "keyword": "Updated Flashcard Keyword",
          "explanation": "Updated Flashcard Explanation"
        }`
