import React, { useState } from 'react';


const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setName('')
    setEmail('')
    setPassword('')
    alert("Registration completed")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <br />
      <button Onclick={handleSubmit} type="submit">Create Account</button>
    </form>
  );
};

export default Register;
