import React, { useState } from 'react';


const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   localStorage.setItem('userName',JSON.stringify())
  //   setName('')
  //   setEmail('')
  //   setPassword('')
  //   alert("Registration completed")
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(name === ''){
      alert('Name is Required')
    }else if (email === ''){
      alert('Email is Required')
    }else if(password === ''){
      alert('Password is Required')
    }
    else{
      localStorage.setItem('name',name)
      localStorage.setItem('email',email)
      localStorage.setItem('password',password)
      alert('Register Sucees')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" email="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" password="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <br />
      <button Onclick={handleSubmit} type="submit">Create Account</button>
    </form>
  );
};

export default Register;
