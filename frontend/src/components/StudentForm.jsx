import React, { useState } from "react";

const StudentForm = () => {
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    id: "",
    email: "",
    branch: "",
  });

  const branches = ["Computer Science", "DSAI", "Electrical", "Mechanical", "ECE", "MSME"];

  const handleChange = (field, value) => {
    setStudentInfo({ ...studentInfo, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send studentInfo to API or log it)
    console.log(studentInfo);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          Student Information Form
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
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
            <label
              htmlFor="id"
              className="block text-gray-700 font-medium mb-2"
            >
              Student ID
            </label>
            <input
              type="text"
              id="id"
              name="id"
              value={studentInfo.id}
              onChange={(e) => handleChange("id", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your student ID"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
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
            <label
              htmlFor="branch"
              className="block text-gray-700 font-medium mb-2"
            >
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
              <option value="" disabled>Select your branch</option>
              {branches.map((branch, idx) => (
                <option key={idx} value={branch}>
                  {branch}
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
