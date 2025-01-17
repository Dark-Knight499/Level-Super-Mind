import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { app } from '../firebaseConfig'
import { useNavigate, Routes, Route } from 'react-router-dom'
import Sidebar from '../components/Dasboard/Sidebar'
import DashboardHome from '../components/Dasboard/DashboardHome'
import AskAI from '../components/Dasboard/AskAI'
import Analytics from '../components/Dasboard/Analytics'
import MeetUp from '../components/Dasboard/MeetUp'

const auth = getAuth(app)

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        setUser(null)
        navigate('/login')
      }
    })

    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [navigate])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      alert('You have been logged out!')
    } catch (error) {
      console.error('Error logging out:', error.message)
    }
  }

  // If the user is not logged in, return null to render nothing
  if (!user) {
    return null
  }

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar user={user} onLogout={handleLogout} />

      {/* Main Content Area */}
      <main className='flex-1 overflow-y-auto bg-neutral-200'>
        <Routes>
          <Route path='/' element={<DashboardHome />} />
          <Route path='/askai' element={<AskAI />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/meetup' element={<MeetUp />} />
        </Routes>
      </main>
    </div>
  )
}

export default Dashboard
