// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "todo-challenge-ebd97.firebaseapp.com",
  projectId: "todo-challenge-ebd97",
  storageBucket: "todo-challenge-ebd97.appspot.com",
  messagingSenderId: process.env.MESSAGING_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const todoDB = firebase.firestore();

export { todoDB };
