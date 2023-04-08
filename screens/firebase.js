// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5b8mD_uNIy7lcd57p7sP6RR5XVt7g7Y0",
  authDomain: "testproject-9d6d4.firebaseapp.com",
  projectId: "testproject-9d6d4",
  storageBucket: "testproject-9d6d4.appspot.com",
  messagingSenderId: "329887065582",
  appId: "1:329887065582:web:88fcb0f9d388ba9a0c9aff",
  measurementId: "G-JY5Q8HYKRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(getFirestore(app));
export const db = getFirestore(app);