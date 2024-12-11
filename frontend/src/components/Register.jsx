import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [name, setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const navigate = useNavigate()

    // we are using the axios to post the data

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3000/register',{name,email,password})
    .then(result => console.log(result))
    navigate('/login')
    .catch(err=> console.log(err))
  }
  return (
    <div>
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Sign Up</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="login-email">
                Name
              </label>
              <input
                type="text"
                id="login-name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="signup-email">
                Email
              </label>
              <input
                type="email"
                id="signup-email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="signup-password">
                Password
              </label>
              <input
                type="password"
                id="signup-password"
                placeholder="Create a password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* i would implement confirm password later */}
            {/* <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="signup-confirm-password">
                Confirm Password
              </label>
              <input
                type="password"
                id="signup-confirm-password"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div> */}
            <button type = 'submit'
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
  )
}

export default Register
