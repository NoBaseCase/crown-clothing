import { signInWithGooglePopUp } from "../../utils/firebase.utils";
const SignIn = () => {

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp()
    console.log(response)
  }
  return (
    <div>
      <button onClick={logGoogleUser}>Sign in With Google</button>
    </div>
  );
};

export default SignIn;
