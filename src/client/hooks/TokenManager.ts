class TokenManager {
  private static readonly TOKEN_KEY = "googleToken";

  static getToken(): string | null {
    return localStorage.getItem(TokenManager.TOKEN_KEY);
  }

  static setToken(token: string): void {
    localStorage.setItem(TokenManager.TOKEN_KEY, token);
  }

  static removeToken(): void {
    localStorage.removeItem(TokenManager.TOKEN_KEY);
  }

  static verifyToken(
    token: string,
  ): { exp: number; [key: string]: unknown } | null {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const payload = JSON.parse(decodeURIComponent(escape(atob(base64)))); // Poprawione dekodowanie JWT
      const currentTime = Math.floor(Date.now() / 1000); // Aktualny czas w sekundach
      if (payload.exp < currentTime) {
        console.log("Token wygasł");
        return null;
      }
      return payload; // Zwraca dane z tokena, np. imię, email itp.
    } catch (error) {
      console.log("Błąd dekodowania tokena:", error);
      return null;
    }
  }
}

export default TokenManager;
