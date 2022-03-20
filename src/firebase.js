// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { onAuthStateChanged } from "firebase/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSyu1pTWt5zqXu0SNc8dzm2FDAZ5iturw",
  authDomain: "clone-39a90.firebaseapp.com",
  projectId: "clone-39a90",
  storageBucket: "clone-39a90.appspot.com",
  messagingSenderId: "602968331536",
  appId: "1:602968331536:web:f33af750e6da7424628195",
  measurementId: "G-Y7KCTXN3H8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
onAuthStateChanged(auth, (user) => {
  console.log(user);
});
const db = firebaseApp.firestore();

export { db, auth };
