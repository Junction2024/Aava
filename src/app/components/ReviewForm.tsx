// src/app/Review/page.tsx
import { useState } from "react";
import CompanyReview from "../components/types"; // Correct the import to match default export

const ReviewForm = ({ onSubmit }: { onSubmit: (review: CompanyReview) => void }) => {
  const [workLifeBalance, setWorkLifeBalance] = useState(50);
  const [mentalHealthResources, setMentalHealthResources] = useState(50);
  const [cultureAndEnvironment, setCultureAndEnvironment] = useState(50);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    const review: CompanyReview = {
      userId: "currentUser", // Replace with actual user ID
      companyId: "companyId", // Replace with actual company ID
      workLifeBalance,
      mentalHealthResources,
      cultureAndEnvironment,
      comment,
      date: new Date(),
    };
    onSubmit(review);
  };

  return (
    <div>
      <h3>Rate This Company</h3>
      <label>
        Work-Life Balance:
        <input
          type="range"
          min="0"
          max="100"
          value={workLifeBalance}
          onChange={(e) => setWorkLifeBalance(Number(e.target.value))}
        />
      </label>
      <label>
        Mental Health Resources:
        <input
          type="range"
          min="0"
          max="100"
          value={mentalHealthResources}
          onChange={(e) => setMentalHealthResources(Number(e.target.value))}
        />
      </label>
      <label>
        Culture and Work Environment:
        <input
          type="range"
          min="0"
          max="100"
          value={cultureAndEnvironment}
          onChange={(e) => setCultureAndEnvironment(Number(e.target.value))}
        />
      </label>
      <textarea
        placeholder="Additional feedback (optional)"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Review</button>
    </div>
  );
};

export default ReviewForm;