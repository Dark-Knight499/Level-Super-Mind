import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'

function App () {
  return (
    <div>
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-[#111826]'></div>
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  )
}
export default App
