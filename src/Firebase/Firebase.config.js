// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJPC5bf_75I9Op5ck1xtG18Rg2WJMcEHw",
  authDomain: "assignment10-mongodb.firebaseapp.com",
  projectId: "assignment10-mongodb",
  storageBucket: "assignment10-mongodb.appspot.com",
  messagingSenderId: "427248060605",
  appId: "1:427248060605:web:4374cd3cc9ecfc77eb8fd4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
