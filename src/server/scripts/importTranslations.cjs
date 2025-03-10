const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const axios = require("axios");
const chalk = require("chalk");

let Translation;
try {
  Translation = require("../models/Translation.cjs");
} catch (error) {
  console.error(
    chalk.red("[ERROR] Nie udało się zaimportować modelu Translation:"),
    chalk.white.bgBlack(error.message),
  );
  process.exit(1);
}

const localesDir = path.join(__dirname, "../../../src/client/locales");
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/appdb";
const openAiApiKey = process.env.OPENAI_API_KEY;
const referenceLanguage = "en";

const configPath = process.argv[2] || "./config.json";
let config = {
  model: "gpt-3.5-turbo",
  maxTokens: 60,
  apiUrl: "https://api.openai.com/v1/chat/completions",
};
if (fs.existsSync(configPath)) {
  try {
    config = JSON.parse(fs.readFileSync(configPath, "utf8"));
    console.log(
      chalk.green("[INFO] Wczytano konfigurację z pliku:"),
      chalk.white.bgBlack(configPath),
    );
  } catch (error) {
    console.error(
      chalk.red("[ERROR] Błąd przy wczytywaniu konfiguracji:"),
      chalk.white.bgBlack(error.message),
    );
  }
}

const args = process.argv.slice(2);
const DEBUG = args.includes("--debug");
const TRACE = args.includes("--trace");
const showHelpFlag = args.includes("--help");
const importOnly = args.includes("--import-only");
const verifyTranslations = args.includes("--verify");
const fixTranslations = args.includes("--fix");

const languagesArg = args.find((arg) => arg.startsWith("--languages="));
const selectedLanguages = languagesArg
  ? languagesArg
      .split("=")[1]
      .split(",")
      .map((lang) => lang.trim())
  : null;

const keyArg = args.find((arg) => arg.startsWith("--key="));
const selectedKey = keyArg ? keyArg.split("=")[1].trim() : null;

if (showHelpFlag) {
  showHelp();
  process.exit(0);
}

function logInfo(...messages) {
  const formattedMessages = messages.map((msg) =>
    typeof msg === "string" && msg.includes("'")
      ? chalk.white.bgBlack(msg)
      : msg,
  );
  console.log(chalk.green("[INFO]"), ...formattedMessages);
}

function logWarn(...messages) {
  const formattedMessages = messages.map((msg) =>
    typeof msg === "string" && msg.includes("'")
      ? chalk.white.bgBlack(msg)
      : msg,
  );
  console.log(chalk.yellow("[WARN]"), ...formattedMessages);
}

function logError(...messages) {
  const formattedMessages = messages.map((msg) =>
    typeof msg === "string" && msg.includes("'")
      ? chalk.white.bgBlack(msg)
      : msg,
  );
  console.error(chalk.red("[ERROR]"), ...formattedMessages);
}

function logDebug(...messages) {
  if (DEBUG || TRACE) {
    const formattedMessages = messages.map((msg) =>
      typeof msg === "string" && msg.includes("'")
        ? chalk.white.bgBlack(msg)
        : msg,
    );
    console.log(chalk.cyan("[DEBUG]"), ...formattedMessages);
  }
}

function logTrace(...messages) {
  if (TRACE) {
    const formattedMessages = messages.map((msg) =>
      typeof msg === "string" && msg.includes("'")
        ? chalk.white.bgBlack(msg)
        : msg,
    );
    console.log(chalk.magenta("[TRACE]"), ...formattedMessages);
  }
}

async function main() {
  try {
    logDebug("Uruchamianie skryptu...");
    await mongoose.connect(mongoUri);
    logInfo("Połączono z MongoDB");

    if (!fs.existsSync(localesDir)) {
      throw new Error(`Katalog ${localesDir} nie istnieje`);
    }

    await importTranslations(true);

    if (!importOnly) {
      await checkMissingTranslations();

      if (verifyTranslations || fixTranslations) {
        if (!openAiApiKey) {
          logError(
            "Brak klucza API OpenAI. Weryfikacja i naprawa tłumaczeń niemożliwa.",
          );
          process.exit(1);
        }
        await verifyAndFixTranslations(fixTranslations);
      }
    }

    logInfo("Proces zakończony");
  } catch (err) {
    logError(err.message);
  } finally {
    await mongoose.disconnect();
    logInfo("Rozłączono z MongoDB");
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

      logInfo(
        `Importowane tłumaczenia: ${chalk.white.bgBlack(
          language,
        )} → ${chalk.white.bgBlack(file)}`,
      );
    }
  }
}

async function checkMissingTranslations() {
  logDebug("Sprawdzanie brakujących tłumaczeń...");
  const allLanguages = fs.readdirSync(localesDir);
  const languagesToCheck = selectedLanguages
    ? allLanguages.filter(
        (lang) =>
          selectedLanguages.includes(lang) && lang !== referenceLanguage,
      )
    : allLanguages.filter((lang) => lang !== referenceLanguage);

  if (languagesToCheck.length === 0) {
    logWarn("Nie znaleziono podanych języków do sprawdzenia.");
    return;
  }

  const referenceTranslations = loadTranslations(referenceLanguage);

  for (const language of languagesToCheck) {
    const translations = loadTranslations(language);
    const missingKeys = Object.keys(referenceTranslations).filter(
      (key) => !translations.hasOwnProperty(key),
    );

    if (missingKeys.length) {
      logWarn(
        `Brakujące tłumaczenia dla ${chalk.white.bgBlack(language)}:`,
        missingKeys,
      );
    } else {
      logInfo(
        `Wszystkie tłumaczenia są obecne dla ${chalk.white.bgBlack(language)}`,
      );
    }
  }
}

async function verifyAndFixTranslations(fix = false) {
  logInfo(`Rozpoczynanie ${fix ? "naprawy" : "weryfikacji"} tłumaczeń...`);
  logDebug("Pobieranie listy języków...");

  const allLanguages = fs.readdirSync(localesDir);
  const languagesToProcess = selectedLanguages
    ? allLanguages.filter(
        (lang) =>
          selectedLanguages.includes(lang) && lang !== referenceLanguage,
      )
    : allLanguages.filter((lang) => lang !== referenceLanguage);

  if (languagesToProcess.length === 0) {
    logWarn("Nie znaleziono podanych języków do weryfikacji/naprawy.");
    return;
  }

  const referenceTranslations = loadTranslations(referenceLanguage);

  for (const language of languagesToProcess) {
    logDebug(`Przetwarzanie języka: ${chalk.white.bgBlack(language)}`);

    const translationsPath = path.join(
      localesDir,
      language,
      "translation.json",
    );
    const translations = loadTranslations(language);
    const problematicKeys = [];

    const keysToCheck = selectedKey
      ? [selectedKey].filter((key) => translations.hasOwnProperty(key))
      : Object.keys(translations);

    if (selectedKey && keysToCheck.length === 0) {
      logWarn(
        `Klucz '${chalk.white.bgBlack(
          selectedKey,
        )}' nie istnieje w tłumaczeniach dla ${chalk.white.bgBlack(language)}.`,
      );
      continue;
    }

    for (const key of keysToCheck) {
      logDebug(
        `Przetwarzanie klucza: ${chalk.white.bgBlack(
          key,
        )} w języku: ${chalk.white.bgBlack(language)}`,
      );
      const isValid = await validateTranslation(
        referenceTranslations[key],
        translations[key],
        language,
      );
      if (!isValid) {
        problematicKeys.push(key);
      }
    }

    if (problematicKeys.length > 0) {
      logWarn(
        `Podejrzane tłumaczenia dla ${chalk.white.bgBlack(language)}:`,
        problematicKeys,
      );

      if (fix) {
        logInfo(
          `Naprawianie tłumaczeń dla ${chalk.white.bgBlack(language)}...`,
        );
        for (const key of problematicKeys) {
          logDebug(
            `Naprawa klucza: ${chalk.white.bgBlack(
              key,
            )} w języku: ${chalk.white.bgBlack(language)}`,
          );
          translations[key] = await translateText(
            referenceTranslations[key],
            language,
          );
        }
        saveTranslations(translationsPath, translations);
        logInfo(`Poprawiono tłumaczenia dla ${chalk.white.bgBlack(language)}`);
      }
    } else {
      logInfo(
        `Brak problematycznych tłumaczeń dla ${chalk.white.bgBlack(language)}`,
      );
    }
  }
}

async function validateTranslation(original, translation, targetLanguage) {
  try {
    logDebug(
      `Weryfikacja tłumaczenia: klucz='${chalk.white.bgBlack(
        original,
      )}' -> '${chalk.white.bgBlack(
        translation,
      )}' dla języka: ${chalk.white.bgBlack(targetLanguage)}`,
    );

    const response = await apiRequest({
      model: config.model,
      prompt: `Verify if '${translation}' is a correct translation of '${original}' into the language with ISO code '${targetLanguage}' for pagination in a web application interface (e.g., "Previous" or "Next" buttons). Respond with "VALID" or "INVALID" only, without periods or additional text.`,
      maxTokens: 10,
    });

    logDebug(`Wynik walidacji: ${chalk.white.bgBlack(response)}`);
    return response === "VALID";
  } catch (error) {
    logError(
      "Błąd weryfikacji tłumaczenia:",
      chalk.white.bgBlack(error.message),
    );
    return false;
  }
}

async function translateText(text, targetLanguage) {
  try {
    logDebug(
      `Tłumaczenie tekstu: '${chalk.white.bgBlack(
        text,
      )}' na język: ${chalk.white.bgBlack(targetLanguage)}`,
    );

    const translatedText = await apiRequest({
      model: config.model,
      prompt: `Translate '${text}' into the language with ISO code '${targetLanguage}' for pagination in a web application interface (e.g., "Previous" as "Vorherige" or "Next" as "Nächste" in German). Provide only the translated text, no additional formatting or periods.`,
      maxTokens: config.maxTokens,
    });

    logDebug(`Przetłumaczony tekst: '${chalk.white.bgBlack(translatedText)}'`);
    return translatedText;
  } catch (error) {
    logError("Błąd tłumaczenia:", chalk.white.bgBlack(error.message));
    return text;
  }
}

async function apiRequest({ model, prompt, maxTokens }) {
  if (TRACE) {
    logTrace("Wysyłanie żądania API:");
    logTrace("Model:", chalk.white.bgBlack(model));
    logTrace("Prompt:", chalk.white.bgBlack(prompt));
    logTrace("Max tokens:", chalk.white.bgBlack(maxTokens));
  }

  try {
    const response = await axios.post(
      config.apiUrl,
      {
        model,
        messages: [
          {
            role: "system",
            content:
              "Return only the translation with no explanation, no quotes, and no formatting.",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: maxTokens,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openAiApiKey}`,
        },
      },
    );

    if (TRACE) {
      logTrace("Otrzymano odpowiedź API:");
      logTrace(chalk.white.bgBlack(JSON.stringify(response.data, null, 2)));
    }

    const content = response?.data?.choices?.[0]?.message?.content?.trim();
    if (!content) {
      throw new Error("Brak zawartości w odpowiedzi API");
    }

    return content;
  } catch (error) {
    logError(
      "Błąd zapytania API:",
      chalk.white.bgBlack(error.response?.data?.error || error.message),
    );
    throw error;
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
Użycie: node script.js [opcje] [ścieżka_do_pliku_konfiguracyjnego]

Opcje:
  ${chalk.green("--help")}                  Wyświetla ten komunikat
  ${chalk.green(
    "--import-only",
  )}           Importuje tłumaczenia z plików do MongoDB, nadpisując dane
  ${chalk.green(
    "--verify",
  )}                Sprawdza poprawność tłumaczeń za pomocą OpenAI
  ${chalk.green(
    "--fix",
  )}                   Sprawdza i naprawia błędne tłumaczenia przy użyciu OpenAI
  ${chalk.green(
    "--debug",
  )}                 Wyświetla informacje o przetwarzanych obiektach
  ${chalk.green(
    "--trace",
  )}                 Włącza szczegółowe śledzenie żądań i odpowiedzi API
  ${chalk.green(
    "--languages=lang1,lang2",
  )} Określa języki do sprawdzenia/naprawy (np. --languages=pl,fr)
  ${chalk.green(
    "--key=key",
  )}               Określa konkretny klucz tłumaczenia do weryfikacji (np. --key=hello)

UWAGA: Aby korzystać z OpenAI, ustaw zmienną środowiskową OPENAI_API_KEY.
`);
}

main();
