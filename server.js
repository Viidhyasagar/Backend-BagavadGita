const express = require("express");
const mongoose = require("mongoose");
const fs = require('fs');


const app = express();

const uri = "mongodb+srv://BagavadGita:BagavadGita@bagavadgita.vt4o1rd.mongodb.net/?retryWrites=true&w=majority";

const Chapter = require('./models/Chapters'); // Assuming you have defined the Chapter model

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

    const csvFilePath = 'C://Users//ABC//Downloads//archive//Bhagwad_Gita.csv';
    const csvData = fs.readFileSync(csvFilePath, 'utf-8');

    // Split the CSV data into rows
    const rows = csvData.split('\n');

    // Extract the headers (first row)
    const headers = rows[0].split(',');

    // Loop through the rows (skipping the header row)
    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split(',');

      // Create a new Chapter object from the CSV data
      const chapterData = {
        ID: rowData[0],
        Chapter: rowData[1],
        Verse: rowData[2],
        Shloka: rowData[3],
        Transliteration: rowData[4],
        HinMeaning: rowData[5],
        EngMeaning: rowData[6],
        WordMeaning: rowData[7],
      };

      // Insert the Chapter data into the collection
      await Chapter.create(chapterData);
    }

    console.log('Data inserted successfully.');

  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
