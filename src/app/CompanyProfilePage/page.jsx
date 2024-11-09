"use client"
import React from 'react';

const CompanyProfilePage = ({ profileData }) => {
    console.log("Profile Data:", profileData);
    return (
        <div>
      <h3>Yrityksenimi</h3>
      <p><strong>Company Description:</strong></p>
      <p><strong>Open Positions:</strong></p>
      <p><strong>Reviews:</strong></p>
      <p><strong>Values:</strong></p>
    </div>
  );
};

export default CompanyProfilePage;
