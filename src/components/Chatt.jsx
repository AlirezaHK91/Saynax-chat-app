import React from 'react'
import Video from '../assets/video.png'
import More from '../assets/more.png'
import Add from '../assets/add.png'
import Messages from './Messages'
import Input from './Input'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/chatContext'
import { useContext } from "react";

const Chat = () => {
  const {data} = useContext(ChatContext);
  return (
    <div className='chat'>
        <div className='chatInfo'>
            <span>{data.user.displayName}</span>
            <div className='chatIcons'>
                <img src={Video} alt="" />
                <img src={Add} alt="" />
                <img src={More} alt="" />
            </div>
        </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat;