// const express = require('express');
// const router = express.Router();
// // const Company = require('../models/Company');

// // Lisää arvostelu yritykselle
// router.post('/addReview/:companyId', async (req, res) => {
//   try {
//     const { mentalHealth, workLifeBalance, diversity, culture, reviewText } = req.body;
//     const companyId = req.params.companyId;

//     // Hae yritys tietokannasta
//     const company = await Company.findById(companyId);
//     if (!company) {
//       return res.status(404).json({ message: 'Company not found' });
//     }

//     // Lisää arvostelu yritykselle
//     company.reviews.push({ mentalHealth, workLifeBalance, diversity, culture, reviewText });
    
//     // Laske hyvinvointipisteet uudelleen
//     company.wellBeingScore = company.calculateWellBeingScore();
//     await company.save();

//     res.status(201).json({ message: 'Review added successfully', wellBeingScore: company.wellBeingScore });
//   } catch (error) {
//     res.status(500).json({ message: 'Error adding review', error });
//   }
// });

// module.exports = router;
