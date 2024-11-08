"use client";

import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Display login prompt if not logged in */}
      {!isLoggedIn ? (
        <div className="text-center mt-8">
          <h2 className="text-2xl font-semibold">
            Please log in to access the homepage features
          </h2>
          <Link
            href="/login"
            className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go to Login
          </Link>
        </div>
      ) : null}

      {/* Main content visible to everyone */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-black mb-4">
          ThriveConnect: Redefine Work Well-being
        </h1>
        <p className="text-lg text-gray-600">
          Discover workplaces that don't just offer a job—they help you thrive. 
          Connect with companies that prioritize well-being, mental health, and a shared sense of purpose.
          </p>
      </header>

      <section className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Imagine a workplace where well-being is at the heart of everything. At ThriveConnect, we match
          talent with companies that foster a culture of care, balance, and growth. We believe that your
          work shouldn’t drain you—it should help you recharge.
        </p>
      </section>

      <section className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-blue-50 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2 text-black ">For Job Seekers</h3>
          <p className="text-gray-600">
            Discover companies that align with your values and well-being goals. Start building a career where you can truly thrive.
          </p>
          <Link href="/WorkerSignUp" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Sign Up
            </Link>


        </div>

        <div className="p-6 bg-green-50 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2 text-black">For Companies</h3>
          <p className="text-gray-600">
            Showcase your commitment to well-being and attract talent that shares your values. Help your team members find their purpose and flourish.
          </p>


          <Link
            href="/companySignup"
            className="mt-4 inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Learn More
          </Link>
        </div>
      </section>

      <footer className="mt-16 text-center text-gray-600">
        <p>&copy; 2024 ThriveConnect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;




