import React from 'react';

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Saynax</span>
            <span className="title">Login</span>
            <form>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password' />
                <button>Signin</button>
            </form>
            <p>You dont have an account. Signup</p>
        </div>
    </div>
  )
}

export default Login;