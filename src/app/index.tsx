import { router } from "pages";

import { RouterProvider } from "react-router-dom";

import { withProviders } from "./providers";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default withProviders(App);
