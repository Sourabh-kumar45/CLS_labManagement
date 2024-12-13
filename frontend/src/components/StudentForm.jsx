import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const StudentForm = () => {
  const {id} = useParams()

  const [studentInfo, setStudentInfo] = useState({
    uniqueId:id,
    name: "",
    clgid: "",
    branch: "",
    email: "",
    program:"",
  })

  const branches = ["Computer Science", "DSAI", "Electrical", "Mechanical", "ECE", "MSME","Mechatronics"];
  const program = ["B.Tech","M.Tech","Msc","Phd"]
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate()
 
  

  const handleChange = (field, value) => {
    setStudentInfo({ ...studentInfo, [field]: value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // submitting the data to the backend.
    // make a fix that only one time data is being enter in the database.
    axios.post(`http://localhost:3000/student/${id}/form`,studentInfo)
    .then((result) => {
      console.log(result);
      navigate(`/student/${id}`,{ state: { message: "from submitted succesfully", type: "success" } });
    })
    .catch((err) => {
      console.error(err);
      setErrorMessage({ errorType: 'error', message: 'Form was not Submitted ! try again' });
      // setErrorTimestamp(Date.now()); // Update timestamp
    });

    // to log out student info
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
              htmlFor="clgid"
              className="block text-gray-700 font-medium mb-2"
            >
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

          {/* program Dropdown */}
          <div className="mb-4">
            <label
              htmlFor="program"
              className="block text-gray-700 font-medium mb-2"
            >
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
              <option value="" disabled>Select your program</option>
              {program.map((program, idx) => (
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
              Submit
            </button>
          </div>
        </form>
        {/* {errorMessage && (
        <AlertBox message={errorMessage.message} type={errorMessage.type} key={errorTimestamp} />
      )} */}
      </div>
    </div>
  );
};

export default StudentForm;
