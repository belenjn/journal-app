import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./authSlice";

export const checkingAuthentication = (email, passowrd) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    console.log({result})
  };
};
