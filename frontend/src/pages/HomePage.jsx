import React from 'react'
import Sets from '../components/Sets'

const HomePage = () => {
  return (
    <>
    <section className="px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-teal-600 mb-10 text-center">
          Flashcard Collections
        </h2>
        <Sets />
      </div>
    </section>
    </>
  )
}

export default HomePage
