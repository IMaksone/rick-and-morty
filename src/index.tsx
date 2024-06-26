import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import MyContextProvider from "./components/MyContextProvider";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </React.StrictMode>
);
