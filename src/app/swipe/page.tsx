"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { database } from '../components/FirebaseConfig';
import { ref, push } from 'firebase/database';

interface Company {
  id: number;
  name: string;
  description: string;
  wellBeingScore: number;
}

const swipeData = {
  companies: [
    { id: 1, name: 'WellCo', description: 'A company committed to employee well-being...', wellBeingScore: 86 },
    { id: 2, name: 'MindfulTech', description: 'A tech company fostering a culture of mindfulness...', wellBeingScore: 90 },
    { id: 3, name: 'HealthyFuture Corp', description: 'Leading the way in sustainable business practices...', wellBeingScore: 88 },
  ],
};

const SwipePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedCompanies, setLikedCompanies] = useState<Company[]>([]); // Specify the type here
  
  const dataToSwipe = swipeData.companies;

  const handleSwipe = (action: 'like' | 'dislike') => {
    const currentItem = dataToSwipe[currentIndex];

    if (action === 'like') {
      setLikedCompanies([...likedCompanies, currentItem]);
      const itemsRef = ref(database, 'Liked Companies');
      push(itemsRef, currentItem);
    }

    if (currentIndex < dataToSwipe.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="swipe-page min-h-screen bg-gray-100">
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

      <div className="flex justify-center items-center mt-16">
        <div className="swipe-card bg-white p-8 rounded-lg shadow-xl max-w-md text-center">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">{dataToSwipe[currentIndex].name}</h2>
          <p className="text-gray-600 mb-4">{dataToSwipe[currentIndex].description}</p>
          {dataToSwipe[currentIndex].wellBeingScore && (
            <p className="text-blue-600 font-bold mb-4">Well-being Score: {dataToSwipe[currentIndex].wellBeingScore}</p>
          )}
          <div className="flex justify-around mt-6">
            <button
              onClick={() => handleSwipe('dislike')}
              className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center text-xl shadow-md hover:bg-red-600"
            >
              ✕
            </button>
            <button
              onClick={() => handleSwipe('like')}
              className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-xl shadow-md hover:bg-green-600"
            >
              ❤
            </button>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default SwipePage;



