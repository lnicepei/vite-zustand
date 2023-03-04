import { Navigate, createBrowserRouter } from "react-router-dom";

import CountriesListPage from "./CountriesListPage";
import CountryPage from "./CountryPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import { LoginWithGoogle } from "./LoginPage/LoginWithGoogle";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="search" />,
  },
  {
    path: "login",
    element: <LoginWithGoogle />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "countries",
    element: <CountriesListPage />,
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