import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle } from 'react-icons/fa';

const AlertBox = ({ type, message }) => {
  const [isVisible, setIsVisible] = useState(false); // Start with hidden state

  useEffect(() => {
    if (message) {
      setIsVisible(true); // Show the alert box when there's a new message
      const timer = setTimeout(() => {
        setIsVisible(false); // Hide the alert after 3 seconds
      }, 3000);

      // Clean up the timer when the component is unmounted or when message changes
      return () => clearTimeout(timer);
    }
  }, [message]); // Dependency on message to show and hide when it changes

  if (!isVisible) return null; // Do not render if not visible

  let alertClass = '';
  let IconComponent = null;

  switch (type) {
    case 'success':
      alertClass = 'bg-green-100 text-green-700 border border-green-400';
      IconComponent = FaCheckCircle;
      break;
    case 'error':
      alertClass = 'bg-red-100 text-red-700 border border-red-400';
      IconComponent = FaExclamationCircle;
      break;
    case 'info':
      alertClass = 'bg-blue-100 text-blue-700 border border-blue-400';
      IconComponent = FaInfoCircle;
      break;
    case 'warning':
      alertClass = 'bg-yellow-100 text-yellow-700 border border-yellow-400'; 
      IconComponent = FaExclamationCircle;
      break;
    default:
      alertClass = 'bg-gray-100 text-gray-700 border border-gray-400';
  }

  return (
    <div
      className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 p-4 rounded ${alertClass} w-11/12 max-w-md mx-auto flex items-center space-x-2 transition duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transition: 'opacity 0.5s' }}
    >
      {IconComponent && <IconComponent size={24} />}
      <span>{message}</span>
    </div>
  );
};

export default AlertBox;
