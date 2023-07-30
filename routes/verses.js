// routes/verses.js

const express = require('express');
const router = express.Router();
const BhagavadGitaVerse = require('../models/bhagavadGitaVerse'); // Adjust the path to your model

// GET /api/verses - Fetch all Bhagavad Gita verses
router.get('/', async (req, res) => {
  try {
    const verses = await BhagavadGitaVerse.find();
    res.json(verses);
  } catch (error) {
    console.error('Error fetching verses:', error);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
