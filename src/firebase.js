// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ56GMOCaq7eF33My3BZia1-qEotC0tRU",
  authDomain: "realtor-clone-react-f690b.firebaseapp.com",
  projectId: "realtor-clone-react-f690b",
  storageBucket: "realtor-clone-react-f690b.appspot.com",
  messagingSenderId: "223427157736",
  appId: "1:223427157736:web:aa21bb1b409cf1786d335d",
  measurementId: "G-2QWQ8RRRDB",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
