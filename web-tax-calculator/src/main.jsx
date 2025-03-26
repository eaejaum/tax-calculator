import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Theme>
  </StrictMode>
);
