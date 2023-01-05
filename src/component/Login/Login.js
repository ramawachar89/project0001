import React, { useState } from 'react';
import style from './Login.module.css';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const userName = localStorage.getItem('email')
    ?  localStorage.getItem('email') : 'admin@admin.com'
    const userPassword = localStorage.getItem('password') ? 
    localStorage.getItem('password') : 'admin'

    const handleSubmit = (event) => {
        event.preventDefault();
        if(email === userName && password === userPassword )
        alert('login sucessful')
        // setEmail('')
        // setPassword('')
        // alert("welcome again")
    }

    return (
        <form onSubmit={handleSubmit}>
         <div className={style.Main}>
             <div className={style.main}>
          <label htmlFor="email" className='my-3' >Email
          </label>

            <input  type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <br />
            <label htmlFor="password" className='my-3'>Password</label>
            <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <br />
            <button className='btn btn-success px-10 rounded-pill mt-10 my-4' style={{width:'80%'}} type="submit">Login</button>
            
            </div>  
            </div>
        </form>
    )
}
export default Login
