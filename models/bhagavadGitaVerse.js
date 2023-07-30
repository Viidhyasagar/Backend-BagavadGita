// models/bhagavadGitaVerse.js

const mongoose = require('mongoose');

const bhagavadGitaVerseSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
  },
  Chapter: {
    type: String,
    required: true,
  },
  Verse: {
    type: String,
    required: true,
  },
  Shloka: {
    type: String,
    required: true,
  },
  Transliteration: {
    type: String,
    required: true,
  },
  HinMeaning: {
    type: String,
    required: true,
  },
  EngMeaning: {
    type: String,
    required: true,
  },
  WordMeaning: {
    type: String,
    required: true,
  },
});

const BhagavadGitaVerse = mongoose.model('BhagavadGitaVerse', bhagavadGitaVerseSchema);

module.exports = BhagavadGitaVerse;
