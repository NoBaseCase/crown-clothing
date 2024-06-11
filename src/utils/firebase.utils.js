import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALHTELlRp3PJoLun2_aO_qkXXm9d40lYU",
  authDomain: "keypop-c1ee9.firebaseapp.com",
  projectId: "keypop-c1ee9",
  storageBucket: "keypop-c1ee9.appspot.com",
  messagingSenderId: "458288739202",
  appId: "1:458288739202:web:585ca8b8a9e12bebab959b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Google Authentication Provider
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  if (!userSnapshot.exists()) {
    // create and set the document
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("there was an error creating the user", error.mesage);
    }
  }

  // return back user document reference
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};
