// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnDWTcdGaP4Pdn6EQ1XMWnjHrIrbEXB0c",
  authDomain: "allegro-bd8c0.firebaseapp.com",
  projectId: "allegro-bd8c0",
  storageBucket: "allegro-bd8c0.appspot.com",
  messagingSenderId: "645266786554",
  appId: "1:645266786554:web:eadd3dbeb23cf0c152a143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
