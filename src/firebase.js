// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMEkWzA__1qJjBCLJOjvOEaAcInsQQnKQ",
  authDomain: "podcast-react-app-e1c65.firebaseapp.com",
  projectId: "podcast-react-app-e1c65",
  storageBucket: "podcast-react-app-e1c65.appspot.com",
  messagingSenderId: "986453892829",
  appId: "1:986453892829:web:f8593bb82bf526dbc20534",
  measurementId: "G-E7HS23JF5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {auth, db, storage};