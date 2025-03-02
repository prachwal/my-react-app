import path from "path";
import { fileURLToPath } from "url";
import CssAnalyzer from "../src/utils/cssAnalyzer.js";

// Uzyskanie ścieżki do bieżącego pliku w środowisku ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcPath = path.resolve(__dirname, "../src");

const analyzer = new CssAnalyzer();
const duplicates = analyzer.analyze(srcPath);

console.log("Znalezione potencjalne kolizje klas CSS:");
console.log(JSON.stringify(duplicates, null, 2));

if (Object.keys(duplicates).length === 0) {
  console.log("Nie znaleziono kolizji klas CSS.");
} else {
  console.log(
    `Znaleziono ${
      Object.keys(duplicates).length
    } klas z potencjalnymi kolizjami.`,
  );

  // Sprawdzenie konkretnie dla nbp-table
  if (duplicates["nbp-table"]) {
    console.log(
      '\nUwaga! Klasa "nbp-table" występuje w następujących plikach:',
    );
    duplicates["nbp-table"].forEach((file) => console.log(` - ${file}`));
  }
}
