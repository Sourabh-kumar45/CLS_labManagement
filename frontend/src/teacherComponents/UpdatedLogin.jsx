import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import AlertBox from './AlertBox';

const UpdatedLogin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student');
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorTimestamp, setErrorTimestamp] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.message) {
      setErrorMessage({
        message: location.state.message,
        type: location.state.type,
      });
      setErrorTimestamp(Date.now());
    }
  }, [location.state]);

  const validateForm = () => {
    if (!name || !email || !password) {
      setErrorMessage({ type: 'error', message: 'All fields are required' });
      setErrorTimestamp(Date.now());
      return false;
    }
    return true;
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const result = await axios.post('http://localhost:3000/login', { name, email, password, userType });
      const userId = result.data;
      if (userId === "no record existed") {
        setErrorMessage({ type: 'warning', message: 'No record Existed' });
      } else if (userId === "incorrect password feeded") {
        setErrorMessage({ type: 'error', message: 'Incorrect password entered' });
      } else {
        navigate(`/${userType}/${userId}`, { state: { message: "Login Successful!", type: "success" } });
      }
    } catch (error) {
      console.error("Login error", error);
      setErrorMessage({ type: 'error', message: 'Server error. Please try again later.' });
    } finally {
      setIsLoading(false);
      setErrorTimestamp(Date.now());
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-10 rounded-lg shadow-xl">
        {/* Split View for Toggle Buttons */}
        <div className="flex">
          <button
            className={`w-1/2 py-3 text-center text-lg font-semibold transition ${
              userType === 'student' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setUserType('student')}
          >
            Student
          </button>
          <button
            className={`w-1/2 py-3 text-center text-lg font-semibold transition ${
              userType === 'teacher' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setUserType('teacher')}
          >
            Teacher
          </button>
        </div>

        <h2 className="text-3xl font-bold text-center text-blue-600 mt-6 mb-8">Login</h2>

        <form onSubmit={handleSubmitLogin}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-lg text-white font-semibold transition duration-150 ease-in-out ${
              isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700 focus:bg-blue-700'
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-gray-500 hover:text-blue-600">Forgot Password?</a>
        </div>
      </div>

      {errorMessage && (
        <AlertBox message={errorMessage.message} type={errorMessage.type} key={errorTimestamp} />
      )}
    </div>
  );
};

export default UpdatedLogin;