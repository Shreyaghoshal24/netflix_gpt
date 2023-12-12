// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKmRBSzH2ewjKKS4UE61P4kimfCVgKoPk",
  authDomain: "netflixgpt-b56c0.firebaseapp.com",
  projectId: "netflixgpt-b56c0",
  storageBucket: "netflixgpt-b56c0.appspot.com",
  messagingSenderId: "319368401876",
  appId: "1:319368401876:web:7a90c4297fade27df1bc41",
  measurementId: "G-BHP70P0L9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);