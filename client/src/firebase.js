// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lamlam-estate.firebaseapp.com",
  projectId: "lamlam-estate",
  storageBucket: "lamlam-estate.appspot.com",
  messagingSenderId: "584859263087",
  appId: "1:584859263087:web:3bbfcfe084ba67ba8f2d9a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
