import React from "react";
import Photo from "../assets/Photo.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { useState } from "react";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../firebase';

const Register = () => {
  const [err, setErr] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0]; // Only take the first file if multiple files are selected

    try {
      // Create a new user with email and password using Firebase authentication
      const response = await createUserWithEmailAndPassword(auth, email, password);

      // Set up storage reference with the user's display name
      const storageRef = ref(storage, displayName);

      // Upload user's photo to storage
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Wait for the upload to be complete
      await uploadTask;

      // Get the download URL after the upload is complete
      const downloadURL = await getDownloadURL(storageRef);

      // Update user profile with display name and photo URL
      await updateProfile(response.user, {
        displayName,
        photoURL: downloadURL,
      });

      // Save user data to Firestore
      await setDoc(doc(db, "users", response.user.uid), {
        uid: response.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
      });
    } catch (err) {
      // Handle and log any errors during registration
      console.error("Error during registration:", err);
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Saynax</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Photo} alt="" />
            <span>Add your photo</span>
          </label>
          <button>Signup</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You have an account. Login</p>
      </div>
    </div>
  );
};

export default Register;
