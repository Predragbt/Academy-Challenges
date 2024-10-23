// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDojct4SRH40Hz2iWZhvYTD7M3Qu1YNm8",
  authDomain: "fitness-tracker-challeng-f375c.firebaseapp.com",
  projectId: "fitness-tracker-challeng-f375c",
  storageBucket: "fitness-tracker-challeng-f375c.appspot.com",
  messagingSenderId: "241899476048",
  appId: "1:241899476048:web:e3caa84312cc36279cad55",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
