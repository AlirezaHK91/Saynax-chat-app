import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">SaynaX</span>
      <div className="user">
        <img src="" alt="" />
        <span>Johnny</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
