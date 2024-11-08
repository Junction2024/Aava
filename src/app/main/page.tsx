// src/app/main/page.tsx
"use client";
import React from 'react';
import Link from 'next/link';

const MainPage = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><Link href="/swipe">Swipe</Link></li>
          <li><Link href="/search">Search</Link></li>
          <li><Link href="/matches">Matches</Link></li>
          <li><Link href="/other">Other</Link></li>
        </ul>
      </nav>
      
      <main className="main-content">
        <h1>Welcome to ThriveConnect</h1>
        {/* Your main page content goes here */}
      </main>
    </div>
  );
};

export default MainPage;
