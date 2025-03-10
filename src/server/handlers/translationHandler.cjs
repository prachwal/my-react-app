const Translation = require("../models/Translation.cjs");

module.exports = async function handleTranslationRequest(req, res) {
  const { language } = req.params;

  try {
    const translations = await Translation.find({ language });
    const translationMap = translations.reduce((map, translation) => {
      map[translation.key] = translation.value;
      return map;
    }, {});

    res.json(translationMap);
  } catch (err) {
    console.error("[ERROR] Błąd podczas pobierania tłumaczeń:", err);
    res.status(500).json({ error: "Failed to fetch translations" });
  }
};
