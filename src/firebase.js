// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmwSwWAMfIGPJCKO-ZCdUbfiGkigxs4hE",
  authDomain: "react-fb-auth-1fa22.firebaseapp.com",
  projectId: "react-fb-auth-1fa22",
  storageBucket: "react-fb-auth-1fa22.appspot.com",
  messagingSenderId: "1071638516960",
  appId: "1:1071638516960:web:7ec13a1c67a7153f59ac85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)