import { createBrowserRouter, Navigate } from "react-router-dom";

import { Country } from "entities";

import CountriesPage from "./CountriesPage";
import ErrorPage from "./ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="search" />,
  },
  {
    path: "countries",
    element: <CountriesPage />,
  },
  {
    path: ":countryName",
    element: <Country />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
