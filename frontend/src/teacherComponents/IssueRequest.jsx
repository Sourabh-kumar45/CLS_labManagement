import React, { useState } from "react";

const IssueRequest = () => {
  // Dummy issue request data
  const dummyRequests = [
    {
      id: 1,
      issueDate: "2024-01-01",
      status: "Pending",
      issuedId: "REQ101",
      uniqueId: "STU001",
      items: [
        { name: "Resistor", quantity: 10 },
        { name: "Capacitor", quantity: 5 },
      ],
      remark: "Handle with care",
      isExpanded: false,
    },
    {
      id: 2,
      issueDate: "2024-01-05",
      status: "Pending",
      issuedId: "REQ102",
      uniqueId: "STU002",
      items: [
        { name: "Breadboard", quantity: 1 },
        { name: "LED", quantity: 10 },
      ],
      remark: "Use gently",
      isExpanded: false,
    },
  ];

  const [accordionData, setAccordionData] = useState(dummyRequests);

  const toggleAccordion = (id) => {
    setAccordionData((prevData) =>
      prevData.map((block) =>
        block.id === id
          ? { ...block, isExpanded: !block.isExpanded }
          : block
      )
    );
  };

  const handleApprove = (id) => {
    setAccordionData((prevData) =>
      prevData.map((block) =>
        block.id === id ? { ...block, status: "Approved" } : block
      )
    );
    alert("Request Approved!");
  };

  const handleReject = (id) => {
    setAccordionData((prevData) =>
      prevData.map((block) =>
        block.id === id ? { ...block, status: "Rejected" } : block
      )
    );
    alert("Request Rejected!");
  };

  return (
    <div className="p-6 space-y-4">
      {accordionData.map((block) => (
        <div
          key={block.id}
          className="bg-white shadow rounded-md p-4 border border-gray-200"
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Issue ID</p>
              <p className="text-lg font-medium">{block.issuedId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Issue Date</p>
              <p className="text-lg font-medium">{block.issueDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p
                className={`text-lg font-medium ${
                  block.status === "Approved"
                    ? "text-green-600"
                    : block.status === "Rejected"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {block.status}
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
                <button
                  onClick={() => handleApprove(block.id)}
                  className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
                  disabled={block.status !== "Pending"}
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(block.id)}
                  className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
                  disabled={block.status !== "Pending"}
                >
                  Reject
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default IssueRequest;
