'use client'

import React, { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    etuNimi: '',
    sukuNimi: '',
    syntymäaika: '',
    sahkoposti: '',
    tyokokemusLista: [''],
    taidotLista: [''],
    kuva: '',
    kuvaus: '',
    arvoja: '',
    suosittelija: [''],
    nykyinenTyopaikka: '',
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
        <label className="block text-gray-700 font-bold mb-2">Etunimi:</label>
        <input
          type="text"
          name="etuNimi"
          value={formData.etuNimi}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="form-group mb-4">
        <label className="block text-gray-700 font-bold mb-2">Sukunimi:</label>
        <input
          type="text"
          name="sukuNimi"
          value={formData.sukuNimi}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="form-group mb-4">
        <label className="block text-gray-700 font-bold mb-2">Syntymäaika:</label>
        <input
          type="numeric"
          name="ika"
          value={formData.syntymäaika}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="form-group mb-4">
        <label className="block text-gray-700 font-bold mb-2">Sähköposti:</label>
        <input
          type="email"
          name="sahkoposti"
          value={formData.sahkoposti}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="form-group mb-4">
        <label className="block text-gray-700 font-bold mb-2">Nykyinen Työpaikka:</label>
        <input
          type="text"
          name="nykyinenTyopaikka"
          value={formData.nykyinenTyopaikka}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="form-group mb-4">
        <label className="block text-gray-700 font-bold mb-2">Kuvaus:</label>
        <textarea
          name="kuvaus"
          value={formData.kuvaus}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="form-group mb-4">
        <label className="block text-gray-700 font-bold mb-2">Arvoja:</label>
        <input
          type="text"
          name="arvoja"
          value={formData.arvoja}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="form-group mb-4">
        <label className="block text-gray-700 font-bold mb-2">Työkokemus:</label>
        {formData.tyokokemusLista.map((kokemus, index) => (
          <input
            key={index}
            type="text"
            value={kokemus}
            onChange={(e) => handleArrayChange(e, index, 'tyokokemusLista')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          />
        ))}
      </div>

      <div className="form-group mb-4">
        <label className="block text-gray-700 font-bold mb-2">Taidot:</label>
        {formData.taidotLista.map((taito, index) => (
          <input
            key={index}
            type="text"
            value={taito}
            onChange={(e) => handleArrayChange(e, index, 'taidotLista')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          />
        ))}
      </div>

      <div className="form-group mb-4">
        <label className="block text-gray-700 font-bold mb-2">Suosittelijat:</label>
        {formData.suosittelija.map((kommentti, index) => (
          <input
            key={index}
            type="text"
            value={kommentti}
            onChange={(e) => handleArrayChange(e, index, 'suosittelija')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          />
        ))}
      </div>

      <div className="form-group mb-6">
        <label className="block text-gray-700 font-bold mb-2">Kuva:</label>
        <input
          type="file"
          name="kuva"
          onChange={(e) => setFormData({ ...formData, kuva: e.target.files[0] })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
