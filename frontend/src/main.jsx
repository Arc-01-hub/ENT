import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import keycloak from "./core/auth/keycloak";
import authProvider from "./core/auth/authProvider";

keycloak.init({
  onLoad: "login-required",
  checkLoginIframe: false
}).then((authenticated) => {
  console.log("AUTH:", authenticated);

  if (authenticated) {
    localStorage.setItem("token", keycloak.token);
    
    authProvider.setUser({
      username: keycloak.tokenParsed?.preferred_username,
      email: keycloak.tokenParsed?.email,
      roles: keycloak.tokenParsed?.realm_access?.roles,
    });

    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    keycloak.login();
  }
});