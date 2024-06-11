import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in With Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
