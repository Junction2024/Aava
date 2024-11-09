"use client";
import React from 'react';
import Link from 'next/link';

const MainPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            ThriveConnect
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/swipe" className="text-white text-lg hover:text-blue-200">
                Swipe
              </Link>
            </li>
            <li>
              <Link href="/search" className="text-white text-lg hover:text-blue-200">
                Search
              </Link>
            </li>
            <li>
              <Link href="/matches" className="text-white text-lg hover:text-blue-200">
                Matches
              </Link>
            </li>
            <li>
              <Link href="/other" className="text-white text-lg hover:text-blue-200">
                Other
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <main className="main-content py-12 px-6 md:px-16">
        <h1 className="text-center text-4xl font-semibold text-gray-900 mb-6">
          Welcome to ThriveConnect
        </h1>
        <p className="text-center text-lg text-gray-600">
          Connecting talent with companies that prioritize well-being, purpose, and a healthy work-life balance.
        </p>
      </main>
    </div>
  );
};

export default MainPage;

