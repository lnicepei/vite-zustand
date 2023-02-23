import { createBrowserRouter, Navigate } from "react-router-dom";

import { PrivateOutlet } from "features";

import MessagesPage from "./MessagesPage";
import LoginPage from "./LoginPage";
import ErrorPage from "./ErrorPage";

export const router = createBrowserRouter([
  {
    path: `/${"LOGIN"}`,
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Navigate to={"SEARCH"} />,
  },
  {
    path: "*",
    element: <PrivateOutlet />,
    children: [
      {
        path: `${"CLIENT"}/:${"CLIENT_ID"}`,
        element: <MessagesPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
