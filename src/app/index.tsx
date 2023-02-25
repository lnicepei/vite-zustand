import { RouterProvider } from "react-router-dom";

import { router } from "pages";

import { withProviders } from "./providers";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default withProviders(App);
