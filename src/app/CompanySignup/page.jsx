'use client'
import React, { useState } from 'react';
 
const CompanySignUpForm = () => {
  const [formData, setFormData] = useState({
    Yrityksenimi: '',
    Avoimetpaikat: [''],
    kuvaus: '',
    kuva: '',
    arvostelut:[''],
    arvoja: '',
    työntekijä:[''],
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleArrayChange = (e, index, fieldName) => {
    const newValue = e.target.value;
    setFormData((prevState) => {
      const updatedArray = [...prevState[fieldName]];
      updatedArray[index] = newValue;
      return { ...prevState, [fieldName]: updatedArray };
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here, you can also send the data to an API endpoint or a backend server.
  };
 
  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <label>
        Yrityksenimi:
        <input type="text" name="Yrityksenimi" value={formData.Yrityksenimi} onChange={handleChange} required />
      </label>
 
      <label>
        Avoimet työpaikkat:
        <input type="text" name="Avoimetpaikat" value={formData.Avoimetpaikat} onChange={handleChange} />
      </label>
 
      <label>
        Kuvaus:
        <textarea name="kuvaus" value={formData.kuvaus} onChange={handleChange} required />
      </label>
 
      <label>
        Arvoja:
        <input type="text" name="arvoja" value={formData.arvoja} onChange={handleChange} required />
      </label>
 
 
      <label>
        Arvostelut:
        {formData.työntekijä.map((kommentti, index) => (
          <input
            key={index}
            type="text"
            value={kommentti}
            onChange={(e) => handleArrayChange(e, index, 'työntekijä')}
          />
        ))}
      </label>
 
      <label>
        Kuva:
        <input type="file" name="kuva" onChange={(e) => setFormData({ ...formData, kuva: e.target.files[0] })} />
      </label>
 
      <button type="submit">Sign Up</button>
    </form>
  );
};
 
export default CompanySignUpForm;