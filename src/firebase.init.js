// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl4YJSrmSxVvLwbd4o2-sQzIotOcdPmwk",
  authDomain: "react-lawyer-2919b.firebaseapp.com",
  projectId: "react-lawyer-2919b",
  storageBucket: "react-lawyer-2919b.appspot.com",
  messagingSenderId: "966120597861",
  appId: "1:966120597861:web:81a4b3ad71d17a0a1d598c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;