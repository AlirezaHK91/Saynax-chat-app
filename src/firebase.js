
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzpnj6LzZ1T4a8igMI1x9gQwlgsxsjiDE",
    authDomain: "saynax-chat.firebaseapp.com",
    projectId: "saynax-chat",
    storageBucket: "saynax-chat.appspot.com",
    messagingSenderId: "23686932930",
    appId: "1:23686932930:web:818811d592d9c0cb548e5b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();