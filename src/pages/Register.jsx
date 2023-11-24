import React from 'react';
import Photo from '../assets/Photo.png'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Saynax</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style = {{display: 'none'}} type="file" id='file' />
                <label htmlFor="file" >
                    <img src={Photo} alt="" />
                    <span>Add your photo</span>
                </label>
                <button>Signup</button>
            </form>
            <p>You have an account. Login</p>
        </div>
    </div>
  )
}

export default Register;