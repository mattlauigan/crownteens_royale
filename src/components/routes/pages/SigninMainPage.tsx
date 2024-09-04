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
    <div>
      <h3>Sign in Page</h3>
      <button onClick={GooglePopup}>Sign in with Google</button>
      <SignupFormPage />
    </div>
  );
};

export default SigninMainPage;
