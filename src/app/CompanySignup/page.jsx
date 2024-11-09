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
    <form onSubmit={handleSubmit} className="signup-form max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
    <div className="form-group mb-4">
      <label className="block text-gray-700 font-bold mb-2">
        Yrityksenimi:
        <input type="text" name="Yrityksenimi" value={formData.Yrityksenimi} onChange={handleChange} required 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
    </div>

    <div className="form-group mb-4">
      <label className="block text-gray-700 font-bold mb-2">
        Avoimet työpaikkat:
        <input type="text" name="Avoimetpaikat" value={formData.Avoimetpaikat} onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
    </div>
    
    <div className="form-group mb-4"> 

      <label className="block text-gray-700 font-bold mb-2">
        Kuvaus:
        <textarea
          name="kuvaus"
          value={formData.kuvaus}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
    </div>
    
    <div className="form-group mb-4"> 

      <label className="block text-gray-700 font-bold mb-2">
        Arvoja:
        <input type="text" name="arvoja" value={formData.arvoja} onChange={handleChange} required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
    </div>
 
 
    <div className="form-group mb-6">
      <label className="block text-gray-700 font-bold mb-2">
        Lisää kuvia:
        <input type="file" name="kuva" onChange={(e) => setFormData({ ...formData, kuva: e.target.files[0] })} />
      </label>
 
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
    </div>
    </form>
  );
};
 
export default CompanySignUpForm;