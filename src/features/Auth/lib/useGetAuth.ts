import { getAuth } from "firebase/auth";

import { app } from "shared/config";

export const useGetAuth = () => {
  const auth = getAuth(app);

  return auth;
};