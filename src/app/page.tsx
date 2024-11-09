'use client'
import React from 'react';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';
import Image from 'next/image';
import aavaLogo from '/public/aavalogo.png';
import laakaritImage from '/public/laakarit.png';
import laakariImage from '/public/laakari.png';

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Display logo at the top left corner */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image src={aavaLogo} alt="Aava Logo" width={200} height={50} />
        </div>
        {/* Display login button at the top right corner if not logged in */}
        <div className="flex justify-end">
          {!isLoggedIn && (
            <Link
              href="/login"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Log In
            </Link>
          )}
        </div>
      </div>

      {/* Main content visible to everyone */}
      <header className="text-center mt-8">
        <h1 className="text-4xl font-bold text-black mb-4">
          ThriveConnect: Redefine Work Well-being
        </h1>

        <p className="text-lg text-gray-600">
         {/* Discover workplaces that don't just offer a job—they help you thrive. 
          Connect with companies that prioritize well-being, mental health, and a shared sense of purpose. */}
          Imagine a workplace where well-being is at the heart of everything. At ThriveConnect, we match
          talent with companies that foster a culture of care, balance, and growth. We believe that your
          work shouldn't drain you—it should help you recharge.
        </p>
      </header>

     {/* <section className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Imagine a workplace where well-being is at the heart of everything. At ThriveConnect, we match
          talent with companies that foster a culture of care, balance, and growth. We believe that your
          work shouldn’t drain you—it should help you recharge.
        </p>
          </section> */}

      <section className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <Image src={laakariImage} alt="Doctor with Stethoscope" width={400} height={300} className="mb-4 rounded-lg shadow-lg" />
          <div className="p-6 bg-blue-50 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2 text-black">For Job Seekers</h3>
            <p className="text-gray-600">
              Discover companies that align with your values and well-being goals. Start building a career where you can truly thrive.
            </p>
            <Link href="/WorkerSignUp" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign Up
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image src={laakaritImage} alt="Healthcare Professionals" width={400} height={300} className="mb-4 rounded-lg shadow-lg" />
          <div className="p-6 bg-green-50 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2 text-black">For Companies</h3>
            <p className="text-gray-600">
              Showcase your commitment to well-being and attract talent that shares your values. Help your team members find their purpose and flourish.
            </p>
            <Link href="/CompanySignup" className="mt-4 inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Sign up
            </Link>
          </div>
        </div>
      </section>

      <footer className="mt-16 text-center text-gray-600">
        <p>&copy; 2024 ThriveConnect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
