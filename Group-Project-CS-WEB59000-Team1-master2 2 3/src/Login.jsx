import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './assets/login.css';
import loginVideo from './assets/loginNewBg.mp4';

function Login(props) {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://web-dev-server-wm7w.onrender.com/api/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid username or password");
        }
        return response.json();
      })
      .then((data) => {
        const user = data.find((user) => user.username === username);
        if (!user || user.password !== password) {
          throw new Error("Invalid username or password");
        }
        console.log(user);
        // navigate to home page
        navigate("/Home");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div className="login-wrapper">
            <video loop autoPlay muted className="video-bg2" preload="auto" src={loginVideo} style={{ }}></video>

    <div className="login-container">
      <div className="auth-form-container">
        <h2 className="form-title">Login</h2>
        {error && <div className="error">{error}</div>}
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username" className="form-label">Username</label>
          <input
            value={username}
            onChange={(e) => setEmail(e.target.value)}
            type="username"
            placeholder="username"
            id="username"
            name="username"
            className="form-input"
          />
          <label htmlFor="password" className="form-label">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
            className="form-input"
          />
          <button type="button" onClick={handleSubmit} className="form-button">Log In</button>

        </form>
        <Link to="/Register" className="register-link">
          Don't have an account? Register here.
        </Link>
      </div>
    </div>
    </div>

  );
}

export default Login;

