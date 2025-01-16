import React, { useState } from 'react'
import {
  House,
  Menu,
  Users,
  LogOut,
  BotMessageSquare,
  TrendingUp
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SIDEBAR_ITEMS = [
  {
    name: 'Home',
    icon: House,
    color: '#3B82F6', // Blue
    link: '/'
  },
  {
    name: 'Chatbot',
    icon: BotMessageSquare,
    color: '#EC4899', // Pink
    link: '/chatbot'
  },
  {
    name: 'Dashboard',
    icon: TrendingUp,
    color: '#10B981', // Green
    link: '/dashboard'
  },
  {
    name: 'Team',
    icon: Users,
    color: '#F59E0B', // Yellow
    link: '/team'
  }
]

const Sidebar = ({ user, onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className='h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 p-4 flex flex-col border-r border-gray-600'>
        {/* Sidebar Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className='p-2 rounded-full hover:bg-gray-700 transition-colors cursor-pointer max-w-fit'
        >
          <Menu size={24} className='text-white' />
        </motion.button>

        {/* Navigation Items */}
        <nav className='mt-8 flex-grow'>
          {SIDEBAR_ITEMS.map(item => (
            <Link key={item.link} to={item.link}>
              <motion.div className='flex items-center p-4 text-sm font-medium mb-2 rounded-lg hover:bg-gray-700 transition-colors'>
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: '20px' }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                      className='ml-4 whitespace-nowrap text-white'
                    >
                      {item.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>

        {/* User Section */}
        <div className='mt-4 border-t border-gray-600 pt-4'>
          {/* Logout Button */}
          <motion.div
            className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors cursor-pointer'
            onClick={onLogout}
          >
            <LogOut
              size={20}
              style={{ minWidth: '20px' }}
              className='text-red-500'
            />
            <AnimatePresence>
              {isSidebarOpen && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className='ml-4 whitespace-nowrap text-red-500'
                >
                  Logout
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          {/* User Info */}
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                className='whitespace-nowrap text-red-500'
              >
                <div className={`mt-4 ${isSidebarOpen ? 'block' : 'hidden'}`}>
                  <h2 className='text-lg font-bold text-white'>
                    {user.email.split('@')[0]}
                  </h2>
                  <p className='text-sm text-gray-400'>{user.email}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default Sidebar
