import React, { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4 pl-16 sm:pl-4"> {/* Add left padding for toggle button */}
        <div className="flex items-center">
        <Link href="/">
          <img src="/assets/images/logo-dog.png" alt="Logo" className="h-10 cursor-pointer" />
        </Link>
                  <input
            type="text"
            placeholder="Search policies..."
            className="ml-4 p-2 border rounded hidden sm:block" // Hide search bar on small screens
          />
        </div>
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          <div className="relative">
            {/* User Icon Button */}
            <button
              onClick={toggleDropdown}
              className="flex items-center focus:outline-none"
            >
              <img
                src="/assets/images/user1.png"
                alt="User"
                className="h-8 w-8 rounded-full"
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                <Link
                  href="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}