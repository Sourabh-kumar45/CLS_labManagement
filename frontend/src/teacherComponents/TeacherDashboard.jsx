import React, { useState, useEffect } from "react";

const TeacherDashboard = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (cardIndex) => {
    setActiveCard(cardIndex);
  };

  const cardData = [
    {
      title: "New Incoming Requests",
      description: "View and manage new requests for document issuance.",
      buttonText: "View Requests",
      onClick: () => fetchData('requests')
    },
    {
      title: "All Students",
      description: "Browse through the list of all students.",
      buttonText: "View Students",
      onClick: () => fetchData('students')
    },
    {
      title: "Export Documents",
      description: "Download an Excel sheet of document data.",
      buttonText: "Export to Excel",
      onClick: () => fetchData('export')
    },
    {
      title: "Manage Components",
      description: "Add or remove components and adjust quantities.",
      buttonText: "Manage Components",
      onClick: () => fetchData('components/manage')
    }
  ];

  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`http://localhost:5000/api/${endpoint}`);
      const data = await response.json();
      console.log(data); // Process and display data as needed
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Teacher Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`relative bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105 hover:outline hover:outline-blue-500 cursor-pointer border-2 ${
              activeCard === index ? "border-gray-300" : "border-transparent"
            }`}
            onClick={() => {
              handleCardClick(index);
              card.onClick();
            }}
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">{card.title}</h2>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <button
              className={`px-4 py-2 rounded-lg font-medium text-white ${
                activeCard === index
                  ? "bg-gray-500 hover:bg-gray-600"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;
