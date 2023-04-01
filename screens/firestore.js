import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7nNvXmc5w9o_q4ESiD91DbGdOcf3qy9Q",
  authDomain: "fir-auth-703bc.firebaseapp.com",
  projectId: "fir-auth-703bc",
  storageBucket: "fir-auth-703bc.appspot.com",
  messagingSenderId: "835804428947",
  appId: "1:835804428947:web:e81273a2077809473b2b66"
};

// Initialize Firebase
let app;
if(firebase.apps.length===0){
  app=firebase.initializeApp(firebaseConfig);
}else{
  app=firebase.app()
}

const firestore = getFirestore(app);

export {firestore};