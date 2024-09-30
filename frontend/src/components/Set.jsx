import React from 'react'
import { Link } from 'react-router-dom'

const Set = ({ collection }) => {
  return (
    <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div className="absolute top-2 right-2 flex space-x-2 z-10">
            {/* // favorites button */}
            <button className="ml-2 rounded-md bg-teal-700 p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-teal-600 focus:shadow-none active:bg-teal-600 hover:bg-teal-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                <svg className="h-4 w-4 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />  
                <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                </svg>
            </button>

            {/* // delete button */}
            <button onClick={() => handleDeleteCollection(collection._id)} className="ml-2 rounded-md bg-teal-700 p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-teal-600 focus:shadow-none active:bg-teal-600 hover:bg-teal-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>

            {/* // edit button */}
            <button className="ml-2 rounded-md bg-teal-700 p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-teal-600 focus:shadow-none active:bg-teal-600 hover:bg-teal-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                <svg className="h-4 w-4 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
            </button>
        </div>
        <div className="h-48 bg-teal-900 rounded-t-lg flex items-end">
        <Link to={`/collection/${collection._id}`} className="w-full">
            <h5 className="mb-2 ml-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-teal-200">
            {collection.title}
            </h5>
        </Link>
        </div>
        <div className="p-5">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{collection.description}</p>
        </div>
    </div>
  )
}

export default Set
