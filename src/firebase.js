// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC58bLIsJay3gfi_fEIX4eB-TDXauzswLY",
  authDomain: "dwellz-a-realtor-clone-react.firebaseapp.com",
  projectId: "dwellz-a-realtor-clone-react",
  storageBucket: "dwellz-a-realtor-clone-react.appspot.com",
  messagingSenderId: "302862585202",
  appId: "1:302862585202:web:28e18d32d7eb7daf94e1eb"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
