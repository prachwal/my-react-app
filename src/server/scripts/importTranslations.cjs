const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const axios = require("axios");
const Translation = require("../models/Translation.cjs");

const localesDir = path.join(__dirname, "../../../src/client/locales");
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/appdb";
const openAiApiKey = process.env.OPENAI_API_KEY;
const referenceLanguage = "en";

// UWAGA! Po każdej zmianie parametrów należy zaktualizować funkcję showHelp()
const args = process.argv.slice(2);
const DEBUG = args.includes("--debug");
const showHelpFlag = args.includes("--help");
const importOnly = args.includes("--import-only");
const verifyTranslations = args.includes("--verify");
const fixTranslations = args.includes("--fix");

if (showHelpFlag) {
  showHelp();
  process.exit(0);
}

function logDebug(...messages) {
  if (DEBUG) console.log("[DEBUG]", ...messages);
}

async function main() {
  try {
    logDebug("Uruchamianie skryptu...");
    await mongoose.connect(mongoUri);
    console.log("[INFO] Połączono z MongoDB");

    if (!fs.existsSync(localesDir)) {
      throw new Error(`Katalog ${localesDir} nie istnieje`);
    }

    await importTranslations(true);

    if (!importOnly) {
      await checkMissingTranslations();

      if (verifyTranslations || fixTranslations) {
        if (!openAiApiKey) {
          console.error(
            "[ERROR] Brak klucza API OpenAI. Weryfikacja i naprawa tłumaczeń niemożliwa.",
          );
          process.exit(1);
        }
        await verifyAndFixTranslations(fixTranslations);
      }
    }

    console.log("[INFO] Proces zakończony");
  } catch (err) {
    console.error("[ERROR]", err.message);
  } finally {
    await mongoose.disconnect();
  }
}

async function importTranslations(overwrite = false) {
  logDebug("Rozpoczynanie importu tłumaczeń...");

  const languages = fs.readdirSync(localesDir);

  for (const language of languages) {
    const languageDir = path.join(localesDir, language);
    const files = fs
      .readdirSync(languageDir)
      .filter((file) => file.endsWith(".json"));

    for (const file of files) {
      const filePath = path.join(languageDir, file);
      const translations = JSON.parse(fs.readFileSync(filePath, "utf8"));

      await Promise.all(
        Object.entries(translations).map(([key, value]) =>
          Translation.updateOne(
            { language, key },
            { value },
            { upsert: true, overwrite },
          ),
        ),
      );

      console.log(`[INFO] Importowane tłumaczenia: ${language} → ${file}`);
    }
  }
}

async function checkMissingTranslations() {
  logDebug("Sprawdzanie brakujących tłumaczeń...");
  const languages = fs.readdirSync(localesDir);
  const referenceTranslations = loadTranslations(referenceLanguage);

  for (const language of languages.filter(
    (lang) => lang !== referenceLanguage,
  )) {
    const translations = loadTranslations(language);
    const missingKeys = Object.keys(referenceTranslations).filter(
      (key) => !translations.hasOwnProperty(key),
    );

    console.log(
      missingKeys.length
        ? `[WARN] Brakujące tłumaczenia dla ${language}: ${missingKeys}`
        : `[INFO] Wszystkie tłumaczenia są obecne dla ${language}`,
    );
  }
}

async function verifyAndFixTranslations(fix = false) {
  console.log(
    `[INFO] Rozpoczynanie ${fix ? "naprawy" : "weryfikacji"} tłumaczeń...`,
  );
  logDebug("Pobieranie listy języków...");

  const languages = fs.readdirSync(localesDir);
  const referenceTranslations = loadTranslations(referenceLanguage);

  for (const language of languages.filter(
    (lang) => lang !== referenceLanguage,
  )) {
    logDebug(`Przetwarzanie języka: ${language}`);

    const translationsPath = path.join(
      localesDir,
      language,
      "translation.json",
    );
    const translations = loadTranslations(language);
    const problematicKeys = [];

    for (const [key, value] of Object.entries(translations)) {
      const isValid = await validateTranslation(
        referenceTranslations[key],
        value,
        language,
      );
      if (!isValid) {
        problematicKeys.push(key);
      }
    }

    if (problematicKeys.length > 0) {
      console.log(
        `[WARN] Podejrzane tłumaczenia dla ${language}:`,
        problematicKeys,
      );

      if (fix) {
        console.log(`[INFO] Naprawianie tłumaczeń dla ${language}...`);
        for (const key of problematicKeys) {
          translations[key] = await translateText(
            referenceTranslations[key],
            language,
          );
        }
        saveTranslations(translationsPath, translations);
        console.log(`[INFO] Poprawiono tłumaczenia dla ${language}`);
      }
    }
  }
}

async function validateTranslation(original, translation, targetLanguage) {
  try {
    logDebug(
      `Weryfikacja tłumaczenia dla ${targetLanguage}: ${original} -> ${translation}`,
    );

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a professional translator. Respond with 'VALID' if the translation is correct and 'INVALID' if it is incorrect. No other words.",
          },
          {
            role: "user",
            content: `Is this a correct translation of '${original}' into ${targetLanguage}? '${translation}'`,
          },
        ],
        max_tokens: 10,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openAiApiKey}`,
        },
      },
    );

    return response.data.choices[0].message.content.trim() === "VALID";
  } catch (error) {
    console.error(
      "[ERROR] Błąd weryfikacji tłumaczenia:",
      error.response?.data || error.message,
    );
    return true;
  }
}

async function translateText(text, targetLanguage) {
  try {
    logDebug(`Tłumaczenie tekstu na ${targetLanguage}: ${text}`);

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Return only the translation with no explanation, no quotes, and no formatting.",
          },
          { role: "user", content: `Translate to ${targetLanguage}: ${text}` },
        ],
        max_tokens: 60,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openAiApiKey}`,
        },
      },
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error(
      "[ERROR] Błąd tłumaczenia:",
      error.response?.data || error.message,
    );
    return text;
  }
}

function loadTranslations(language) {
  const filePath = path.join(localesDir, language, "translation.json");
  return fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, "utf8"))
    : {};
}

function saveTranslations(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

function showHelp() {
  console.log(`
Użycie: node script.js [opcje]

Opcje:
  --help          Wyświetla ten komunikat
  --import-only   Importuje tłumaczenia z plików do MongoDB, nadpisując dane
  --verify        Sprawdza poprawność tłumaczeń za pomocą OpenAI
  --fix           Sprawdza i naprawia błędne tłumaczenia przy użyciu OpenAI
  --debug         Wyświetla dodatkowe informacje diagnostyczne

UWAGA: Aby korzystać z OpenAI, ustaw zmienną środowiskową OPENAI_API_KEY.
`);
}

main();
