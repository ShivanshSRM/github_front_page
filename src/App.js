import { useState } from "react";
import "./styles.css";

export default function App() {
  const [page, setPage] = useState("login");

  return (
    <div className="container">
      {page === "login" ? (
        <Login setPage={setPage} />
      ) : (
        <Signup setPage={setPage} />
      )}
    </div>
  );
}

function Login({ setPage }) {
  return (
    <div className="box">
      <h2>Login</h2>
      <input type="text" placeholder="Username" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <button className="button">Login</button>
      <p onClick={() => setPage("signup")} className="link">
        New User? Register
      </p>
    </div>
  );
}

function Signup({ setPage }) {
  return (
    <div className="box">
      <h2>Register</h2>
      <input type="text" placeholder="Full Name" className="input" />
      <input type="email" placeholder="Email" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <button className="button">Sign Up</button>
      <p onClick={() => setPage("login")} className="link">
        Back to Login
      </p>
    </div>
  );
}

/* Add CSS Styles */
const styles = `
  body {
    background: linear-gradient(135deg, #1e1e2f, #2a2a3c);
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
  .container {
    width: 400px;
    background: #161b22;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  }
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .input {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: none;
    border-radius: 8px;
    background: #0d1117;
    color: white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.3s ease;
  }
  .input:focus {
    outline: none;
    box-shadow: 0px 0px 10px rgba(0, 255, 255, 0.5);
  }
  .button {
    width: 100%;
    padding: 12px;
    background: #238636;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    margin: 10px 0;
    transition: background 0.3s ease, transform 0.2s ease;
  }
  .button:hover {
    background: #2ea043;
    transform: translateY(-2px);
  }
  .link {
    cursor: pointer;
    color: #58a6ff;
    margin-top: 10px;
    transition: color 0.3s ease;
  }
  .link:hover {
    text-decoration: underline;
    color: #79b8ff;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
