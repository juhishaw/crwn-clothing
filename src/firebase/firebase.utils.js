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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

//prompt --> always open select google account popup
provider.setCustomParameters({ prompt: "select_account" });

// SignInWithPopup takes provider as a parameter and provider is associated with 
// google auth provider, so google popup will come up
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
