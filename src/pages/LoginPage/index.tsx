import { useAuthState } from "react-firebase-hooks/auth";

import { logIn } from "shared/api";
import { auth } from "shared/api/Firebase";

const LoginPage = () => {
  const [stuff] = useAuthState(auth);

  return (
    <div>
      <button onClick={() => logIn()}>{stuff?.displayName}</button>
    </div>
  );
};

export default LoginPage;