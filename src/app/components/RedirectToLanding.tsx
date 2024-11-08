// src/app/components/RedirectToLanding.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RedirectToLanding = () => {
  const router = useRouter();

  useEffect(() => {
    const hasVisitedLanding = localStorage.getItem("hasVisitedLanding");

    // Redirect to /landing if the user hasn't visited it yet
    if (!hasVisitedLanding) {
      localStorage.setItem("hasVisitedLanding", "true");
      router.push("/landing");
    }
  }, [router]);

  return null; // No UI for this component
};

export default RedirectToLanding;
