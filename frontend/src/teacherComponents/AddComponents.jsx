import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AlertBox from '../components/AlertBox';
import { useNavigate } from 'react-router-dom';

const AddComponents = () => {
    const [component, setComponent] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const {teacherid} = useParams()
    const navigate = useNavigate()
  
    
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // Handle form submission logic here, like sending the data to an API or saving to state
      // console.log({
      //   componentName,
      //   specifications,
      //   quantity,
      // });
    // };

      
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission

      axios
        .post(`http://localhost:3000/teacher/${teacherid}/add`, {
          component,
          description,
          quantity,
        }) // here i should remove the prop department and add the compForm to return to my previous code
        .then((result) => {
          console.log(result);
          navigate(`/teacher/${teacherid}`, {
            state: {
              message: "new component added submitted succesfully",
              type: "success",
            },
          });
        })
        .catch((err) => {
          console.error(err);
          setErrorMessage({
            type: "error",
            message: "component was not Submitted ! try again later",
          });
          // setErrorTimestamp(Date.now()); // Update timestamp
        });

      // console.log(itemsList);
    };
    
    return (
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Add New Component</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="component" className="block text-gray-700 text-sm font-bold mb-2">
              Component Name
            </label>
            <input
              type="text"
              id="component"
              placeholder="Enter component name"
              value={component}
              onChange={(e) => setComponent(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
              Specifications
            </label>
            <textarea
              id="description"
              placeholder="Enter component specifications"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">
              Available Quantity
            </label>
            <input
              type="number"
              id="quantity"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          
          <div className="mb-4 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg focus:outline-none hover:bg-blue-700"
            >
              Add Component
            </button>
          </div>
        </form>
        {errorMessage && (
        <AlertBox message={errorMessage.message} type={errorMessage.type} />
        )}
      </div>
    );
}

export default AddComponents