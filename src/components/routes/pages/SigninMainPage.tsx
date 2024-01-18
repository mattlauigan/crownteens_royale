import SignupFormPage from "./SignupFormPage";
import {
  SignInWithGooglePopUp,
  StoreUserDocumentsFromAuth,
  userData,
} from "../../../utils/firebase/firebase-utils";

const SigninMainPage = () => {
  const GooglePopup = async () => {
    const user: userData = await SignInWithGooglePopUp();
    StoreUserDocumentsFromAuth(user);
  };

  return (
    <div>
      <h3>Sign in Page</h3>
      <button onClick={GooglePopup}>Sign in with Google</button>
      <SignupFormPage />
    </div>
  );
};

export default SigninMainPage;
