// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export default app;

//Initialize Firebase Authentication and get a reference to the service account
export const auth = getAuth(app);
