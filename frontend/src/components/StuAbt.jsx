import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const StuAbt = () => {
  const {id} = useParams();

  
  const [accordionData, setAccordionData] = useState([])


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
              issuedId:user._id,//`#${user._id.substring(0, 5)}`, // Create issuedId from the user's ID,
              uniqueId:user.uniqueId,
              department:user.department,
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


  // Helper function to calculate days remaining
  const calculateDaysRemaining = (issueDate) => {
    const currentDate = new Date();
    const issueDateObj = new Date(issueDate);
    
    const timeDifference = currentDate - issueDateObj;
    const daysRemaining = Math.floor(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days
    
    return daysRemaining > 0 ? daysRemaining : 0; // Ensure daysRemaining doesn't go negative
  };

  const markAsReturned = async (issuedId,department) => {
    try {
      const response = await fetch(`http://localhost:3000/student/${id}/${department}/${issuedId}`, {
        method: 'PUT', // HTTP method for updating
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          returnStatus: 'Returned', // Update status to "Returned"
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const updatedData = await response.json();
      console.log("Update successful:", updatedData);
  
      // Update the UI immediately after status update
      setAccordionData((prevData) =>
        prevData.map((block) =>
          block.issuedId === issuedId
            ? { ...block, status: 'Returned', daysRemaining: 0 } // Set the status and reset days remaining
            : block
        )
      );
  
      alert('Items successfully marked as returned!');
    } catch (error) {
      console.error("Error updating status:", error);
      alert('Failed to mark items as returned. Please try again.');
    }
  };
  
  const reissueItems = async (issuedId,department) => {
    try {
      // Update the status and issue date in the database for reissuance
      const response = await axios.put(
        `http://localhost:3000/student/${id}/${department}/${issuedId}`, // Endpoint to reissue items
        {
          returnStatus: "Not Returned", // Reset return status
          issueDate: new Date().toISOString().split("T")[0], // Set the new issue date (current date)
          daysRemaining: 7, // Reset the days remaining or any other relevant field
        }
      );
  
      if (response.status === 200) {
        // Update the front-end data immediately after reissue
        setAccordionData((prevData) =>
          prevData.map((block) =>
            block.issuedId === issuedId
              ? { 
                  ...block, 
                  status: "Not Returned", 
                  issueDate: response.data.issueDate, // Use the updated issueDate from the backend
                  daysRemaining: 7 
                }
              : block
          )
        );
        alert('Items successfully reissued!');
      }
    } catch (error) {
      console.error("Error reissuing items:", error);
      alert('Failed to reissue items. Please try again.');
    }
  };
  


  return (
    <div className="p-6 space-y-4">
      <br /><br /><br /><br />
      {(accordionData === null || accordionData.length === 0) && (
        <div>
          Issue some Data to view them{" "}
          <a
            href={`/student/${id}/compForm`}
            className="inline-block text-white bg-slate-300  hover:bg-red-400 py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
          >
            Issue Item
          </a>
        </div>
      )}

      {/* used for debugging */}
      {/* <div>
      <h1>Accordion Data</h1>
      <pre>{JSON.stringify(accordionData, null, 2)}</pre>
    </div> */}
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
              <p className="text-sm text-gray-500">Department</p>
              <p className="text-lg font-medium">{block.department}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p
                className={`text-lg font-medium ${
                  block.status === "Returned"
                    ? "text-green-600"
                    : "text-red-600"
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
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Item Name
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Quantity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {block.items.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.name}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-4 flex space-x-4">
                {/* Return Items Button */}
                <button
                  onClick={() => markAsReturned(block.issuedId,block.department)}
                  className={`px-4 py-2 rounded-md ${
                    block.status === "Returned"
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                  disabled={block.status === "Returned"} // Disable only if already returned
                >
                  Return Items
                </button>

                {/* Reissue Items Button */}
                <button
                  onClick={() => reissueItems(block.issuedId,block.department)}
                  className={`px-4 py-2 rounded-md ${
                    block.status !== "Returned"
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                  disabled={block.status !== "Returned"} // Enable only if status is "Returned"
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

