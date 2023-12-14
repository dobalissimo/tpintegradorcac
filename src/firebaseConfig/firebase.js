// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjORJqkKaeEwGiA-uRffCc6U-2UfBDh8o",
  authDomain: "clase20cac.firebaseapp.com",
  projectId: "clase20cac",
  storageBucket: "clase20cac.appspot.com",
  messagingSenderId: "513320798282",
  appId: "1:513320798282:web:6659b24e32e924f917beb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)