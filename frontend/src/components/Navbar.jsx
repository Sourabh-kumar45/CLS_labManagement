import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false)

  return (
    <nav className="bg-zinc-100 shadow-lg mb-6">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600 hover: cursor-pointer">CLS</div>
          
          {/* Links (hidden on small screens) */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">Department</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Student</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Achievements</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Help</a>
          </div>
          
          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-gray-700 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (shown when open) */}
        {open && (
          <div className="md:hidden">
            <a href="#" className="block text-gray-700 py-2 px-4 hover:bg-gray-200">Department</a>
            <a href="#" className="block text-gray-700 py-2 px-4 hover:bg-gray-200">Student</a>
            <a href="#" className="block text-gray-700 py-2 px-4 hover:bg-gray-200">Achievements</a>
            <a href="#" className="block text-gray-700 py-2 px-4 hover:bg-gray-200">Help</a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
