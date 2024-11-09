// // src/app/LandingPage.tsx
// import React, { useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// const LandingPage = () => {
//   const router = useRouter();

//   // Automatically redirect to the main page after a short delay
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       router.push('/main'); // Redirect to the main page with the navbar
//     }, 3000); // Redirect after 3 seconds
//     return () => clearTimeout(timer); // Clear timeout if component unmounts
//   }, [router]);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <header className="text-center">
//         <h1 className="text-4xl font-bold text-blue-600 mb-4">
//           ThriveConnect: Redefine Work Well-being
//         </h1>
//         <p className="text-lg text-gray-700">
//           Discover workplaces that don't just offer a job—they help you thrive.
//           Connect with companies that prioritize well-being, mental health, and a shared sense of purpose.
//         </p>
//       </header>

//       <section className="mt-8 text-center">
//         <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
//         <p className="text-gray-700 max-w-2xl mx-auto">
//           Imagine a workplace where well-being is at the heart of everything. At ThriveConnect, we match talent with companies that foster a culture of care, balance, and growth.
//         </p>
//       </section>

//       <section className="mt-12 grid md:grid-cols-2 gap-8">
//         <div className="p-6 bg-blue-50 rounded-lg shadow-md text-center">
//           <h3 className="text-xl font-semibold mb-2">For Job Seekers</h3>
//           <p className="text-gray-600">
//             Discover companies that align with your values and well-being goals.
//           </p>
//           <Link href="/signup" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//             Get Started
//           </Link>
//         </div>
        
//         <div className="p-6 bg-green-50 rounded-lg shadow-md text-center">
//           <h3 className="text-xl font-semibold mb-2">For Companies</h3>
//           <p className="text-gray-600">
//             Showcase your commitment to well-being and attract talent.
//           </p>
//           <Link href="/companySignup" className="mt-4 inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
//             Learn More
//           </Link>
//         </div>
//       </section>

//       <footer className="mt-16 text-center text-gray-600">
//         <p>&copy; 2024 ThriveConnect. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;
