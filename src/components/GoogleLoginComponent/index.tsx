import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
  googleLogout,
} from "@react-oauth/google";
import { RootState } from "../../store/store";
import { setLoggedIn } from "../../slices/authSlice";
import "./style.scss";
import TokenManager from "../../hooks/TokenManager"; // Import TokenManager

const GoogleLoginComponent: React.FC<{ clientId: string }> = ({ clientId }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const user = useSelector((state: RootState) => state.auth.user);
  const [error, setError] = useState<string | null>(null);

  // Sprawdzanie tokena przy ładowaniu strony
  useEffect(() => {
    const storedToken = TokenManager.getToken();
    if (storedToken && !isLoggedIn) {
      const userData = TokenManager.verifyToken(storedToken) as {
        name?: string;
        email?: string;
      };
      if (userData) {
        // Token ważny, aktualizujemy stan Redux
        dispatch(
          setLoggedIn({
            isLoggedIn: true,
            user: userData.name ?? userData.email ?? null,
          }),
        );
      } else {
        // Token nieważny, czyścimy dane
        TokenManager.removeToken();
        dispatch(setLoggedIn({ isLoggedIn: false, user: null }));
      }
    }
  }, [dispatch, isLoggedIn]);

  const handleLoginSuccess = (response: CredentialResponse) => {
    console.log("Login Success:", response);
    if (response.credential) {
      const token = response.credential;
      TokenManager.setToken(token); // Zapisujemy token w TokenManager
      const userData = TokenManager.verifyToken(token) as {
        name?: string;
        email?: string;
      };
      if (userData) {
        dispatch(
          setLoggedIn({
            isLoggedIn: true,
            user: userData.name ?? userData.email ?? null,
          }),
        );
        setError(null);
      } else {
        setError(t("TokenExpired"));
        dispatch(setLoggedIn({ isLoggedIn: false, user: null }));
      }
    }
  };

  const handleLoginFailure = () => {
    console.log("Login Failed");
    setError(t("Error"));
    dispatch(setLoggedIn({ isLoggedIn: false, user: null }));
  };

  const handleLogout = () => {
    googleLogout(); // Wyloguj użytkownika z Google
    TokenManager.removeToken(); // Usuń token z TokenManager
    dispatch(setLoggedIn({ isLoggedIn: false, user: null }));
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="google-login-container">
        {isLoggedIn ? (
          <div className="logged-in-info">
            <span className="user-info">{user}</span>
            <button type="button" onClick={handleLogout}>
              {t("Logout")}
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
          />
        )}
      </div>
      {error && <div className="error-message">{error}</div>}
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginComponent;
