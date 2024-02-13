import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider  } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/router.jsx";
import { theme } from "./theme.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
