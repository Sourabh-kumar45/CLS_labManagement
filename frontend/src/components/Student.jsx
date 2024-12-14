import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StudentDashboard from './StudentDashboard';


const Student = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null); // State to store user data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        
        // fetch the data from backend
        axios
        .get(`http://localhost:3000/student/${id}/form`) // Update the URL to match your backend route
        .then((response) => {
            if (response.status === 200 && response.data) {
                // If the response is successful and data exists
                setUserData(response.data); // Set the user data
                setLoading(false); // Stop loading
            } else {
                // If no data is returned for the user
                setError("User data not found");
                setLoading(false); // Stop loading
            }
        })
        .catch((err) => {
            // Check if it's a 404 error (user not found)
            if (err.response && err.response.status === 404) {
                setError("User not found");
            } else if (err.response) {
                // Handle other HTTP errors
                setError("Error fetching user data: " + err.response.statusText);
            } else {
                // Handle network or other errors
                setError("Network error or server is down");
            }
            setLoading(false); // Stop loading
        });

            
    }, [id]);


    // // setting the errror message

    
    //   useEffect(() => {
    //     if (location.state?.message) {
    //       setErrorMessage({
    //         message: location.state.message,
    //         type: location.state.type,
    //       });
    //       setErrorTimestamp(Date.now());
    //     }
    //   },[location.state]);


    // Render loading state
    if (loading) return <p>Loading...</p>;

    // Render error state   
    if (error === "User not found") return(
        <>
        <br /><br /><br /><br /><br /><br /><br />
        <StudentDashboard></StudentDashboard>
        </>
        
    );

    // Render user data
    return (
        <div>

            {/* <h1>Welcome, {userData.name}</h1>
            <p>Email: {userData.email}</p>
            <p>ID: {userData.id}</p> */}

            {/* card containing data */}
            <section className="flex flex-col sm:flex-row items-center justify-center sm:items-start gap-8 sm:gap-10 bg-zinc-100">

            {/* Info Container */}
            <div className="w-full sm:max-w-[60vw] md:max-w-[50vw] lg:max-w-[40vw] border border-gray-300 rounded-lg p-6 bg-gray-50 shadow-inner">
                {/* Student Info */}
            <div className="mb-4 flex gap-4">
                {/* Image Container */}
                <div className="border border-gray-300 rounded-lg h-20 w-20 overflow-hidden bg-gray-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhf1Nrw3E3Rci-8FmEz5KumCsaCDiRn4ievQ&s" alt="Student" className="object-cover w-full h-full" />
                </div>
                <div>
                <p className="font-semibold text-2xl text-sky-600">{userData.name}</p>
                <p className="font-semibold text-lg text-gray-500">ID: {userData.clgid}</p>
                </div>
            </div>

                {/* Divider */}
                <div className="border-t border-gray-300 my-4"></div>

                <div className="flex flex-col gap-2 font-medium text-gray-600 pb-3">
                <span>Program : {userData.program}</span>
                <span>Department : isko rakhe ki nahi ye bata dena</span>
                <span>Branch : {userData.branch}</span> 
                </div>

                {/* Projects */}
                <div className="flex items-center gap-2 mb-2 text-gray-600">
                <i className="w-4 fa-regular fa-eye text-sky-600"></i>
                <span className="hover:text-sky-600 cursor-pointer transition-colors"><a href={`/student/${id}/stuPrj`}>Projects</a></span>
                </div>

                {/* About */}
                <div className="flex items-center gap-2 mb-2 text-gray-600">
                <i className="w-4 fa-regular fa-user text-sky-600"></i>
                <span className="hover:text-sky-600 cursor-pointer transition-colors"><a href={`/student/${id}/stuAbt`}>About</a></span>
                </div>

                {/* Bottom Divider */}
                <div className="border-t border-gray-300 mt-4"></div>
            </div>
            </section>

            {/* alert box */}
            {/* <AlertBox type={errorMessage.type} message={errorMessage.message} /> */}
        </div>
    );
}

export default Student
