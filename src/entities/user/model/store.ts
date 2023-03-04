import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface UserSlice {
  name: string;
  token: string;
  setName: (newName: string) => void;
  setToken: (newName: string) => void;
}

export const withMiddlewares = (f: StateCreator<UserSlice>, name: string) =>
  devtools(persist(f, { name }));

export const useUserStore = create<UserSlice>()(
  withMiddlewares(
    (set) => ({
      name: "",
      token: "",
      setName: (newName: string) =>
        set((state) => ({
          ...state,
          name: newName,
        })),
      setToken: (newToken: string) =>
        set((state) => ({
          ...state,
          token: newToken,
        })),
    }),
    "user"
  )
);