import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "mini-message-board-6d24a.firebaseapp.com",
  projectId: "mini-message-board-6d24a",
  storageBucket: "mini-message-board-6d24a.appspot.com",
  messagingSenderId: "585362996952",
  appId: "1:585362996952:web:1bacfd4265a4a6738da1ad",
  measurementId: "G-VQ5XX7KQMN",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);