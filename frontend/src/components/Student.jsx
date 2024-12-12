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
            <h1>Welcome, {userData.name}</h1>
            <p>Email: {userData.email}</p>
            <p>ID: {userData.id}</p>
        </div>
    );
}

export default Student
