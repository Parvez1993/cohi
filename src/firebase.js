// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBC4kSOhRUOtQUJoN3lG6UcWkDVSoUSjLk",
  authDomain: "cahi-29652.firebaseapp.com",
  projectId: "cahi-29652",
  storageBucket: "cahi-29652.appspot.com",
  messagingSenderId: "896633424747",
  appId: "1:896633424747:web:e666d400d05aaf98be1a2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
