import SignupFormPage from "./SignupFormPage";
import {
  SignInWithGooglePopUp,
  StoreUserDocumentsFromAuth,
  userData,
} from "../../../utils/firebase/firebase-utils";
import useSignIn from "../../../utils/store/signin-utils";

const SigninMainPage = () => {
  const setLoggedData = useSignIn((state) => state.setLoggedData);

  const GooglePopup = async () => {
    const user: userData = await SignInWithGooglePopUp();
    setLoggedData(true, user.user.displayName!);
    StoreUserDocumentsFromAuth(user);
  };

  return (
    <div className="signin-main-container">
      
      
      <SignupFormPage />
      <h3 className="half-or">or</h3>
      <div className="google-signin">
      <button onClick={GooglePopup}>Sign in with Google</button>
      </div>
    </div>
  );
};

export default SigninMainPage;
