import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AlertBox from './AlertBox';


const Student = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null); // State to store user data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        // Fetch user data from the backend
        axios
            .get(`http://localhost:3000/student/${id}`) // Update the URL to match your backend route
            .then((response) => {
                setUserData(response.data); // Set the user data
                setLoading(false); // Stop loading
            })
            .catch((err) => {
                console.error("Error fetching user data:", err);
                setError("Failed to load user data");
                setLoading(false); // Stop loading
            });
    }, [id]);

    // Render loading state
    if (loading) return <p>Loading...</p>;

    // Render error state
    if (error) return <p>{error}</p>;

    // Render user data
    return (
        <div>
            <AlertBox type="info" message="Login successful!" />
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
                <p className="font-semibold text-lg text-gray-500">ID: {userData.id}</p>
                </div>
            </div>

                {/* Divider */}
                <div className="border-t border-gray-300 my-4"></div>

                <div className="flex flex-col gap-2 font-medium text-gray-600 pb-3">
                <span>Program</span>
                <span>Department</span>
                <span>Branch</span> 
                </div>

                {/* Projects */}
                <div className="flex items-center gap-2 mb-2 text-gray-600">
                <i className="w-4 fa-regular fa-eye text-sky-600"></i>
                <span className="hover:text-sky-600 cursor-pointer transition-colors"><a href={`/student/${userData.id}/stuPrj`}>Projects</a></span>
                </div>

                {/* About */}
                <div className="flex items-center gap-2 mb-2 text-gray-600">
                <i className="w-4 fa-regular fa-user text-sky-600"></i>
                <span className="hover:text-sky-600 cursor-pointer transition-colors"><a href={`/student/${userData.id}/stuAbt`}>About</a></span>
                </div>

                {/* Bottom Divider */}
                <div className="border-t border-gray-300 mt-4"></div>
            </div>
            </section>
        </div>
    );
}

export default Student
