import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import React, { useState } from "react";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PolicySummary from '../components/PolicySummary';
import QuickActions from '../components/QuickActions';
import ClaimsOverview from '../components/ClaimsOverview';
import PersonalizedInsights from '../components/PersonalizedInsights';
import SupportSection from '../components/SupportSection';
import Footer from '../components/Footer';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
    <Header />
    <div className="flex">
      <Sidebar />
      <main
          className={`flex-1 p-6 transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-0 sm:ml-64"
          }`}
        >
        <PolicySummary />
        <QuickActions />
        <ClaimsOverview />
        <PersonalizedInsights />
      </main>
    </div>
    <SupportSection />
    <Footer />
  </div>
  
  );
}
