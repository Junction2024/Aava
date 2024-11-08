// src/app/login/page.tsx
"use client";

import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();

  return (
    <div className="text-center mt-8">
      <h2 className="text-2xl font-semibold">Log in to ThriveConnect</h2>
      <button onClick={login} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">
        Log In
      </button>
    </div>
  );
};

export default LoginPage;
