import { initializeApp  } from "firebase/app";
import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjFidgSTdIXz8Zvdae3GqfQucFZOGQel8",
    authDomain: "ice-cream-abf0a.firebaseapp.com",
    projectId: "ice-cream-abf0a",
    storageBucket: "ice-cream-abf0a.appspot.com",
    messagingSenderId: "151453377845",
    appId: "1:151453377845:web:ce3bf96ac27457dab9d87c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const fs = firebase;

