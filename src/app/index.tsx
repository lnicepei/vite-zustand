import { ReactQueryDevtools } from "react-query/devtools";
import { RouterProvider } from "react-router-dom";

import { router } from "../pages";
import { withProviders } from "./providers";
import "./styles/index.scss";

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </div>
  );
};

export default withProviders(App);