// src/app/swipe/page.tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const swipeData = {
  companies: [
    {
      id: 1,
      name: 'WellCo',
      description: 'A company committed to employee well-being, offering flexible working hours and mental health resources.',
      wellBeingScore: 86,
      logo: '/path-to-logo.jpg',
    },
    {
      id: 2,
      name: 'MindfulTech',
      description: 'A tech company fostering a culture of mindfulness and work-life balance.',
      wellBeingScore: 86,
      logo: '/path-to-logo.jpg',
    },
    {
      id: 3,
      name: 'HealthyFuture Corp',
      description: 'Leading the way in sustainable business practices and employee well-being.',
      wellBeingScore: 86,
      logo: '/path-to-logo.jpg',
    },
  ],
  jobSeekers: [
    {
      id: 1,
      name: 'Anna Virtanen',
      description: 'Experienced software developer with a passion for building products that prioritize well-being.',
      profilePicture: '/path-to-profile-picture.jpg',
    },
    {
      id: 2,
      name: 'Mikko Lahtinen',
      description: 'Marketing expert with a focus on creating brand strategies that emphasize mental health and balance.',
      profilePicture: '/path-to-profile-picture.jpg',
    },
    {
      id: 3,
      name: 'Laura Korhonen',
      description: 'Data analyst with a background in research and a commitment to improving workplace environments.',
      profilePicture: '/path-to-profile-picture.jpg',
    },
  ],
};

const SwipePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipedItems, setSwipedItems] = useState<number[]>([]);
  
  const dataToSwipe = swipeData.companies; // Change to jobSeekers to swipe job seekers

  const handleSwipe = (action: 'like' | 'dislike') => {
    const currentItem = dataToSwipe[currentIndex];
    setSwipedItems([...swipedItems, currentItem.id]);

    // Move to the next item
    if (currentIndex < dataToSwipe.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Reset to the beginning (loop)
    }
  };

  return (
    <div className="swipe-page">
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/main" className="text-white text-2xl font-bold">
            ThriveConnect
          </Link>
        </div>
      </nav>
      
      {/* Swipe section */}
      <div className="flex justify-center items-center mt-12">
        <div className="swipe-card bg-white p-6 rounded-lg shadow-md max-w-xs text-center">
          <img
            src={dataToSwipe[currentIndex].logo || dataToSwipe[currentIndex].profilePicture}
            alt="logo"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{dataToSwipe[currentIndex].name}</h2>
          <p className="text-gray-600 mb-4">{dataToSwipe[currentIndex].description}</p>
          <div className="flex justify-between">
            <button
              onClick={() => handleSwipe('dislike')}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Dislike
            </button>
            <button
              onClick={() => handleSwipe('like')}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Like
            </button>
          </div>
        </div>
      </div>

      {/* Display swiped items */}
      <div className="text-center mt-8">
        <h3 className="text-lg font-bold">Swiped Items:</h3>
        <ul>
          {swipedItems.map((itemId) => (
            <li key={itemId}>Item {itemId}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SwipePage;

