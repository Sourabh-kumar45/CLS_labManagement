import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AlertBox from "../components/AlertBox";
import axios from "axios";

const TeacherDashboard = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const { teacherid }  = useParams();
  const navigate = useNavigate()


  useEffect(() => {
    if (location.state?.message) {
      setErrorMessage({
        message: location.state.message,
        type: location.state.type,
      });

      // Create a copy of the current state without the `message` property
      const newState = { ...location.state };
      delete newState.message;

      // Update the history state with the modified state
      window.history.replaceState({ ...newState }, document.title);
    }
  }, [teacherid]);

  const handleCardClick = (cardIndex) => {
    setActiveCard(cardIndex);
  };

  const handledownload = (teacherid) => {
    axios({
      url: `http://localhost:3000/teacher/${teacherid}/download`,
      method: "GET",
      responseType: "blob", // Important for binary files
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "data.xlsx");
        document.body.appendChild(link);
        link.click();
      })
      .catch((err) => {
        console.error("Error downloading the file:", err);
      });
  };
  

  const cardData = [
    {
      title: "New Incoming Requests",
      description: "View and manage new requests for document issuance. Ensure all requests are handled promptly and efficiently to maintain workflow.",
      buttonText: "View Requests",
      route:`/teacher/${teacherid}/issueRqst`,
      // onClick: () => alert("Navigating to New Requests")
    },
    {
      title: "All Students",
      description: "Browse through the list of all students. Quickly access detailed profiles and academic information to streamline management.",
      buttonText: "View Students",
      route:`/teacher/${teacherid}/studentList`,
      // onClick: () => alert("Navigating to Student List")
    },
    {
      title: "Export Documents",
      description: "Download an Excel sheet of document data. Use this feature for reporting, analysis, and record-keeping purposes.",
      buttonText: "Export to Excel",
      onClick: () => handledownload(teacherid)
    },
    {
      title: "Manage Components",
      description: "Add or remove components and adjust quantities. Keep track of resources and ensure proper allocation.",
      buttonText: 'Manage Component',
      route:`/teacher/${teacherid}/addComp`,
      // onClick: () => alert("Managing Components")
    }
  ];

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
              navigate(card.route)
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
      
      {/* alert box */}
      {errorMessage && (
        <AlertBox type={errorMessage.type} message={errorMessage.message} />
      )}
    </div>
  );
};

export default TeacherDashboard;
