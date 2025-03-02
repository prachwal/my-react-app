import fs from "fs";
import path from "path";
import { glob } from "glob";

/**
 * Narzędzie do analizy potencjalnych kolizji klas CSS w projekcie
 */
class CssAnalyzer {
  constructor() {
    this.classMap = {};
  }

  /**
   * Znajduje wszystkie pliki CSS/SCSS w projekcie
   * @param {string} rootDir - katalog korzeniowy projektu
   * @returns {Array} lista ścieżek do plików CSS/SCSS
   */
  findStyleFiles(rootDir) {
    return glob.sync(path.join(rootDir, "**/*.{css,scss,sass}"));
  }

  /**
   * Wydobywa nazwy klas z pliku CSS/SCSS
   * @param {string} filePath - ścieżka do pliku
   * @returns {Array} lista znalezionych klas CSS
   */
  extractClassNames(filePath) {
    const content = fs.readFileSync(filePath, "utf-8");
    const classRegex = /\.([\w-]+)(?![^{]*\})/g;
    const matches = [...content.matchAll(classRegex)];

    return matches.map((match) => match[1]);
  }

  /**
   * Analizuje pliki pod kątem powtarzających się klas
   * @param {string} rootDir - katalog korzeniowy projektu
   */
  analyze(rootDir) {
    const styleFiles = this.findStyleFiles(rootDir);

    styleFiles.forEach((file) => {
      const classes = this.extractClassNames(file);

      classes.forEach((className) => {
        if (!this.classMap[className]) {
          this.classMap[className] = [];
        }
        this.classMap[className].push(file);
      });
    });

    return this.findDuplicates();
  }

  /**
   * Znajduje klasy, które występują w wielu plikach
   * @returns {Object} mapa klas występujących w wielu miejscach
   */
  findDuplicates() {
    const duplicates = {};

    Object.entries(this.classMap).forEach(([className, files]) => {
      if (files.length > 1) {
        duplicates[className] = files;
      }
    });

    return duplicates;
  }
}

export default CssAnalyzer;

// Przykład użycia:
// import CssAnalyzer from './cssAnalyzer.js';
// const analyzer = new CssAnalyzer();
// const duplicates = analyzer.analyze('./src');
// console.log('Potencjalne kolizje klas CSS:', duplicates);
