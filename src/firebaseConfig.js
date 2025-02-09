// src/firebaseConfig.js

// Import the necessary Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyABxfPvibUSW9xrEBUNHWyWjfgINiqQwKM",
  authDomain: "appliances-3ec31.firebaseapp.com",
  projectId: "appliances-3ec31",
  storageBucket: "appliances-3ec31.appspot.com", // Corrected storage bucket URL
  messagingSenderId: "144768930000",
  appId: "1:144768930000:web:cbcdfb365b07e9e7ac4ed5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export the Firestore database and app for use in other files
export { db };
export default app;