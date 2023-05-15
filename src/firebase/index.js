// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration (produccion)
const firebaseConfig = {
  apiKey: "AIzaSyA_-hrGt_HoeuIZrdPcTS9Lh0sVTMbliTc",
  authDomain: "tasklist-firebase-66467.firebaseapp.com",
  projectId: "tasklist-firebase-66467",
  storageBucket: "tasklist-firebase-66467.appspot.com",
  messagingSenderId: "414107738964",
  appId: "1:414107738964:web:c8359b286791baeffa5ec1"
};
// Your web app's Firebase configuration (desarrollo o test)
const developmentFirebaseConfig = {
  apiKey: "AIzaSyAVw3wIHFmpnsEyCiiwK6jMD-3-8XszlAQ",
  authDomain: "dev-tasklist-firebase.firebaseapp.com",
  projectId: "dev-tasklist-firebase",
  storageBucket: "dev-tasklist-firebase.appspot.com",
  messagingSenderId: "223955171929",
  appId: "1:223955171929:web:0dc2f8b8035a9e976f0f48"
};

// Initialize Firebase
// Si estamos en desarrollo o en test debe utilizae la configuracion 'developmentFirebaseConfig'
// Si estamos en produccion debe utilizar 'firebaseConfig'
let app;
if (process.env.NODE_ENV === 'production') {
  app = initializeApp(firebaseConfig);
} else {
  app = initializeApp(developmentFirebaseConfig);
}
// Inicializar DB Firestore
const db = getFirestore()

export { 
  app, 
  db 
}
