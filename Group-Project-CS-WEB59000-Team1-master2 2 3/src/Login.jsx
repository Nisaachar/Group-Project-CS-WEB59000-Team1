import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Link, withRouter } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

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
        const user = data.find((user) => user.username === email);
        if (!user || user.password !== password) {
          throw new Error("Invalid username or password");
        }
        console.log(user);
        // redirect to home page
        // <Link to="/Home" />;
//         window.location.href = "/Home";
//           props.history.push('/Home');
      history.push('/Home');
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="button" onClick={handleSubmit}>Log In</button>
      </form>
      {/* <Link to="/Home">Home</Link> */}
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
}

export default Login;
