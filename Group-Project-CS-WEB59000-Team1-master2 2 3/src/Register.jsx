// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios';


// function Register(props) {
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const [name, setName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(email);
//   }

//   return (
//     <div className="auth-form-container">
//       <h2>Register</h2>
//       <form className="register-form" onSubmit={handleSubmit}>
//         <label htmlFor="name">Full name</label>
//         <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
//         <label htmlFor="email">email</label>
//         <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//         <label htmlFor="password">password</label>
//         <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//         <button type="submit">Log In</button>
//       </form>
//       {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
//       <Link to="/Login">
//         <button>Already have an account? Login here.</button>
//         </Link>   
//     </div>
//   )
// }

// export default Register;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [GPA, setGPA] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: name,
      email: email,
      password: password,
      GPA: GPA,
      sop_progress: 0,
      visa_application_progress: 0,
      i_20_progress: 0,
      Admitted: 'None'
    }
    axios.post('http://localhost:8000/users/add', user)
      .then(res => {
        console.log(res.data);
        setEmail('');
        setPassword('');
        setName('');
        setGPA('');
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
        <button type="submit">Register</button>
      </form>
      <Link to="/login">Already have an account? Login here.</Link>
    </div>
  )
}

export default Register;
