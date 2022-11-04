import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { TrainingProvider } from "./Context/TrainingContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-usdtec3d.us.auth0.com"
    clientId="kbFsGoN5hpQFQtXhQ33fFmoDRAroU4tt"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <TrainingProvider>
        <App />
      </TrainingProvider>
    </BrowserRouter>
  </Auth0Provider>
);
