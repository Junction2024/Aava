import React, { useState } from 'react';
import axios from 'axios';

const CompanyReview = ({ companyId, companyName }) => {
  const [mentalHealth, setMentalHealth] = useState(0);
  const [workLifeBalance, setWorkLifeBalance] = useState(0);
  const [diversity, setDiversity] = useState(0);
  const [culture, setCulture] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [wellBeingScore, setWellBeingScore] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewData = { mentalHealth, workLifeBalance, diversity, culture, reviewText };

    try {
      const response = await axios.post(`/api/addReview/${companyId}`, reviewData);
      setWellBeingScore(response.data.wellBeingScore); // Näytä päivitetyt pisteet
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <div>
      <h2>Leave a Review for {companyName}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Mental Health Resources (0-100)</label>
          <input type="number" value={mentalHealth} onChange={(e) => setMentalHealth(e.target.value)} max="100" min="0" />
        </div>
        <div>
          <label>Work-Life Balance (0-100)</label>
          <input type="number" value={workLifeBalance} onChange={(e) => setWorkLifeBalance(e.target.value)} max="100" min="0" />
        </div>
        <div>
          <label>Diversity (0-100)</label>
          <input type="number" value={diversity} onChange={(e) => setDiversity(e.target.value)} max="100" min="0" />
        </div>
        <div>
          <label>Culture (0-100)</label>
          <input type="number" value={culture} onChange={(e) => setCulture(e.target.value)} max="100" min="0" />
        </div>
        <div>
          <label>Review</label>
          <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
        </div>
        <button type="submit">Submit Review</button>
      </form>
      {wellBeingScore !== null && (
        <div>
          <h3>Well-being Score: {wellBeingScore}</h3>
        </div>
      )}
    </div>
  );
};

export default CompanyReview;
