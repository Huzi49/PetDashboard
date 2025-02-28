import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";

export default function Settings() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen bg-gray-100 p-6">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
            {/* Page Heading */}
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
              Settings
            </h1>

            {/* Account Settings */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Account Settings
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    Profile Information
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-medium">Name:</span> John Doe
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Email:</span> john.doe@example.com
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Phone:</span> +1 234 567 890
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    Password
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-medium">Last Changed:</span> 3 months ago
                  </p>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Preferences
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    Notification Settings
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-medium">Email Notifications:</span> Enabled
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Push Notifications:</span> Disabled
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    Language & Region
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-medium">Language:</span> English
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Region:</span> United States
                  </p>
                </div>
              </div>
            </div>

            {/* Security */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Security
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    Two-Factor Authentication
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-medium">Status:</span> Disabled
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    Connected Devices
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-medium">Active Devices:</span> 2
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Last Active:</span> 1 hour ago
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