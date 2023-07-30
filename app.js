// app.js

const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/book'); // Adjust the path to your model

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Connect to MongoDB
const uri = "mongodb+srv://BagavadGita:BagavadGita@bagavadgita.vt4o1rd.mongodb.net/SmokeTest?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Insert sample book data into the database
    const sampleBook = new Book({
      title: 'Sample Book',
      author: 'John Doe',
      genre: 'Fiction',
      publishedYear: 2023,
    });

    sampleBook.save()
      .then(() => {
        console.log('Sample book data inserted into the database');
      })
      .catch((error) => {
        console.error('Error inserting sample book data:', error);
      });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
