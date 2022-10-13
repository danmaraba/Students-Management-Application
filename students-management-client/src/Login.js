import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setStudent }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((student) => setStudent(student));
        navigate('/dashboard');
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 id="login">Login</h1>
        <label className="label" htmlFor="username">Username</label>
        <input
        className="input"
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="label" htmlFor="password">Password</label>
        <input
        className="input"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;