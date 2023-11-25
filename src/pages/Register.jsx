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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files;
    //Test if submit handler works
    console.log(e.target[0].value);

    try {
      const response = await createUserWithEmailAndPassword(auth,email,password);

      const storageRef = ref(storage, displayName);
      console.log("Display Name:", displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);
      console.log("Storage Ref:", storageRef);

      // Register three observers:
      uploadTask.on(
        (error) => {
          console.error("Upload error:", error);
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            console.log("Upload Task Snapshot Ref:", uploadTask.snapshot.ref);
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL, 
            });
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL
            });
          });
        }
      );

    } catch (err) {
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
