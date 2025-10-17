import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Router, RouterProvider, Routes } from "react-router";
import router from "./Routes/Routes";






createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Data Mode */}
    <RouterProvider router={router} />
  </StrictMode>
);
