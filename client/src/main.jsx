import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { TrainingProvider } from "./Context/TrainingContext";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import axios from "axios";

const REACT_APP_API = import.meta.env.VITE_REACT_APP_API;
console.log(REACT_APP_API);
axios.defaults.baseURL = REACT_APP_API || "http://localhost:3001";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-usdtec3d.us.auth0.com"
    clientId="kbFsGoN5hpQFQtXhQ33fFmoDRAroU4tt"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <Provider store={store}>
        <TrainingProvider>
          <App />
        </TrainingProvider>
      </Provider>
    </BrowserRouter>
  </Auth0Provider>
);
