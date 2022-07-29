// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfw5eX-iTIMfOeLcqcj6O-YgzOAkMVegM",
  authDomain: "library-users-eeead.firebaseapp.com",
  projectId: "library-users-eeead",
  storageBucket: "library-users-eeead.appspot.com",
  messagingSenderId: "13713873965",
  appId: "1:13713873965:web:3a4a32722812300046aca4",
  measurementId: "G-GY7QFL9VTT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

export default app;