import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import store from "./redux/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </>
);
