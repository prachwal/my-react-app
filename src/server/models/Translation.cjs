const mongoose = require("mongoose");

const TranslationSchema = new mongoose.Schema({
  language: { type: String, required: true },
  key: { type: String, required: true },
  value: { type: String, required: true },
});

const Translation = mongoose.model("Translation", TranslationSchema);

module.exports = Translation;
