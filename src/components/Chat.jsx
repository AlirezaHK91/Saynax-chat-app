import React from 'react'
import Video from '../assets/video.png'
import More from '../assets/more.png'
import Add from '../assets/add.png'

const Chat = () => {
  return (
    <div className='chat'>
        <div className='chatInfo'>
            <span>Sayna</span>
            <div className='chatIcons'>
                <img src={Video} alt="" />
                <img src={Add} alt="" />
                <img src={More} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Chat;