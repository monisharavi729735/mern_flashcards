import React, { useState, useEffect } from 'react'
import Set from './Set'

const Sets = () => {

  const [collections, setCollections] = useState([]) // Initialize with an empty array
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // Fetch collections from backend
  useEffect(() => {
    const fetchCollections = async () => {
      const response = await fetch('/api/sets/')
      const json = await response.json()
      console.log('Raw response:', json);

      if (response.ok) {
        setCollections(json)
      }
    }

    fetchCollections()
  }, [])

  // Handle adding a new collection
  const handleAddCollection = async (e) => {
    e.preventDefault(); // Prevent form from submitting the default way (reloading page)

    const newCollection = { title, description }; // Create new collection object

    // Send the new collection to the backend
    const response = await fetch(`/api/sets/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCollection),
    });

    if (response.ok) {
      // If the response is OK, fetch the updated list of collections
      const updatedCollections = await response.json(); // Get the newly created collection response

      setCollections(prevCollections => [...prevCollections, updatedCollections]); // Add new collection to the existing state

      // Clear the form fields
      setTitle('');
      setDescription('');
    }
  };

  return (
    <section className="px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-teal-600 mb-10 text-center">
          Flashcard Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Collection Cards - spanning only 3 columns */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Existing Collection Card */}
            {collections && collections.map((collection, index) => (
              <Set key={index} collection={collection} />
            ))}

          </div>

          {/* Form to Add New Collection - Always in the Rightmost Column */}
          <div className="col-span-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow p-5 h-96 overflow-auto">
            <h5 className="text-xl font-bold mb-4 text-teal-900">Add New Collection</h5>
            <form onSubmit={handleAddCollection}> {/* Added onSubmit handler */}
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input 
                  type="text" 
                  id="title" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm" 
                  placeholder="Enter the title" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea 
                  id="description" 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)}
                  rows="4" 
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm" 
                  placeholder="Enter the description">
                </textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-2 px-4 bg-teal-900 text-white font-medium rounded-md shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                Add Collection
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Sets;
