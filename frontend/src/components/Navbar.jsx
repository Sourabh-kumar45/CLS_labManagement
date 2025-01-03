import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false); // State for mobile menu toggle
  const { id } = useParams(); // Get user ID from URL parameters

  return (
    <nav className="bg-zinc-100 shadow-lg mb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600 hover:cursor-pointer">
            <a href={id ? `/student/${id}` : '/'}>CLS</a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {id ? (
              // Links for signed-in users
              <>
                {/* i have removed the department route insted usihng teh itme issue departmetn list. */}
                <a href={`/student/${id}/itemIssueDepartmentList`} className="text-gray-700 hover:text-blue-600">Department</a>
                <a href={`/student/${id}/itemIssueDepartmentList`} className="text-gray-700 hover:text-blue-600">Issue Item</a>

                <a href={`/student/${id}/itemIssueDepartmentList`} className="text-gray-700 hover:text-blue-600">Issue Item</a>
                
                <a href={`/student/${id}/achievement`} className="text-gray-700 hover:text-blue-600">Achievements</a>
                <a href={`/student/${id}/help`} className="text-gray-700 hover:text-blue-600">Help</a>
                <a
                  href="/"
                  className="inline-block text-white bg-slate-300  hover:bg-red-400 py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the default link behavior (navigation)
                    const isConfirmed = window.confirm("Are you sure you want to log out?");

                    if (isConfirmed) {
                      // Perform the logout functionality here
                      // For example, clear session storage, cookies, or call the API for logging out
                      // Example:
                      // sessionStorage.removeItem("userToken");
                      // localStorage.removeItem("userToken");
                      
                      // Then, redirect to the home page or login page after logout
                      window.location.href = "/";
                    }
                  }}
                >
                  Log Out
                </a>
              </>
            ) : (
              // Links for unsigned users
              <>
                <a href="/achievement" className="text-gray-700 hover:text-blue-600">Achievements</a>
                <a href="/help" className="text-gray-700 hover:text-blue-600">Help</a>
                <a href="/register" className="inline-block text-white bg-blue-600 hover:bg-blue-700 py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm">
                  Sign Up
                </a>
                <a href="/login" className="inline-block text-white bg-slate-500 hover:bg-slate-300 py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm">
                  Log In
                </a>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-gray-700 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (shown when open) */}
        {open && (
          <div className="md:hidden">
            {id ? (
              // Mobile links for signed-in users
              <>
                <a href="/department" className="block text-gray-700 py-2 px-4 hover:bg-gray-200">Department</a>
                <a href="/student" className="block text-gray-700 py-2 px-4 hover:bg-gray-200">Student</a>
                <a href="/achievement" className="block text-gray-700 py-2 px-4 hover:bg-gray-200">Achievements</a>
                <a href="/help" className="block text-gray-700 py-2 px-4 hover:bg-gray-200">Help</a>
                <a href="/" className="block text-white bg-red-400 py-2 px-4 rounded hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm">
                  Log Out
                </a>
              </>
            ) : (
              // Mobile links for unsigned users
              <>
                <a href="/achievement" className="block text-gray-700 py-2 px-4 hover:bg-gray-200">Achievements</a>
                <a href="/help" className="block text-gray-700 py-2 px-4 hover:bg-gray-200">Help</a>
                <a href="/register" className="block text-white bg-blue-600 py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm">
                  Sign Up
                </a>
                <a href="/login" className="block text-white bg-slate-500 py-2 px-4 rounded hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm">
                  Log In
                </a>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;