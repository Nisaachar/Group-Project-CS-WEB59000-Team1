import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [GPA, setGPA] = useState('');
  const [GRE, setGRE]= useState('');
  const [country, setCountry]= useState('');
  const [domain, setDomain]= useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: name,
      email: email,
      password: password,
      GPA: GPA,
      GRE: GRE,
      country: country,
      domain:domain,
      sop_progress: 0,
      visa_application_progress: 0,
      i_20_progress: 0,
      Admitted: 'None'
      
    }
    axios.post('https://web-dev-server-wm7w.onrender.com/users/add', user)
      .then(res => {
        console.log(res.data);
        setEmail('');
        setPassword('');
        setName('');
        setGPA('');
        setGRE('');
        setCountry('');
        setDomain('');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full name" />
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <input value={GPA} onChange={(e) => setGPA(e.target.value)} type="GPA" placeholder="4.0" id="GPA" name="GPA" />
        <input value={GRE} onChange={(e) => setGRE(e.target.value)} type="GRE" placeholder="325" id="GRE" name="GRE" />
        <input value={country} onChange={(e) => setCountry(e.target.value)} type="country" placeholder="USA" id="country" name="country" />
        <input value={domain} onChange={(e) => setDomain(e.target.value)} type="domain" placeholder="Computer Science" id="domain" name="domain" />
        <button type="submit">Register</button>
      </form>
      <Link to="/login">Already have an account? Login here.</Link>
    </div>
  )
}

export default Register;
