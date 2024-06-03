// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBt24YD1WdRvAZDesMU2wwdwyZLj687XE4",
  authDomain: "organic-product-b799b.firebaseapp.com",
  projectId: "organic-product-b799b",
  storageBucket: "organic-product-b799b.appspot.com",
  messagingSenderId: "1022405070758",
  appId: "1:1022405070758:web:83f26983a312ecd5b60967",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
