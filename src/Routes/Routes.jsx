import React from "react";
import MainLayout from "../Layouts/MainLayout";
// import ErrorPage from "../Pages/ErrorPage";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import ProductCard from "../Components/ProductCard";
import ErrorPage from "../Pages/ErrorPage";





  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      hydrateFallbckElement: <p>Loading...</p>,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/apps",
          element: <Apps />,
        },
        {
          path: "/installation",
          element: <Installation />,
        },
        {
          path: "/appDetails/:id",
          element: <AppDetails />,
        },
        {
          path: "/productCard",
          Component: ProductCard,
        },
        // {
        //   path: "/notfoundApp",
        //   element: <NotFoundApp/>
        // },
      ],
    },

    {
      path: "*",
      element: <ErrorPage />,
    },
    // {
    //   path: "*",
    //   element: <NotFoundApp />,
    // },
  ]);

export default router;
