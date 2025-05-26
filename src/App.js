import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

// LOGIN KOMPONENT
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("Prøver login med:", email, password);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login fejl:", err.code, err.message);
      setError("Login mislykkedes: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Log ind</h2>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Adgangskode"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Log ind</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

// DASHBOARD KOMPONENT
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

// APP MED ROUTING
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