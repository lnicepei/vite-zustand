import { ReactQueryDevtools } from "react-query/devtools";
import { RouterProvider } from "react-router-dom";

import { router } from "../pages";
import { withProviders } from "./providers";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </div>
  );
};

export default withProviders(App);