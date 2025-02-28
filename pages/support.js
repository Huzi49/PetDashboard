import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";

export default function Support() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen bg-gray-100 p-6">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
              Support Center
            </h1>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-700">
                    How do I file a claim?
                  </h3>
                  <p className="text-gray-600">
                    You can file a claim by going to the "Claims" section in your dashboard and clicking on "Intimate a Claim."
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-700">
                    How can I update my policy details?
                  </h3>
                  <p className="text-gray-600">
                    Go to the "Policies" section, select your active policy, and click on "Edit Policy."
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Support
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span> support@petinsurance.com
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Phone:</span> +1 800 123 4567
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Live Chat:</span> Available 24/7
                </p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition"
              >
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
      <SupportSection />
      <Footer />
    </div>
  );
}
