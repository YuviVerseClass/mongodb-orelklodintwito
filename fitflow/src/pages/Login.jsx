// src/pages/Login.jsx
import { useState } from "react";

function Login({ setShowSignup, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.length < 3 || !email.includes("@")) {
      return setError("Please enter a valid email.");
    }

    if (password.length < 4) {
      return setError("Password must be at least 4 characters.");
    }

    setIsLoggedIn(true);
  };

  return (
    <div className="auth-container">
      <h1>Login to FitFlow</h1>
      <form className="auth-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-text">{error}</p>}

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?{" "}
        <span className="auth-link" onClick={() => setShowSignup(true)}>
          Sign Up
        </span>
      </p>
    </div>
  );
}

export default Login;
