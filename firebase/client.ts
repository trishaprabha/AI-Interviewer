// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6fGknl4B5YdAqvwUhuzvkiYStjuaHlkw",
  authDomain: "triya-6562a.firebaseapp.com",
  projectId: "triya-6562a",
  storageBucket: "triya-6562a.firebasestorage.app",
  messagingSenderId: "1058179462156",
  appId: "1:1058179462156:web:55dd6c42037af875ffaa29",
  measurementId: "G-HSBR7W5K0N"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export  const  auth = getAuth(app);
export const  db = getFirestore(app);
