import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { init } from "@emailjs/browser";
import { EMAILJS_CONFIG } from "./config/emailjs";

// Initialize EmailJS
init(EMAILJS_CONFIG.PUBLIC_KEY);

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
