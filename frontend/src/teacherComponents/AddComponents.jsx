import React from 'react'
import { useState } from 'react';

const AddComponents = () => {
    const [componentName, setComponentName] = useState('');
    const [specifications, setSpecifications] = useState('');
    const [quantity, setQuantity] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here, like sending the data to an API or saving to state
      console.log({
        componentName,
        specifications,
        quantity,
      });
    };
  
    return (
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Add New Component</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="component-name" className="block text-gray-700 text-sm font-bold mb-2">
              Component Name
            </label>
            <input
              type="text"
              id="component-name"
              placeholder="Enter component name"
              value={componentName}
              onChange={(e) => setComponentName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="specifications" className="block text-gray-700 text-sm font-bold mb-2">
              Specifications
            </label>
            <textarea
              id="specifications"
              placeholder="Enter component specifications"
              value={specifications}
              onChange={(e) => setSpecifications(e.target.value)}
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
      </div>
    );
}

export default AddComponents