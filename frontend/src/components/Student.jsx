import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StudentDashboard from './StudentDashboard';
import AlertBox from './AlertBox';
import { useLocation } from 'react-router-dom';


const Student = () => {
  const { id } = useParams(); // UniqueId for Student
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [errorMessage, setErrorMessage] = useState(null);
  const location = useLocation();

  // setting the errror message

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
    }, [id]);


  useEffect(() => {
    axios
      .get(`http://localhost:3000/student/${id}/form`)
      .then((response) => {
        if (
          response.status === 200 &&
          response.data &&
          Object.keys(response.data).length > 0
        ) {
          // Check if the data is not empty
          setUserData(response.data);
        } else {
          // If no data is returned, set userData to null (dashboard will be shown)
          setUserData(null);
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setUserData(null); // Fallback to dashboard on any error
      })
      .finally(() => setLoading(false));
  }, [id]);

  // Render loading state
  if (loading) return <p>Loading...</p>;

  // Logic to Show the StudentDashboard.
  if (!userData) {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <StudentDashboard />
      </>
    );
  }

  // Render user data
  return (
    <div>
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-sky-400 text-white py-12 text-center">
        <h1 className="text-3xl font-bold">Student Profile</h1>
        <p className="text-lg mt-2">Welcome to the detailed profile view</p>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-7xl px-6 sm:px-12 py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-sky-500">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhf1Nrw3E3Rci-8FmEz5KumCsaCDiRn4ievQ&s"
              alt="Student"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mt-4">{userData.name}</h2>
          <p className="text-gray-500 text-lg">ID:{userData.clgid}</p>
        </div>

        

        {/* Info Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="text-2xl underline font-semibold text-gray-700 mb-4">Personal Information</h3>
          <br />
          <ul className="text-gray-600 text-lg space-y-2">
            <li><strong>Program:</strong> {userData.program}</li>
            <li><strong>Department:</strong> isko rakhna hai ki nahi</li>
            <li><strong>Branch:</strong> {userData.branch}</li>
          </ul>
        </div>

        {/* Links Section */}
        <div className="col-span-1">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Quick Links</h3>
          <br />
          <ul className="space-y-3">
            <li>
              <a
                href={`/student/${id}/stuPrj`}
                className="text-sky-600 hover:underline flex items-center gap-2"
              >
                <i className="fa-regular fa-eye"></i> View Projects
              </a>
            </li>
            <li>
              <a
                href={`/student/${id}/stuAbt`}
                className="text-sky-600 hover:underline flex items-center gap-2"
              >
                <i className="fa-regular fa-user"></i> About Me
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sky-600 hover:underline flex items-center gap-2"
              >
                <i className="fa-regular fa-envelope"></i> Contact
              </a>
            </li>
          </ul>
        </div>
        <a
            href={`/student/${id}/form`}
            className="inline-block w-24 text-white bg-blue-600 hover:bg-blue-700 py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
          >
            Edit Details
          </a>
      </div>
    </section>

      {/* alert box */}
      {errorMessage && (
        <AlertBox type={errorMessage.type} message={errorMessage.message} />
      )}
    </div>
  );
}

export default Student