import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useGetAuth } from "../lib/useGetAuth";

const auth = useGetAuth();

const provider = new GoogleAuthProvider();
export const logIn = async (
  setName: (name: string) => void,
  setToken: (name: string) => void
) => {
  try {
    const result = await signInWithPopup(auth, provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result)!;
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...

    setToken(token!);
    setName(user.displayName!);
    console.log(user, token);
  } catch (error: unknown) {
    console.log(error);
    // if (typeof error FirebaseError) {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    // }
    // // The email of the user's account used.
    // const email = error.customData.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // // ...
    // console.log(errorCode, errorMessage, email, credential);
  }
};