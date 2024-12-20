import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const StuAbt = () => {
  const {id} = useParams();

  
  const [accordionData, setAccordionData] = useState([])
  // data Structure
  //   {
  //     id: 1,
  //     issueDate: "2024-12-19",
  //     status: "Not Returned",
  //     issuedId: "#12345",
  //     items: [
  //       { name: "Item 1", quantity: 2 },
  //       { name: "Item 2", quantity: 5 },
  //       { name: "Item 3", quantity: 1 },
  //     ],
  //     remark: "Handle with care",
  //     daysRemaining: 7,
  //     isExpanded: false,
  //   }

    useEffect(() => {
      axios
        .get(`http://localhost:3000/student/${id}/compForm`)
        .then((response) => {
          if (response.status === 200 && response.data?.user) {
            // Transform the data to the desired structure
            const transformedData = response.data.user.map((user, index) => ({
              id: index + 1, // Unique ID for each item
              issueDate: new Date().toISOString().split("T")[0], // Current date
              status: user.returnStatus,
              issuedId:`#${user._id.substring(0, 5)}`, // Create issuedId from the user's ID,
              uniqueId:user.uniqueId,
              items: user.components.map((component) => ({
                name: component.item,
                quantity: component.quantity,
              })),
              remark: "Handle with care", // Default remark
              daysRemaining: 7, // Default days remaining
              isExpanded: false, // Collapsed by default
            }));
            setAccordionData(transformedData);
            console.log("Transformed Data:", transformedData);
          } else {
            console.error("User data not found");
          }
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
        });
    }, [id]);

  const toggleAccordion = (id) => {
    setAccordionData((prevData) =>
      prevData.map((block) =>
        block.id === id
          ? { ...block, isExpanded: !block.isExpanded }
          : block
      )
    );
  };


  // modifed version of markeAsReturned
  const markAsReturned = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/student/${id}/compForm`, {
        method: 'PUT', // HTTP method for updating
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          uniqueId: id, // Pass the item's uniqueId
          returnStatus: 'Returned' // Update status to "Returned"
        })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const updatedData = await response.json();
      console.log("Update successful:", updatedData);
  
      // Update the UI to reflect the new status
      alert('Items successfully marked as returned!');
      // Add logic to refresh or update the UI state here
    } catch (error) {
      console.error("Error updating status:", error);
      alert('Failed to mark items as returned. Please try again.');
    }
  };
  

  // const markAsReturned = (id) => {
  //   setAccordionData((prevData) =>
  //     prevData.map((block) =>
  //       block.id === id
  //         ? { ...block, status: "Returned", daysRemaining: 0 }
  //         : block
  //     )
  //   );
  // };

  
  const handleReturn = ()=>{
    // this would set the status of the component status to returned.
    // i.e i have to send a edit request from here.
  }

  const reissueItems = (id) => {
    setAccordionData((prevData) =>
      prevData.map((block) =>
        block.id === id
          ? { ...block, status: "Not Returned", daysRemaining: 7 }
          : block
      )
    );
  };


  return (
    <div className="p-6 space-y-4">
      <div>
      <h1>Accordion Data</h1>
      <pre>{JSON.stringify(accordionData, null, 2)}</pre>
    </div>
      {accordionData.map((block) => (
        <div
          key={block.id}
          className="bg-white shadow rounded-md p-4 border border-gray-200"
        >
          {/* Header */}
          <div className="flex justify-between items-center">
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
              <p className="text-lg font-medium">
                {block.daysRemaining > 0 ? `${block.daysRemaining} days` : "-"}
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
              <table className="table-auto w-full mt-2 border-collapse border border-gray-300">
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
              <div className="mt-4 flex space-x-4">
                <button
                  // onClick={() => markAsReturned(block.id)}
                  onClick={() => markAsReturned(block.uniqueId)} // Call the function with the item's ID
                  
                  className={`px-4 py-2 rounded-md ${
                    block.status === "Returned"
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                  disabled={block.status === "Returned"}
                >
                  Return Items
                </button>
                <button
                  onClick={() => reissueItems(block.id)}
                  className={`px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700`}
                >
                  Reissue Items
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StuAbt




// import { useState, useEffect } from "react";
// import axios from "axios";

// const StudentComponent = ({ id }) => {
//   const [accordionData, setAccordionData] = useState([]);

 

//   return (
   
//   );
// };

// export default StudentComponent;
