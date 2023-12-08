import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setCahts] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setCahts(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);
  console.log(Object.entries(chats))
  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) => (
        <div className="userChat" key={chat[0]}>
          {chat[1]?.userInfo && (
            <>
              <img src={chat[1].userInfo.photoURL} alt="" />
              <div className="userChatInfo">
                <span>{chat[1].userInfo.displayName}</span>
                <p>{chat[1].userInfo.lastMessage?.text}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Chats;
