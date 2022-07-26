import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/storage";
// import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBp1Q_e7OKPkpl-QjwSC7Mg6BawkK6q0ZA",
  authDomain: "library-users-855b7.firebaseapp.com",
  projectId: "library-users-855b7",
  storageBucket: "library-users-855b7.appspot.com",
  messagingSenderId: "404952896316",
  appId: "1:404952896316:web:952ce2376867f601fbc439",
  measurementId: "G-ZGTCQZ1JLX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
