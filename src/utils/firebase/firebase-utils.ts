import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export type userData = {
  user: User;
};

export type SignUpFormData = {
  displayName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export type SignUpWithEmailData = {
  data: SignUpFormData;
};

const firebaseConfig = {
  apiKey: "AIzaSyA396UJn9xkUZBCXvXUJJF9xe4u89JfFBg",
  authDomain: "crownteensroyale.firebaseapp.com",
  projectId: "crownteensroyale",
  storageBucket: "crownteensroyale.appspot.com",
  messagingSenderId: "739424560142",
  appId: "1:739424560142:web:e18c73b5ebb908b6ac085f",
};

//**const FireBaseApp = initializeApp(firebaseConfig); *//
initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const SignInWithGooglePopUp = () => {
  return signInWithPopup(auth, GoogleProvider);
};

const db = getFirestore();

export const StoreUserDocumentsFromAuth = async (userAuth: userData) => {
  if (userAuth.user.uid) {
    const { uid, displayName, email } = userAuth.user;

    const userDocRef = doc(db, "users", uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
      } catch (error) {
        console.log("There an error signing with google");
      }
    }
  }
};

const StoreAuthUserWithEmailAndPassword = async (Auth: SignUpWithEmailData) => {
  const { email, password } = Auth.data;

  if (!email || !password) return false;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export default StoreAuthUserWithEmailAndPassword;
