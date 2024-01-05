import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import CssBaseline from "@mui/material/CssBaseline";

import "./index.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./pages/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
