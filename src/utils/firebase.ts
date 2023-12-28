// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1P_p4a6JYqV7ePjc7yTMOhrV1pOe_waU",
  authDomain: "next-blog-6df65.firebaseapp.com",
  projectId: "next-blog-6df65",
  storageBucket: "next-blog-6df65.appspot.com",
  messagingSenderId: "981001654077",
  appId: "1:981001654077:web:137c6d4c26909309237f54",
  measurementId: "G-BL0YKXEV98"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
