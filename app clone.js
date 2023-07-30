const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 8001;

// MongoDB connection
const uri = "mongodb+srv://BagavadGita:BagavadGita@bagavadgita.vt4o1rd.mongodb.net/SmokeTest?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Enable CORS
app.use(cors());

// Define the schema and model for Bhagavad Gita verses
const verseSchema = new mongoose.Schema({
  Chapter: Number,
  Verse: Number,
  Shloka: String,
});

const BhagavadGitaVerse = mongoose.model('BhagavadGitaVerse', verseSchema);

// Define the API endpoint to fetch all verses from the "bagavathgita" collection
app.get('/api/verses', async (req, res) => {
  try {
    const verses = await BhagavadGitaVerse.find();
    res.json(verses);
  } catch (error) {
    console.error('Error fetching verses:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
