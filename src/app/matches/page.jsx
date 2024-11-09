"use client";
import React from 'react';
import Link from 'next/link';

const MatchesPage = ({ likedCompanies = [] }) => {
  const handleApply = (companyId) => {
    console.log(`Application sent to company ID: ${companyId}`);
  };

  return (
    <div className="matches-page bg-black-100 min-h-screen">
      <nav className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 shadow-lg fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/main" className="text-white text-3xl font-bold">
            ThriveConnect
          </Link>
          <ul className="flex space-x-6">
            <li><Link href="/swipe" className="text-white text-lg hover:text-blue-200">Swipe</Link></li>
            <li><Link href="/search" className="text-white text-lg hover:text-blue-200">Search</Link></li>
            <li><Link href="/matches" className="text-white text-lg hover:text-blue-200">Matches</Link></li>
            <li><Link href="/other" className="text-white text-lg hover:text-blue-200">Other</Link></li>
          </ul>
        </div>
      </nav>

      <div className="pt-20 p-6"> {/* Add top padding to account for fixed navbar */}
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Your Matches</h1>
        <div className="max-w-lg mx-auto">
          {likedCompanies.length > 0 ? (
            likedCompanies.map((company) => (
              <div key={company.id} className="bg-gray-800 p-6 rounded-lg shadow-md mb-4">
                <h2 className="text-2xl font-semibold text-white">{company.name}</h2>
                <p className="text-gray-400 mt-2">{company.description}</p>
                <button
                  onClick={() => handleApply(company.id)}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Apply
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No matches yet. Start swiping to find companies!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchesPage;



