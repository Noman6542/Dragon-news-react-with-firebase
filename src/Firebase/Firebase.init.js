// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF-Vvl5GfuxcD4URNYcPQw-lkTgSZE_GU",
  authDomain: "dragon-news-adc56.firebaseapp.com",
  projectId: "dragon-news-adc56",
  storageBucket: "dragon-news-adc56.firebasestorage.app",
  messagingSenderId: "1077820432371",
  appId: "1:1077820432371:web:0b2995db5813e8261dbc86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);