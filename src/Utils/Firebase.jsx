// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ93C1aXN56P2lfcuTqrB5o25NGxCBYdg",
  authDomain: "netflixgpt-ammar.firebaseapp.com",
  projectId: "netflixgpt-ammar",
  storageBucket: "netflixgpt-ammar.firebasestorage.app",
  messagingSenderId: "588152432940",
  appId: "1:588152432940:web:1d86b3382111f0a2b6a489",
  measurementId: "G-R94R0MTLLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();