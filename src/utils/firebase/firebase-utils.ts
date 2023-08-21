import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
  User,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export type userData = {
  user: User;
};

type error = {
  message: error;
};

const firebaseConfig = {
  apiKey: "AIzaSyA396UJn9xkUZBCXvXUJJF9xe4u89JfFBg",
  authDomain: "crownteensroyale.firebaseapp.com",
  projectId: "crownteensroyale",
  storageBucket: "crownteensroyale.appspot.com",
  messagingSenderId: "739424560142",
  appId: "1:739424560142:web:e18c73b5ebb908b6ac085f",
};

const FireBaseApp = initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const SignInWithGooglePopUp = () => {
  return signInWithPopup(auth, GoogleProvider);
};

const db = getFirestore();

export const CreateUserDocumentsFromAuth = async (userAuth: userData) => {
  if (userAuth.user.uid) {
    const userDocRef = doc(db, "users", userAuth.user.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth.user;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
      } catch (error) {
        console.log("There are error Signing with google");
      }
    }
  }
};
