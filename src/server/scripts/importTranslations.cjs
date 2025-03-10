const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const Translation = require("../models/Translation.cjs");

const localesDir = path.join(__dirname, "../../../src/client/locales");
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/appdb";

async function importTranslations() {
  try {
    await mongoose.connect(mongoUri);
    console.log("[INFO] Połączono z MongoDB");

    if (!fs.existsSync(localesDir)) {
      throw new Error(`Katalog ${localesDir} nie istnieje`);
    }

    const languages = fs.readdirSync(localesDir);
    for (const language of languages) {
      const languageDir = path.join(localesDir, language);
      const files = fs.readdirSync(languageDir);

      for (const file of files) {
        if (file.endsWith(".json")) {
          const filePath = path.join(languageDir, file);
          const translations = JSON.parse(fs.readFileSync(filePath, "utf8"));

          for (const [key, value] of Object.entries(translations)) {
            await Translation.updateOne(
              { language, key },
              { value },
              { upsert: true },
            );
          }
          console.log(
            `[INFO] Importowane tłumaczenia dla języka ${language} z pliku ${file}`,
          );
        }
      }
    }

    console.log("[INFO] Import tłumaczeń zakończony");
    mongoose.disconnect();
  } catch (err) {
    console.error("[ERROR] Błąd podczas importowania tłumaczeń:", err);
    mongoose.disconnect();
  }
}

importTranslations();
