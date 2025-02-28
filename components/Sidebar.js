import React, { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Sidebar Toggle Button (Mobile Only) */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded sm:hidden"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`w-64 bg-gray-800 dark:bg-gray-900 text-white h-screen fixed transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64 sm:translate-x-0"
        }`}
      >
        <nav className="p-4">
          <Link href="/" className="block pl-2 py-2 hover:bg-gray-700 dark:hover:bg-gray-700">
            Dashboard
          </Link>
          <Link href="/policies" className="block pl-2 py-2 hover:bg-gray-700 dark:hover:bg-gray-700">
            Policies
          </Link>
          <Link href="/claims" className="block pl-2 py-2 hover:bg-gray-700 dark:hover:bg-gray-700">
            Claims
          </Link>
          <Link href="/profile" className="block pl-2 py-2 hover:bg-gray-700 dark:hover:bg-gray-700">
            Profile
          </Link>
          <Link href="/settings" className="block pl-2 py-2 hover:bg-gray-700 dark:hover:bg-gray-700">
            Settings
          </Link>
          <Link href="/support" className="block pl-2 py-2 hover:bg-gray-700 dark:hover:bg-gray-700">
            Support
          </Link>
        </nav>
      </aside>
    </>
  );
}