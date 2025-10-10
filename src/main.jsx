import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Router, RouterProvider, Routes } from "react-router";
import router from "./Routes/Routes";
import { } from "react-router";





createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Declarative Mode */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/secret" element={<App />} />
      </Routes>
    </BrowserRouter> */}

    {/* Data Mode */}
    <RouterProvider router={router} />
  </StrictMode>
);
