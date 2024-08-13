// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-47915.firebaseapp.com",
  projectId: "mern-blog-47915",
  storageBucket: "mern-blog-47915.appspot.com",
  messagingSenderId: "944777862621",
  appId: "1:944777862621:web:ccb6351436e1f7368faa34"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);