// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_YMPJs19_CJ6AeCfeGiA5T6Dmg5CxSNA",
  authDomain: "dwellz-a-realtor-clone-reactjs.firebaseapp.com",
  projectId: "dwellz-a-realtor-clone-reactjs",
  storageBucket: "dwellz-a-realtor-clone-reactjs.appspot.com",
  messagingSenderId: "815969074667",
  appId: "1:815969074667:web:7822db7688b3523eff6dae",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
