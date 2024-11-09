"use client";

import  {React, useState} from "react";


export default function SurveyForm(){

const [answers, setAnswers] = useState({});
const [wellBeingScore, setWellBeingScore]= useState(null);
const [openResponse, setOpenResponse] = useState("");

const handleOptionChange = (questionId, score) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: score
    }));
  };

  // Lomakkeen lähetys ja pisteiden lasku
  const handleSubmit = (event) => {
    event.preventDefault();
    const score = Object.values(answers).reduce((acc, curr) => acc + curr, 0);
    setWellBeingScore(score);
  };

  const handleOpenResponseChange = (event) => {
    setOpenResponse(event.target.value);
  };

return (
        
  <form onSubmit={handleSubmit} className="signup-form max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
<h2 className="block text-gray-700 font-bold mb-2">Yrityksen hyvinvointi kysely</h2>

{/* Kysymykset */}
<div className="question form-group mb-4">
  <label className="block text-gray-700 font-bold mb-2">1. Millaisia mielenterveystukiohjelmia yrityksenne tarjoaa?</label>
  <div className="block text-gray-500 font-bold mb-2">
    <input type="radio" name="q1" onChange={() => handleOptionChange("q1", 1)} /> Ei mitään
    <input type="radio" name="q1" onChange={() => handleOptionChange("q1", 2)} /> Perustason tuki
    <input type="radio" name="q1" onChange={() => handleOptionChange("q1", 3)} /> Laaja palveluvalikoima
  </div>
</div>

<div className="question form-group mb-4">
  <label className="block text-gray-700 font-bold mb-2">2. Tarjoaako yrityksenne työssäjaksamiseen liittyvää koulutusta tai valmennusta?</label>
  <div className="block text-gray-500 font-bold mb-2">
    <input type="radio" name="q2" onChange={() => handleOptionChange("q2", 1)} /> Ei lainkaan
    <input type="radio" name="q2" onChange={() => handleOptionChange("q2", 2)} /> Satunnaisesti
    <input type="radio" name="q2" onChange={() => handleOptionChange("q2", 3)} /> Säännöllisesti
  </div>
</div>

<div className="question form-group mb-4">
  <label className="block text-gray-700 font-bold mb-2">3. Kuinka usein työntekijöiden hyvinvointi on esillä yrityksen strategisessa suunnittelussa?</label>
  <div className="block text-gray-500 font-bold mb-2">
    <input type="radio" name="q3" onChange={() => handleOptionChange("q3", 1)} /> Harvoin
    <input type="radio" name="q3" onChange={() => handleOptionChange("q3", 2)} /> Satunnaisesti
    <input type="radio" name="q3" onChange={() => handleOptionChange("q3", 3)} /> Säännöllisesti
  </div>
</div>

<div className="question form-group mb-4">
  <label className="block text-gray-700 font-bold mb-2">4. Miten yrityksenne arvio työntekijöiden mielenterveyteen liittyvien ohjelmien vaikutusta?</label>
  <textarea
    className="block text-gray-500 font-bold mb-2"
    value={openResponse}
    onChange={handleOpenResponseChange}
    placeholder="Kirjoita avoin vastaus tähän..."
    rows="4"
    cols="50"
    />
</div>

{/* Lisää kysymyksiä samalla tavalla... */}

<button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Lähetä kysely</button>

{/* Näytetään tulokset */}
{wellBeingScore !== null && (
    <div className="question form-group mb-4">
    <h3 className="block text-gray-700 font-bold mb-2">Yrityksen hyvinvointi pisteet: {wellBeingScore}</h3>
    <p className="block text-gray-700 font-bold mb-2">{wellBeingScore > 10 ? 'Erinomainen tuki' : wellBeingScore > 5 ? 'Keskiverto tuki' : 'Parannettavaa tuessa'}</p>
    <p  className="block text-gray-700 font-bold mb-2">Company open response {openResponse}</p>
  </div>
)}
</form>
);




}