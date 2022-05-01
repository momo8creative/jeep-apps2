import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";
import KmProvider from "./contexts/KmContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <KmProvider>
        <App />
      </KmProvider>
    </BrowserRouter>
  </React.StrictMode>
);
