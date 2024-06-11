import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up-form.styles.scss";
// create a state object responsible for housing form data
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  // create a state variable that copys the state default state object fields
  const [formFields, setFormFields] = useState(defaultFormFields);

  // destructure off the state object fields for readibility
  const { displayName, email, password, confirmPassword } = formFields;

  // create a generic event handler that updates the state property based on the 'name' attribute of the event object.
  const handleChange = (event) => {
    // destructure event.target values
    const { name, value } = event.target;
    // uses destructured event.target fields as a key:value pair used for updating state object fields
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword } = formFields;

    // confirm passwords match
    if (password !== confirmPassword) {
      alert("passwords do not match!");
      return;
    }

    try {
      const { user } = createAuthUserWithEmailAndPassword(email, password);
      const result = await createUserDocumentFromAuth(user, { displayName });
      console.log(result);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered a problem", error);
      }
    }

    resetFormFields();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  return (
    <div className="sign-up-container">
      <h2>Dont Have an Account?</h2>
      <span>Sign up with Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        ></FormInput>

        <FormInput
          label="email"
          type="email"
          onChange={handleChange}
          required
          name="email"
          value={email}
        ></FormInput>

        <FormInput
          label="password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></FormInput>

        <FormInput
          label="confirmPassword"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        ></FormInput>
        <Button buttonType="inverted" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
