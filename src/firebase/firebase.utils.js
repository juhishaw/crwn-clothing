import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCCzExHW8OmkPFjoKtuqqB0iN67InqWQD4",
  authDomain: "crwn-db-98c81.firebaseapp.com",
  databaseURL: "https://crwn-db-98c81.firebaseio.com",
  projectId: "crwn-db-98c81",
  storageBucket: "crwn-db-98c81.appspot.com",
  messagingSenderId: "19922050801",
  appId: "1:19922050801:web:7bcc03a2fc2ba2023e9350",
  measurementId: "G-S32NED04MT",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
