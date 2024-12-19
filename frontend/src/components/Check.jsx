import React, { useState } from "react";

const Check = () => {
  const [accordionData, setAccordionData] = useState([
    {
      id: 1,
      issueDate: "2024-12-19",
      status: "Not Returned",
      issuedId: "#12345",
      items: [
        { name: "Item 1", quantity: 2 },
        { name: "Item 2", quantity: 5 },
        { name: "Item 3", quantity: 1 },
      ],
      remark: "Handle with care",
      isExpanded: false,
      daysRemaining: 5,
    },
    {
      id: 2,
      issueDate: "2024-12-18",
      status: "Returned",
      issuedId: "#12346",
      items: [
        { name: "Item A", quantity: 3 },
        { name: "Item B", quantity: 4 },
      ],
      remark: "Checked and verified",
      isExpanded: false,
      daysRemaining: 0,
    },
  ]);

  const databaseItems = ["Item X", "Item Y", "Item Z", "Item W"];

  const toggleAccordion = (id) => {
    setAccordionData((prevData) =>
      prevData.map((block) =>
        block.id === id
          ? { ...block, isExpanded: !block.isExpanded }
          : block
      )
    );
  };

 
  const markAsReturned = (id) => {
    setAccordionData((prevData) =>
      prevData.map((block) =>
        block.id === id
          ? { ...block, status: "Returned", daysRemaining: 0 }
          : block
      )
    );
  };

  const updateReissueItems = (id, updatedItems) => {
    setAccordionData((prevData) =>
      prevData.map((block) =>
        block.id === id
          ? { ...block, items: updatedItems, status: "Not Returned", daysRemaining: 10 }
          : block
      )
    );
  };


  const ReissueSection = ({ block }) => {
    const [isVisible, setIsVisible] = useState(false); // Toggle visibility of the content
  
    const addItem = () => {
      const newItem = { name: databaseItems[0], quantity: 1 }; // Default quantity to 1
      const updatedItems = [...block.items, newItem];
      updateReissueItems(block.id, updatedItems); // Update parent state
    };
  
    const removeItem = (index) => {
      const updatedItems = block.items.filter((_, i) => i !== index);
      updateReissueItems(block.id, updatedItems); // Update parent state
    };
  
    const updateItem = (index, field, value) => {
      const updatedItems = block.items.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      );
      updateReissueItems(block.id, updatedItems); // Update parent state
    };
  
    const submitReissue = () => {
      const validItems = block.items.filter(
        (item) => item.name.trim() !== "" && item.quantity > 0
      );
  
      if (validItems.length === 0) {
        alert("Please add valid items with a quantity greater than 0.");
        return;
      }
  
      updateReissueItems(block.id, validItems); // Update parent state with valid items
    };
  
    const handleCheckboxChange = () => setIsVisible((prev) => !prev);
  
    return (
      <div className="mt-4 border-t border-gray-300 pt-4">
        
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isVisible}
            onChange={handleCheckboxChange}
            className="form-checkbox"
          />
          <span>Click here to Update the List of Items (only available during active issue)</span>
        </label>
        
  
        {isVisible && (
          <>
            <p className="text-sm text-gray-500">Update Issued Items:</p>
            <table className="table-auto w-full mt-2 border-collapse border border-gray-300 text-sm">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Item Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {block.items.map((item, index) => (
                  <tr key={`${item.name}-${index}`}>
                    <td className="border border-gray-300 px-4 py-2">
                      <select
                        value={item.name}
                        onChange={(e) => updateItem(index, "name", e.target.value)}
                        className="border rounded w-full px-2 py-1"
                      >
                        {databaseItems.map((dbItem, i) => (
                          <option key={dbItem} value={dbItem}>
                            {dbItem}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateItem(index, "quantity", Math.max(0, e.target.value))
                        }
                        className="border rounded w-full px-2 py-1"
                        placeholder="Enter quantity"
                        min="1"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        onClick={() => removeItem(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
  
            <div className="mt-4 space-x-4">
              <button
                onClick={addItem}
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                Add Item
              </button>
              <button
                onClick={submitReissue}
                className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
              >
                Submit Changes
              </button>
            </div>
          </>
        )}
      </div>
    );
  };
  

  return (
    <div className="p-6 space-y-4">
      {accordionData.map((block) => (
        <div
          key={block.id}
          className="bg-white shadow rounded-md p-4 border border-gray-200"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
            <div>
              <p className="text-sm text-gray-500">Issue Date</p>
              <p className="text-lg font-medium">{block.issueDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p
                className={`text-lg font-medium ${
                  block.status === "Returned" ? "text-green-600" : "text-red-600"
                }`}
              >
                {block.status}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Days Remaining</p>
              <p
                className={`text-lg font-medium ${
                  block.daysRemaining > 0 ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {block.daysRemaining > 0 ? `${block.daysRemaining} days` : "N/A"}
              </p>
            </div>
            <div>
              <button
                onClick={() => toggleAccordion(block.id)}
                className="text-gray-600 hover:text-gray-900"
              >
                {block.isExpanded ? (
                  <span className="material-icons">expand_less</span>
                ) : (
                  <span className="material-icons">expand_more</span>
                )}
              </button>
            </div>
          </div>

          {/* Expandable Section */}
          {block.isExpanded && (
            <div className="mt-4 border-t border-gray-300 pt-4">
              <p className="text-sm text-gray-500">Issued Items:</p>
              <table className="table-auto w-full mt-2 border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Item Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {block.items.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">

                <button
                  onClick={() => markAsReturned(block.id)}
                  className={`px-4 py-2 rounded-md ${
                    block.status === "Returned"
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                  disabled={block.status === "Returned"}
                  title={block.status === "Returned" ? "Items have already been returned." : ""}
                >
                  Return Items
                </button>

                
                {/* <button
                  onClick={() => markAsReturned(block.id)}
                  className={`px-4 py-2 rounded-md ${
                    block.status === "Returned"
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                  disabled={block.status === "Returned"}
                >
                  Return Items
                </button> */}
                <button
                  onClick={() => toggleAccordion(block.id)}
                  className="px-4 py-2 rounded-md bg-yellow-600 text-white hover:bg-yellow-700"
                >
                  Reissue
                </button>
              </div>
              {block.isExpanded && block.status !== "Returned" && (
                <ReissueSection block={block} />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Check;


