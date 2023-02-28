import { Navigate, createBrowserRouter } from "react-router-dom";

import CountriesPage from "./CountriesListPage";
import CountryPage from "./CountryPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="search" />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "countries",
    element: <CountriesPage />,
  },
  {
    path: ":countryName",
    element: <CountryPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);