import { useState } from "react";

import {
  reateAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";

// create a state object responsible for housing form data
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  // create a state variable that copys the state default state object fields
  const [formFields, setFormFields] = useState(defaultFormFields);

  // destructure off the state object fields for readibility
  const { email, password } = formFields;

  // create a generic event handler that updates the state property based on the 'name' attribute of the event object.
  const handleChange = (event) => {
    // destructure event.target values
    const { name, value } = event.target;
    // uses destructured event.target fields as a key:value pair used for updating state object fields
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();
    await createUserDocumentFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formFields;

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log(error.code === "auth/invalid-credential");
      alert("Invalid login credentials");
    }
    resetFormFields();
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In with Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          required
          name="email"
          value={email}
        />
        <FormInput
          label="password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={"google"}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
