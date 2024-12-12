import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import AlertBox from './AlertBox';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup


  // variables storing the credentials that is to put in the database

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

  const handleSubmitLogin = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/login',{name,email,password})
    .then(result => {
      console.log(result)
      if(result.data === "no record existed") {
        navigate('/register')
      }
      else if(result.data === "incorrect password feeded"){
        navigate('/login',{ state: { errorMessage: "Incorrect password entered",type:"error" }})
      }
      else{
        // here i have to navigate to the particluar route corresponsding to a user.
        const userId = result.data; 
        navigate(`/student/${userId}`); 
      }
    })
    .catch(err => console.log(err))
  }


  // // for error message
  // const location = useLocation(); 
  // const errorMessage = location.state?.errorMessage;
  // const errorType = location.state?.type;

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        
        {/* Toggle between Login and Signup */}
        <div className="flex justify-center items-center mb-6">
          <button
            className={`px-4 py-2 font-bold ${isLogin ? 'text-blue-600' : 'text-gray-500'} hover:text-blue-700 focus:outline-none`}
            onClick={() => setIsLogin(true)}
          >
            Log In
          </button>
          <span className="px-2 text-gray-400">|</span>
          <button
            className={`px-4 py-2 font-bold ${!isLogin ? 'text-blue-600' : 'text-gray-500'} hover:text-blue-700 focus:outline-none`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
  
        {/* Conditional Rendering for Login and Signup Forms */}
        {isLogin ? (
          // Login Form
          <div>
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Login</h2>
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="login-email">
                Email
              </label>
              <input
                type="email"
                id="login-email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="login-password">
                Password
              </label>
              <input
                type="password"
                id="login-password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type='submit'
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              onClick={handleSubmitLogin}
              
            >
              Log In
            </button >
            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600">Forgot Password?</a>
            </div>
          </div>
        ) : (
          // Signup Form
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
        )}
      </div>
      {/* <AlertBox type={errorType} message={errorMessage}></AlertBox> */}
      {/* <AlertBox type="error" message="hi there"></AlertBox> */}
    </div>
  );
};

export default AuthPage;

