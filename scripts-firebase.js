import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCEaEVlQ-cZ5UR1_sVXy-bEUZpTWhARvY4",
  authDomain: "interfit-bc.firebaseapp.com",
  projectId: "interfit-bc",
  storageBucket: "interfit-bc.firebasestorage.app",
  messagingSenderId: "469488082598",
  appId: "1:469488082598:web:282e75e83a00429e635e67"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Firebase login logic here
