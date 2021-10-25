import firebase from 'firebase'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDlzvVrHC72MunwG3q62DPGJCqVGzaniJM",
  authDomain: "trove-io.firebaseapp.com",
  projectId: "trove-io",
  storageBucket: "trove-io.appspot.com",
  messagingSenderId: "389350025072",
  appId: "1:389350025072:web:fc4ea84c549d5cc5c0d1b5",
  measurementId: "G-S0BXMXJ39L",
};

const app = initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
