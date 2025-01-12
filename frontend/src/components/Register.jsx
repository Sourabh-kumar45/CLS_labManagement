import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import AlertBox from './AlertBox';

const Register = () => {

  const [name, setName] = useState();
  const [email,setEmail] = useState();
  const [branch,setBranch] = useState();
  const [password,setPassword] = useState();
  const [confirmPwd,setConfirmPwd] = useState();
  const [userType, setUserType] = useState('student');
  const navigate = useNavigate()
  const branches = ["Computer Science", "DSAI", "Electrical", "Mechanical", "ECE", "MSME", "Mechatronics"];
  
  //we have to modify this later to make dynamic. 
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorTimestamp, setErrorTimestamp] = useState(null); // using timestamps for multiple rerendering.

   // we are using the axios to post the data
  const handleSubmit = (e) =>{
    if(password === confirmPwd){
      e.preventDefault()
      axios.post('http://localhost:3000/register',{name,email,branch,password,userType})
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
        <AlertBox
          message={errorMessage.message}
          type={errorMessage.errorType}
          key={errorTimestamp}
        />
      )}
      <div className="flex justify-center items-center min-h-screen bg-zinc-100">
        {/* key forces re render  key={errorMessage} */}
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          {/* Split View for Toggle Buttons */}
          <div className="flex">
            <button
              className={`w-1/2 py-3 text-center text-lg font-semibold transition ${
                userType === "student"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setUserType("student")}
            >
              Student
            </button>
            <button
              className={`w-1/2 py-3 text-center text-lg font-semibold transition ${
                userType === "teacher"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setUserType("teacher")}
            >
              Teacher
            </button>
          </div>
          <br />

          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Sign Up
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="login-email"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="signup-email"
            >
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
          {userType === "teacher" && (
            <div className="mb-4">
              <label
                htmlFor="branch"
                className="block text-gray-700 font-medium mb-2"
              >
                Branch
              </label>
              <select
                id="branch"
                name="branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              >
                <option value="" disabled>
                  Select your branch
                </option>
                {branches.map((branch, idx) => (
                  <option key={idx} value={branch}>
                    {branch}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="signup-password"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="signup-confirm-password"
            >
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
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register
