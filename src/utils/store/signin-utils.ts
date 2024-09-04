import { create } from "zustand";

type LoggedInType = {
  isLoggedIn: boolean;
  userDisplayName: string;

  setLoggedData: (isLog: boolean, username: string) => void;
};

const useSignIn = create<LoggedInType>((set) => ({
  isLoggedIn: false,
  userDisplayName: "",

  setLoggedData: (isLog, username) =>
    set({ isLoggedIn: isLog, userDisplayName: username }),
}));

export default useSignIn;
