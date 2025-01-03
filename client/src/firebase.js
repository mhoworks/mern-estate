// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ee372.firebaseapp.com",
  projectId: "mern-estate-ee372",
  storageBucket: "mern-estate-ee372.firebasestorage.app",
  messagingSenderId: "674434979126",
  appId: "1:674434979126:web:24074c9fc902aa043acf97",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
