import React, { useState } from "react";

const ItemIssueForm = () => {
  const [itemsList, setItemsList] = useState([]);
  const [currentItem, setCurrentItem] = useState({ item: "", quantity: 1 });

  const items = ["Breadboard", "Capacitor", "Inductor", "Resistor", "Wire"]; // Example items for dropdown

  const handleChange = (field, value) => {
    setCurrentItem({ ...currentItem, [field]: value });
  };

  const addItem = () => {
    if (currentItem.item && currentItem.quantity > 0) {
      setItemsList([...itemsList, currentItem]);
      setCurrentItem({ item: "", quantity: 1 });
    }
  };

  const removeItem = (index) => {
    const updatedItemsList = itemsList.filter((_, i) => i !== index);
    setItemsList(updatedItemsList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send itemsList to API or log it)
    console.log(itemsList);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        {/* Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">
            Issue Items Form
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Item Dropdown */}
            <div className="mb-4">
              <label
                htmlFor="item"
                className="block text-gray-700 font-medium mb-2"
              >
                Select Item
              </label>
              <select
                id="item"
                name="item"
                value={currentItem.item}
                onChange={(e) => handleChange("item", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Select an item</option>
                {items.map((itemName, idx) => (
                  <option key={idx} value={itemName}>
                    {itemName}
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity Input */}
            <div className="mb-4">
              <label
                htmlFor="quantity"
                className="block text-gray-700 font-medium mb-2"
              >
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={currentItem.quantity}
                onChange={(e) => handleChange("quantity", e.target.value)}
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Add Item Button */}
            <div className="mb-4">
              <button
                type="button"
                onClick={addItem}
                className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none"
              >
                Add Item
              </button>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Added Items Section */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">
            Added Items
          </h2>
          <ul className="list-disc pl-5" style={{ maxHeight: "400px", overflowY: "auto" }}>
            {itemsList.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-2">
                <span>
                  {item.item} - Quantity: {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="text-red-500 font-medium hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemIssueForm;
