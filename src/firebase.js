// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIkUADPFKXDvI_O03zYzBh4xMggOojygI",
  authDomain: "movie-reviewer-bd3b4.firebaseapp.com",
  databaseURL: "https://movie-reviewer-bd3b4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "movie-reviewer-bd3b4",
  storageBucket: "movie-reviewer-bd3b4.appspot.com",
  messagingSenderId: "785095003004",
  appId: "1:785095003004:web:a7e6a375644f2d590772f9",
  measurementId: "G-VG6MM891KN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);


export default app;