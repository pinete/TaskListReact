// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_-hrGt_HoeuIZrdPcTS9Lh0sVTMbliTc",
  authDomain: "tasklist-firebase-66467.firebaseapp.com",
  projectId: "tasklist-firebase-66467",
  storageBucket: "tasklist-firebase-66467.appspot.com",
  messagingSenderId: "414107738964",
  appId: "1:414107738964:web:c8359b286791baeffa5ec1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Inicializar DB Firestore
export const db = getFirestore()