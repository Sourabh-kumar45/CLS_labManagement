import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import AlertBox from './AlertBox';

const Register = () => {

  const [name, setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [confirmPwd,setConfirmPwd] = useState();
  const navigate = useNavigate()

  //we have to modify this later to make dynamic. 
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorTimestamp, setErrorTimestamp] = useState(null); // using timestamps for multiple rerendering.

   // we are using the axios to post the data
  const handleSubmit = (e) =>{
    if(password === confirmPwd){
      e.preventDefault()
      axios.post('http://localhost:3000/register',{name,email,password})
      .then((result) => {
        console.log(result);
        navigate('/login',{ state: { message: "Sign up succesful", type: "success" } });
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage({ errorType: 'error', message: 'Registration failed' });
        setErrorTimestamp(Date.now()); // Update timestamp
      });
      
    }
   else{
    setErrorMessage({
      errorType: 'error',
      message: 'Passwords do not match. Please try again.',
    });
    setErrorTimestamp(Date.now()); // Update timestamp
    console.log('Passwords do not match. Please enter the password again.');
   }
  }
  return (
    <div>
      {errorMessage && (
        <AlertBox message={errorMessage.message} type={errorMessage.errorType} key={errorTimestamp} />
        )}
      <div className="flex justify-center items-center min-h-screen bg-zinc-100"  >
          {/* key forces re render  key={errorMessage} */}
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">

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
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="signup-confirm-password">
                Confirm Password
              </label>
              <input
                type="password"
                id="signup-confirm-password"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                onChange={(e) => setConfirmPwd(e.target.value)}
              />
            </div>
            <button type = 'submit'
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
      </div>
    </div>
  )
}

export default Register
