import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="border-t border-gray-300 my-1"></div>
      <footer className="flex flex-wrap justify-around py-2 bg-white">
        <p className="text-gray-500">All copyrights reserved &copy; </p>
        <span className="text-gray-500">
          Operated and managed by students of IIT Bhilai with <i className="fa-regular fa-heart"></i>
        </span>
      </footer>
    </>
  )
}

export default Footer
