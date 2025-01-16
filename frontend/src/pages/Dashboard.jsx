import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { app } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Dasboard/Sidebar'

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
    <div className='flex min-h-screen w-full'>
      <Sidebar user={user} onLogout={handleLogout}/>
      <main className='w-full py-6 px-4 lg:px-8 bg-indigo-600 mx-auto text-center'>
        wfefesg
      </main>
    </div>
  )
}

export default Dashboard
