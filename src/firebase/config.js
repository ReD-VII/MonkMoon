// Importa as funções permitidas dos SDKs necessários
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHOF-oDhsNH3nFIltYXxLNGm-_uYKy4oE",
  authDomain: "miniblog-4cb13.firebaseapp.com",
  projectId: "miniblog-4cb13",
  storageBucket: "miniblog-4cb13.appspot.com",
  messagingSenderId: "463445264454",
  appId: "1:463445264454:web:a83fe41442e05c8fee6247"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app)

// Banco de dados firestore
export { db }
