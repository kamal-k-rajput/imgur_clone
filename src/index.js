import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App.js";
import { InputTextProvider } from "./components/context/InputText";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InputTextProvider>
      <App />
    </InputTextProvider>
  </React.StrictMode>
);
