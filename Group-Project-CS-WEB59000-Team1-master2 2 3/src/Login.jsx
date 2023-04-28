// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Login(props) {
//   const [username, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   // const history = useHistory();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("https://web-dev-server-wm7w.onrender.com/api/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Invalid username or password");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const user = data.find((user) => user.username === username);
//         if (!user || user.password !== password) {
//           throw new Error("Invalid username or password");
//         }
//         console.log(user);
//         // redirect to home page
//         <Link to="/Home" />;
//         // window.location.href = "/Home";
//       })
//       .catch((error) => {
//         console.error(error);
//         setError(error.message);
//       });
//   };

//   return (
//     <div className="auth-form-container">
//       <h2>Login</h2>
//       {error && <div className="error">{error}</div>}
//       <form className="login-form" onSubmit={handleSubmit}>
//         <label htmlFor="username">username</label>
//         <input
//           value={username}
//           onChange={(e) => setEmail(e.target.value)}
//           type="username"
//           placeholder="username"
//           id="username"
//           name="username"
//         />
//         <label htmlFor="password">password</label>
//         <input
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           type="password"
//           placeholder="********"
//           id="password"
//           name="password"
//         />
//         <button type="button" onClick={handleSubmit}>Log In</button>
//         <Link to="/Home">
//         Home.
//         </Link>
//       </form>
//       {/* <Link to="/Home">Home</Link> */}
//       {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
//       <Link to="/Register">
//         Don't have an account? Register here.
//         </Link>
//     </div>
//   );
// }

// export default Login;


import { Link } from "react-router-dom";
import React, { useState } from "react";

function Login(props) {
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
        <label htmlFor="username">username</label>
        <input
          value={username}
          onChange={(e) => setEmail(e.target.value)}
          type="username"
          placeholder="username"
          id="username"
          name="username"
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
        <Link to="/Home">
          <button type="button" onClick={handleSubmit}>Log In</button>
        </Link>
      </form>
      <Link to="/Register">
        Don't have an account? Register here.
      </Link>
    </div>
  );
}

export default Login;
