// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsAA28N4RWMp7GRBZhIejc_KMqb0xNSZ8",
  authDomain: "todo-challenge-ebd97.firebaseapp.com",
  projectId: "todo-challenge-ebd97",
  storageBucket: "todo-challenge-ebd97.appspot.com",
  messagingSenderId: "644724661444",
  appId: "1:644724661444:web:ca3db70a751c65ad9ebd91",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const todoDB = firebase.firestore();

export { todoDB };
