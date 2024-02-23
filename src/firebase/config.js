// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAqHVi5XM1-h0sQdusLnRg_brhH2-T0RI",
  authDomain: "users-ba6a7.firebaseapp.com",
  projectId: "users-ba6a7",
  storageBucket: "users-ba6a7.appspot.com",
  messagingSenderId: "678304292926",
  appId: "1:678304292926:web:92d847eb1d6b398049316f",
  measurementId: "G-38RFQ2P2E6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
