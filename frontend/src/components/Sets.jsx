import React from 'react'

const Sets = () => {

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
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <div className="h-48 bg-teal-900 rounded-t-lg flex items-end">
                <a href="#" className="w-full">
                  <h5 className="mb-2 ml-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-teal-200">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
              </div>
              <div className="p-5">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <button className="ml-2 rounded-md bg-teal-900 p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-teal-600 focus:shadow-none active:bg-teal-600 hover:bg-teal-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                  <svg className="h-4 w-4 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />  
                    <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                  </svg>
                </button>
                <button className="ml-2 rounded-md bg-teal-900 p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-teal-600 focus:shadow-none active:bg-teal-600 hover:bg-teal-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <button className="ml-2 rounded-md bg-teal-900 p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-teal-600 focus:shadow-none active:bg-teal-600 hover:bg-teal-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                  <svg className="h-4 w-4 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Form to Add New Collection - Always in the Rightmost Column */}
          <div className="col-span-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow p-5 h-96 overflow-auto">
            <h5 className="text-xl font-bold mb-4 text-teal-900">Add New Collection</h5>
            <form>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" id="title" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Enter the title" />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea id="description" rows="4" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Enter the description"></textarea>
              </div>
              <button type="submit" className="w-full py-2 px-4 bg-teal-900 text-white font-medium rounded-md shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500">
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
