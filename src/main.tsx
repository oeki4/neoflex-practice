import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/app/App.tsx";
import "@/shared/assets/styles/global.css";
import "@/shared/assets/styles/fonts.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
