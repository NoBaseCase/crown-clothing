import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>Sign in With Google</button>
    </div>
  );
};

export default SignIn;
