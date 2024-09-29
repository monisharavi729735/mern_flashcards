import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import NotFoundPage from './pages/NotFoundPage'
import Flashcards from './pages/Flashcards'

import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import React from 'react'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/collection/:id' element={<Flashcards />} />
      </Route>
    )
  );
      return <RouterProvider router={router} />
}

export default App
