import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import SearchedProductContextProvider from "./components/SearchedProductContext.jsx";
("hi i am from  main js");
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SearchedProductContextProvider>
        <App />
      </SearchedProductContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
