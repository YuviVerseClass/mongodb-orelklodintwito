// src/pages/Signup.jsx
import { useState } from "react";

function Signup({ setShowSignup, setIsLoggedIn }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (name.length < 3) return setError("Name must be at least 3 characters.");
    if (!email.includes("@")) return setError("Enter a valid email.");
    if (password.length < 4) return setError("Password must be at least 4 characters.");

    setIsLoggedIn(true);
  };

  return (
    <div className="auth-container">
      <h1>Create Your Account</h1>
      <form className="auth-form" onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <button type="submit">Create Account</button>
      </form>

      <p>
        Already have an account?{" "}
        <span className="auth-link" onClick={() => setShowSignup(false)}>
          Log In
        </span>
      </p>
    </div>
  );
}

export default Signup;
