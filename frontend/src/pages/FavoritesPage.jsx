import React, { useState, useEffect } from 'react';
import Set from '../components/Set';

const FavoritesPage = () => {
  const [collections, setCollections] = useState(null);

  useEffect(() => {
    const fetchCollections = async () => {
      const response = await fetch('/api/sets/');
      const json = await response.json();
      console.log('Raw response:', json);

      if (response.ok) {
        setCollections(json); // Set the collections with all fetched data
      }
    };

    fetchCollections();
  }, []);

  // Filter collections to only include favorites
  const favoriteCollections = collections ? collections.filter(collection => collection.favorite) : [];

  return (
    <section className="px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-teal-600 mb-10 text-center">
          Your Favorites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Collection Cards - spanning only 3 columns */}
        <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Existing Collection Card */}
            {favoriteCollections.length > 0 ? (
            favoriteCollections.map((collection, index) => (
                <Set key={index} collection={collection} />
            ))
            ) : (
            <p className="col-span-3 text-center text-gray-500">No favorite sets found.</p>
            )}
        </div>
        </div>
      </div>
    </section>
  );
};

export default FavoritesPage;
