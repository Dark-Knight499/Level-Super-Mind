import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
        <nav className='w-width flex items-center justify-center gap-5 text-2xl bg-black p-4 text-white'>
            <Link to='/'>Home</Link>
            <Link to="/pricing">Pricing</Link>
        </nav>
    </>
  )
}

export default Nav