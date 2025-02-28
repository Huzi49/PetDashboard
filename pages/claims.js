import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SupportSection from "../components/SupportSection";
import Footer from "@/components/Footer";

export default function ClaimsPage() {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch claims data from the API
    const fetchClaims = async () => {
      try {
        const response = await fetch('/api/claims');
        if (!response.ok) {
          throw new Error('Failed to fetch claims');
        }
        const data = await response.json();
        setClaims(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClaims();
  }, []);

  if (loading) {
    return <p className="text-gray-600">Loading claims...</p>;
  }

  if (error) {
    return <p className="text-red-600">Error: {error}</p>;
  }

  return (
    <div>
<Header/>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Full Claims History</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th>Claim ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim) => (
            <tr key={claim.id}>
              <td className="text-center">{claim.id}</td>
              <td className="text-center">{claim.date}</td>
              <td className="text-center">
                <span className={`px-2 py-1 rounded ${
                  claim.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                  claim.status === 'Approved' ? 'bg-green-200 text-green-800' :
                  'bg-red-200 text-red-800'
                }`}>
                  {claim.status}
                </span>
              </td>
              <td className="text-center">{claim.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}