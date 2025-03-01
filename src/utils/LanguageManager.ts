class LanguageManager {
  private static readonly LANGUAGE_KEY = "language";

  static getDefaultLanguage(): string {
    return localStorage.getItem(LanguageManager.LANGUAGE_KEY) || "en";
  }

  static setLanguage(language: string): void {
    localStorage.setItem(LanguageManager.LANGUAGE_KEY, language);
  }
}

export default LanguageManager;
