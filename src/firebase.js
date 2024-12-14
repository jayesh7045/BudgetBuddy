import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebas/auth"
import {getFirestore, doc, setdoc} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDq63zhZnQ3OjrMIwEUQFnssx54SwtYsLk",
  authDomain: "budgetbuddy-9e07f.firebaseapp.com",
  projectId: "budgetbuddy-9e07f",
  storageBucket: "budgetbuddy-9e07f.firebasestorage.app",
  messagingSenderId: "873092492063",
  appId: "1:873092492063:web:d5f015916dd4fce0d71e2a",
  measurementId: "G-H8DN6NJJPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const analytics = getAnalytics(app);
export {app, db, auth, provider, analytics, doc, setdoc}