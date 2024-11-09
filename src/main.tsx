import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";


console.log("hi i am from  main js");
let container = document.getElementById("root");
createRoot(container as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
