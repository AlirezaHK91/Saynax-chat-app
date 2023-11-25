import React from 'react'
import Attach from '../assets/attach.png'
import Image from '../assets/image.png'


const Input = () => {
  return (
    <div className='input'>
        <input type="text" placeholder='Text...' />
        <div className='send'>
            <img src={Attach} alt="" />
            <input type="file" style={{display: 'none'}} id='file' />
            <label htmlFor="file">
                <img src={Image} alt="" />
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Input;