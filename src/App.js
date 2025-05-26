import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "manager" && password === "rusk123") {
      navigate("/dashboard");
    } else {
      setError("Forkert brugernavn eller adgangskode");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Log ind</h2>
      <input placeholder="Brugernavn" value={username} onChange={e => setUsername(e.target.value)} />
      <br />
      <input type="password" placeholder="Adgangskode" value={password} onChange={e => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Log ind</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Rusk IF - Spilleroversigt</h1>
      <ul>
        <li>Brian Campbell – Grade: 14.5 – QI: 16.885</li>
        <li>Patrick Rytter – Grade: 13.6 – QI: 9.437</li>
        <li>Simone Marzolla – Grade: 13.8 – QI: 13.191</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;