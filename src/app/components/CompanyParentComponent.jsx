import React, { useState } from 'react';
import CompanySignUpForm from './CompanySignUpForm';
import CompanyProfilePage from './CompanyProfilePage';

const ParentComponent = () => {
  const [formData, setFormData] = useState({
    Yrityksenimi: '',
    Avoimetpaikat: [''],
    kuvaus: '',
    arvostelut: [''],
    arvoja: '',
  });

  const handleFormSubmit = (data) => {
    setFormData(data); // Update the profile data when form is submitted
    console.log('Form submitted, formData updated:', data);
  };

  return (
    <div>
      <h2>Company Sign-Up</h2>
      <CompanySignUpForm onSubmit={handleFormSubmit} />
      
      <h2>Company Profile</h2>
      <CompanyProfilePage profileData={formData} />
    </div>
  );
};

export default ParentComponent;
