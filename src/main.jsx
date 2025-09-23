import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { DataProvider } from "./context/DataProvider.jsx";
import { ConfirmProvider } from "./context/ConfirmProvider.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <DataProvider>
        <ThemeProvider theme={theme}>
          <ConfirmProvider>
            <App />
          </ConfirmProvider>
        </ThemeProvider>
      </DataProvider>
    </AuthProvider>
  </StrictMode>
);
