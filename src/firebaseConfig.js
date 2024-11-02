// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJHhiwhzlk06V6Ld6-CmvUpBol_hBbq5U",
  authDomain: "myapp-fb1a3.firebaseapp.com",
  projectId: "myapp-fb1a3",
  storageBucket: "myapp-fb1a3.firebasestorage.app",
  messagingSenderId: "373275088212",
  appId: "1:373275088212:web:2eda47ebef00464892a4c1",
  measurementId: "G-TMZJ2QKKBC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
