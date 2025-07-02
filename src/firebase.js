// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7SQIBGahhCRySpmWCoJcRlIkLbgov3FU",
  authDomain: "ponpes-jogo-negoro.firebaseapp.com",
  projectId: "ponpes-jogo-negoro",
  storageBucket: "ponpes-jogo-negoro.firebasestorage.app",
  messagingSenderId: "199187903491",
  appId: "1:199187903491:web:e6f9ce970697123c4cca36",
  measurementId: "G-NLFXLTR5RJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi layanan yang akan kita gunakan
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
