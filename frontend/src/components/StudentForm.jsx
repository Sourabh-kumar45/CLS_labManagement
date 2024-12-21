import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import AlertBox from "./AlertBox";
import StudentInfo from "./StudentInfo";

const StudentForm = () => {
  const { id } = useParams();  // getting the unique id from the student.
  const navigate = useNavigate();

  const [studentInfo, setStudentInfo] = useState({
    uniqueId: id,
    name: "",
    clgid: "",
    branch: "",
    email: "",
    program: "",
  });

  const branches = ["Computer Science", "DSAI", "Electrical", "Mechanical", "ECE", "MSME", "Mechatronics"];
  const programs = ["B.Tech", "M.Tech", "MSc", "PhD"];
  const [errorMessage, setErrorMessage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Fetch existing data if editing
  useEffect(() => {
        axios
            .get(`http://localhost:3000/student/${id}/form`)
            .then((response) => {
                if (response.status === 200 && response.data && Object.keys(response.data).length > 0) {
                    // Check if the data is not empty
                    setStudentInfo(response.data); // Pre-fill the form with existing data
                    setIsEditing(true);
                } else {
                    // If no data is returned, set userData to null (dashboard will be shown)
                    setErrorMessage({ type: "error", message: "No data found in the database." });
                    console.log("No data found in the database.");
                }
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                  setErrorMessage({ type: "alert", message: "Failed to load student data." });
            });
  }, [id]);

  const handleChange = (field, value) => {
    setStudentInfo({ ...studentInfo, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const endpoint = isEditing // previoulsy here was id.
      ? `http://localhost:3000/student/${id}/form` // For updating
      : `http://localhost:3000/student/${id}/form`; // For creating

    const method = isEditing ? "put" : "post"; // Use PUT for editing, POST for creating

    axios[method](endpoint, studentInfo)
      .then((response) => {
        console.log(response);
        navigate(`/student/${response.data.uniqueId}`, {
          state: { message: isEditing ? "Student updated successfully!" : "Student created successfully!", type: "success" },
        });
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage({ type: "error", message: "Form submission failed. Please try again." });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          {isEditing ? "Edit Student Information" : "Create Student"}
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={studentInfo.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* ID Input */}
          <div className="mb-4">
            <label htmlFor="clgid" className="block text-gray-700 font-medium mb-2">
              Student ID
            </label>
            <input
              type="text"
              id="clgid"
              name="clgid"
              value={studentInfo.clgid}
              onChange={(e) => handleChange("clgid", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your student ID"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={studentInfo.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Branch Dropdown */}
          <div className="mb-4">
            <label htmlFor="branch" className="block text-gray-700 font-medium mb-2">
              Branch
            </label>
            <select
              id="branch"
              name="branch"
              value={studentInfo.branch}
              onChange={(e) => handleChange("branch", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            >
              <option value="" disabled>
                Select your branch
              </option>
              {branches.map((branch, idx) => (
                <option key={idx} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

          {/* Program Dropdown */}
          <div className="mb-4">
            <label htmlFor="program" className="block text-gray-700 font-medium mb-2">
              Program
            </label>
            <select
              id="program"
              name="program"
              value={studentInfo.program}
              onChange={(e) => handleChange("program", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            >
              <option value="" disabled>
                Select your program
              </option>
              {programs.map((program, idx) => (
                <option key={idx} value={program}>
                  {program}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              {isEditing ? "Update Student" : "Create Student"}
            </button>
          </div>
        </form>
        {errorMessage && (
        <AlertBox message={errorMessage.message} type={errorMessage.type} />
        )}
      </div>
    </div>
  );
};

export default StudentForm;