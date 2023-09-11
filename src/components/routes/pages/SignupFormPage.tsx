import { ChangeEvent, useState } from "react";
import StoreAuthUserWithEmailAndPassword, {
  SignUpWithEmailData,
  SignUpFormData,
} from "../../../utils/firebase/firebase-utils";

const SignupFormPage = ({
  displayName,
  email,
  password,
  confirmPassword,
}: SignUpFormData) => {
  const [SignUpData, setSignUpData] = useState<SignUpWithEmailData>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpData({ ...SignUpData!, [name]: value });
    // console.log(name, "::", value);
    console.log(name);
  };

  const handleSubmit = async (event: React.FormEvent<SignUpFormData>) => {
    event.preventDefault();
    const e = event.currentTarget;

    console.log(e.password);
    console.log(e.confirmPassword);
    if (e.password != e.confirmPassword) {
      return false;
    }

    const result = await StoreAuthUserWithEmailAndPassword(SignUpData!);
    console.log(result);
    // return true;
  };

  return (
    <div>
      <h1>Sign Up with you Email</h1>
      <form onSubmit={() => handleSubmit}>
        <div>
          <label htmlFor="displayName">Name</label>
          <input
            required
            type="text"
            name="displayName"
            id="displayName"
            onChange={handleChange}
            value={displayName}
          />
        </div>
        <div>
          <label htmlFor="displayName">Email Address</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="displayName">Password</label>
          <input
            required
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={password}
            minLength={8}
          />
        </div>
        <div>
          <label htmlFor="displayName">Confirm Password</label>
          <input
            required
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
            minLength={8}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupFormPage;
