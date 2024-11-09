"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const jobListings = [
  {
    id: 1,
    companyName: 'WellCo',
    jobTitle: 'Software Engineer',
    industry: 'Tech',
    wellBeingScore: 86,
    jobDescription: 'Develop and maintain web applications with a focus on well-being.',
  },
  {
    id: 2,
    companyName: 'MindfulTech',
    jobTitle: 'Product Manager',
    industry: 'Tech',
    wellBeingScore: 90,
    jobDescription: 'Lead product development with mindfulness at the core.',
  },
  {
    id: 3,
    companyName: 'HealthyFuture Corp',
    jobTitle: 'Data Analyst',
    industry: 'Health',
    wellBeingScore: 88,
    jobDescription: 'Analyze data to improve sustainable and healthy business practices.',
  },
  // Add more job listings as needed
];

const industries = ['All', 'Tech', 'Health', 'Finance', 'Education'];

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [minWellBeingScore, setMinWellBeingScore] = useState(0);

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearchTerm = job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'All' || job.industry === selectedIndustry;
    const matchesWellBeingScore = job.wellBeingScore >= minWellBeingScore;
    return matchesSearchTerm && matchesIndustry && matchesWellBeingScore;
  });

  return (
    <div className="search-page min-h-screen bg-gray-100">
      <nav className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 shadow-lg">
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
      
      <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by company or job title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        
        <div className="flex gap-4 mb-4">
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>

          <input 
            type="text"
            placeholder="Well-being Score"
            value={minWellBeingScore}
            onChange={(e) => setMinWellBeingScore(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="job-listings mt-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{job.jobTitle} at {job.companyName}</h2>
                <p className="text-gray-600">{job.jobDescription}</p>
                <p className="text-blue-600 font-bold">Well-being Score: {job.wellBeingScore}</p>
                <p className="text-gray-500">Industry: {job.industry}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center">No jobs found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

