import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SupportSection from '../components/SupportSection';
import Footer from "@/components/Footer";

export default function Profile() {
  const [user, setUser] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  // Fetch user data from the API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        setUser(response.data); // Set the user data
        setLoading(false); // Set loading to false
      } catch (err) {
        setError(err.message); // Set error message
        setLoading(false); // Set loading to false
      }
    };

    fetchUserData();
  }, []);

  // Display loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  // Display error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen bg-gray-100 p-6">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
            {/* Profile Header */}
            <div className="text-center">
              <img
                src="/assets/images/dummy-profile.jpg" // Add your profile image in the public folder
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
              />
              <h1 className="text-3xl font-bold text-gray-800 mt-4">
                {user.name}
              </h1>
              <p className="text-gray-600">{user.email}</p>
            </div>

            {/* Profile Details */}
            <div className="mt-8 space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Personal Information
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    <span className="font-medium">Name:</span> {user.name}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Email:</span> {user.email}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Phone:</span> {user.phone}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Address:</span>{" "}
                    {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      <SupportSection/>
      <Footer/>
    </div>
  );
}