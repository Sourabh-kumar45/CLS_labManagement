import React from 'react'
import { useParams } from 'react-router-dom'

const StudentDashboard = () => {
    const {id}  = useParams(); // here id is unique id Given after the login is complete.
  return (
    <div>
       <section className="bg-gray-100 flex justify-center h-screen">
                <div className="text-center px-4">
                    <h2 className="text-5xl font-bold text-gray-800 mb-4">Welcome to <span className='text-blue-600'>CLS</span></h2>
                    <p className="text-lg text-gray-600 mb-6">
                        The best platform for managing your tasks and projects seamlessly.
                    </p>
                   
                    <a href={`/student/${id}/form`} className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">Get Started</a>
                </div>
            </section>
    </div>
  )
}

export default StudentDashboard
