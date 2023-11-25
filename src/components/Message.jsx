import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://th.bing.com/th/id/OIP.P1QJg7a9cNbKUBzdIxD14wHaLG?rs=1&pid=ImgDetMain" alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://th.bing.com/th/id/OIP.P1QJg7a9cNbKUBzdIxD14wHaLG?rs=1&pid=ImgDetMain" alt="" />
      </div>
    </div>
  );
};

export default Message;