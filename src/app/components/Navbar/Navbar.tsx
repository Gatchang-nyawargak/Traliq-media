"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex py-2 px-4 bg-gradient-to-r from-blue-700 to-indigo-800 text-white w-full shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo - Added Padding Left */}
        <Link href="/" className="mr-4 font-bold text-lg pl-14">
          Traliq Media
        </Link>

        {/* Centered Navigation with Reduced Spacing */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-6 font-bold items-center">
            <Link href="/" className="hover:text-yellow-400 transition duration-200">
              Home
            </Link>
            
            <Link href="/about" className="hover:text-yellow-400 transition duration-200">
              About
            </Link>

            {/* Sign Up Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 hover:text-yellow-400 transition duration-200 focus:outline-none px-3 py-2 rounded-lg hover:bg-blue-600"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Sign Up</span>
                <svg 
                  className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-4 transform transition-all duration-200">
                  <h3 className="text-gray-800 text-xl font-semibold mb-4 px-6 pb-3 border-b border-gray-100">
                    Join Traliq as:
                  </h3>
                  <div className="flex flex-col gap-3 px-4">
                    <Link
                      href="/signup/creator"
                      className="flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 rounded-xl transition duration-200 group"
                    >
                      <span className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                        👤
                      </span>
                      <div>
                        <p className="font-medium text-lg text-blue-600">Creator</p>
                        <p className="text-gray-500">Join as a creator</p>
                      </div>
                    </Link>
                    <Link
                      href="/signup/business"
                      className="flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 rounded-xl transition duration-200 group"
                    >
                      <span className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                        💼
                      </span>
                      <div>
                        <p className="font-medium text-lg text-blue-600">Business</p>
                        <p className="text-gray-500">Join as business</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/contact" className="hover:text-yellow-400 transition duration-200">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button - Stays on the right */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-lg">
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
