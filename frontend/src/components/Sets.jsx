
import React from 'react'

const Sets = () => {

  return (
    <section className="bg-teal-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-teal-500 mb-10 text-center">
          Flashcard Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div class="h-48 bg-teal-900 rounded-t-lg flex items-end">
                <a href="#" class="w-full">
                    <h5 class="mb-2 ml-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-teal-200">
                        Noteworthy technology acquisitions 2021
                    </h5>
                </a>
            </div>

              <div class="p-5">
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <button class="rounded-md bg-slate-800 p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                  </button>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sets
