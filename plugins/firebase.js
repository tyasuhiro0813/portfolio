// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOTwdTzisMuF9k08FDlEJSYyDgP40RzEg",
  authDomain: "portfolio-f5e64.firebaseapp.com",
  projectId: "portfolio-f5e64",
  storageBucket: "portfolio-f5e64.appspot.com",
  messagingSenderId: "979476294638",
  appId: "1:979476294638:web:b27e0b35ba3e9354ea3cff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {
    db, auth
}