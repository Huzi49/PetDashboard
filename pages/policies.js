import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";

export default function Policies() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen bg-gray-100 p-6">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
            {/* Page Heading */}
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
              Policies
            </h1>

            {/* Policies List */}
            <div className="space-y-6">
              {/* Policy 1 */}
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Basic Plan
                  </h2>
                  <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Active
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Coverage:</span> $5,000
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Deductible:</span> $500
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Renewal Date:</span> 2024-01-01
                  </p>
                </div>
              </div>

              {/* Policy 2 */}
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Premium Plan
                  </h2>
                  <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    Pending Renewal
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Coverage:</span> $10,000
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Deductible:</span> $1,000
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Renewal Date:</span> 2024-02-01
                  </p>
                </div>
              </div>

              {/* Policy 3 */}
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Gold Plan
                  </h2>
                  <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    Expired
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Coverage:</span> $15,000
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Deductible:</span> $1,500
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Renewal Date:</span> 2023-12-01
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