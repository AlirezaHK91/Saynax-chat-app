import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfW1YAgy1U7TjBday1KwvAnMT7JepXA8s",
  authDomain: "saynax-c7b61.firebaseapp.com",
  projectId: "saynax-c7b61",
  storageBucket: "saynax-c7b61.appspot.com",
  messagingSenderId: "304671109180",
  appId: "1:304671109180:web:162a595ffdf1af5c1f9339"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
