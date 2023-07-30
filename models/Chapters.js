const mongoose = require('mongoose');

// Define the schema for Chapters
const chapterSchema = new mongoose.Schema({
  ID: { type: String, required: false },
  Chapter: { type: String, required: false },
  Verse: { type: String, required: false },
  Shloka: { type: String, required: false },
  Transliteration: { type: String, required: false },
  HinMeaning: { type: String, required: false },
  EngMeaning: { type: String, required: false },
  WordMeaning: { type: String, required: false },
});

// Create the Chapter model
const Chapter = mongoose.model('Chapters', chapterSchema);

module.exports = Chapter;
