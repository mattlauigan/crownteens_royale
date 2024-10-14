import { ChangeEvent, useState } from "react";
import StoreAuthUserWithEmailAndPassword, {
  SignUpFormData,
} from "../../../utils/firebase/firebase-utils";
import FormInput from "../../form-input/form-input.component";

const SignupFormPage = () => {
  const [SignUpData, setSignUpData] = useState<SignUpFormData>({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name);
    setSignUpData({ ...SignUpData!, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<SignUpFormData>) => {
    event.preventDefault();
    try {
      const { user } = await StoreAuthUserWithEmailAndPassword(SignUpData!);
      console.log(user);
      console.log(SignUpData.password);
    } catch (error) {
      console.log("There is an error creating the user", error);
    }
  };

  return (
    <div className="signup-form">
      <h1>Sign Up with you Email</h1>
      <form onSubmit={async () => handleSubmit}>
        <div className="form-card">
          <FormInput
            name="displayName"
            label="Name:"
            onChange={handleChange}
            value={SignUpData.displayName!}
          />
          <FormInput
            name="email"
            label="Email Address:"
            onChange={handleChange}
            value={SignUpData.email!}
          />
          <FormInput
            name="password"
            label="Password:"
            onChange={handleChange}
            value={SignUpData.password!}
            hidden
          />
          <FormInput
            name="confirmPassword"
            label="Confirm Password:"
            onChange={handleChange}
            value={SignUpData.confirmPassword!}
            hidden
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupFormPage;
