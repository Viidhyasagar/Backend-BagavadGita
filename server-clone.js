// app.js

const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const csvParser = require('csv-parser');
const BhagavadGitaVerse = require('./models/bhagavadGitaVerse'); // Adjust the path to your model

const app = express();
const port = 3000;

// Rest of your code for connecting to MongoDB and reading CSV data


// Connect to MongoDB
const uri = "mongodb+srv://BagavadGita:BagavadGita@bagavadgita.vt4o1rd.mongodb.net/SmokeTest?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Read data from the CSV file and save to the database
    const csvFilePath = 'C://Users//ABC//Downloads//archive//Bhagwad_Gita.csv';
    const readStream = fs.createReadStream(csvFilePath)
      .pipe(csvParser());

    readStream.on('data', (data) => {
      // Create a new Bhagavad Gita verse instance with the parsed data
      const verse = new BhagavadGitaVerse(data);

      verse.save()
        .then(() => {
          console.log('Verse data saved:', verse);
        })
        .catch((error) => {
          console.error('Error saving verse data:', error);
        });
    });

    readStream.on('end', () => {
      console.log('Data import from CSV completed');
    });

  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
