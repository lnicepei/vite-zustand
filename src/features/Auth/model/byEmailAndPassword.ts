import { FirebaseError } from "@firebase/util";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useGetAuth } from "../lib/useGetAuth";

const auth = useGetAuth();

export const logInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }
};