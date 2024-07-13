// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9ddW8-LHOnqVukMqT1BIdPCL4psleQ5M",
  authDomain: "the-woolen-rabbit.firebaseapp.com",
  projectId: "the-woolen-rabbit",
  storageBucket: "the-woolen-rabbit.appspot.com",
  messagingSenderId: "151287481120",
  appId: "1:151287481120:web:a5aceec09938ea2236cd45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { fireDB, auth, googleProvider };
