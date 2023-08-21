import { resolve } from "path";
import {
  SignInWithGooglePopUp,
  CreateUserDocumentsFromAuth,
  userData,
} from "../../../utils/firebase/firebase-utils";

import { UserCredential, User } from "firebase/auth";

const SigninMainPage = () => {
  const GooglePopup = async () => {
    const user: userData = await SignInWithGooglePopUp();
    CreateUserDocumentsFromAuth(user);
  };

  return (
    <div>
      <h3>Sign in Page</h3>
      <button onClick={GooglePopup}>Sign in with Google</button>
    </div>
  );
};

export default SigninMainPage;
