// src/app/Review/page.tsx
"use client";

import { useState } from "react";
import ReviewForm from "../components/ReviewForm"; // Ensure this is the correct path
import CompanyReview from "../components/types";

// Define the onSubmit function
const handleReviewSubmit = (review: CompanyReview) => {
  // Implement what happens when the form is submitted
  // For example, logging the review to the console:
  console.log("Review submitted:", review);

  // You can also perform other actions, such as updating the state or sending the review to an API
};

const ReviewPage = () => {
  return (
    <div>
      <h2>Submit a Review</h2>
      <ReviewForm onSubmit={handleReviewSubmit} />
    </div>
  );
};

export default ReviewPage;

