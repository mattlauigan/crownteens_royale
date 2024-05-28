import { ChangeEvent, useState } from "react";
import StoreAuthUserWithEmailAndPassword, {
  SignUpFormData,
} from "../../../utils/firebase/firebase-utils";
import FormInput from "../../form-input";

const SignupFormPage = () => {
  const [SignUpData, setSignUpData] = useState<SignUpFormData>({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpData({ ...SignUpData!, [name]: value });
    // console.log(name, "::", value);
  };

  const handleSubmit = async (event: React.FormEvent<SignUpFormData>) => {
    event.preventDefault();
    // const e = event.currentTarget;

    try {
      const { user } = await StoreAuthUserWithEmailAndPassword(SignUpData!);
      console.log(user);
      console.log(SignUpData.password);
    } catch (error) {
      console.log("There is an error creating the user", error);
    }

    // return true;
  };

  return (
    <div>
      <h1>Sign Up with you Email</h1>
      <form onSubmit={async () => handleSubmit}>
        <FormInput></FormInput>
        <div>
          <label htmlFor="displayName">Name:</label>
          <input
            required
            type="text"
            name="displayName"
            id="displayName"
            onChange={handleChange}
            value={SignUpData.displayName}
            minLength={3}
            maxLength={20}
            // style={{
            //   height: "30px",
            //   border: "1.5px solid black",
            //   borderRadius: "5px",
            //   padding: "10px",
            //   font: "Open Sans Condensed , sans-serif",
            //   fontSize: "13px",
            //   letterSpacing: "1px",
            // }}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={SignUpData.email}
            minLength={3}
            maxLength={50}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            required
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={SignUpData.password}
            minLength={8}
            maxLength={20}
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            // style={{
            //   width: "150px",
            //   padding: "10px 0 0 5px",
            //   display: "inline-block",
            //   textAlign: "left",
            // }}
          >
            Confirm Password:
          </label>
          <input
            required
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleChange}
            value={SignUpData.confirmPassword}
            minLength={8}
            maxLength={20}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupFormPage;
