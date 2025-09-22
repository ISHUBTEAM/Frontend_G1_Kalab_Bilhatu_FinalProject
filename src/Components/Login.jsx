import React, { useState, useEffect } from 'react';
import './Login.css';
import logo from '../assets/ishublogo.jpg';
import googleIcon from '../assets/google-icon.png';
import microsoftIcon from '../assets/microsoft-icon.png';

function Login({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [quote, setQuote] = useState("Your effort is paying off — keep going!");

  // Fetch a new quote every 4 seconds
      useEffect(() => {
      const fetchQuote = async () => {
        try {
          const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
          
          });
          const data = await res.json();
          if (data[0]?.quote && data[0]?.author) {
            setQuote(`"${data[0].quote}" — ${data[0].author}`);
          }
        } catch (err) {
          console.error("Failed to fetch the quote", err);
        }
      };
      fetchQuote();
      const interval = setInterval(fetchQuote, 4000);
      return () => clearInterval(interval);
    }, []);

  return (
    <div className="container">
      <div className="login-card">
        <img src={logo} alt="IS HUB logo" className="logo" />
        <h2>IS HUB Frontend</h2>
        <p className="quote">{quote}</p>
      </div>

      <div className="submit-form">
        <h1>Student Login</h1>
        <p>Sign in to access your account</p>

        <input type="email" placeholder="Email" />
        <input type={showPassword ? 'text' : 'password'} placeholder="Password" />

        <label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          Show password
        </label>
        <br />

        <button className="login" onClick={onLogin}>Log in</button>
        <br />
        <span className="or">or</span>
        <hr />

        <div className="buttons">
          <button className="google-login">
            <img src={googleIcon} alt="Google logo" className="googleicon" />
            Sign in with Google
          </button>

          <button className="microsoft-login">
            <img src={microsoftIcon} alt="Microsoft logo" className="microsofticon" />
            Sign in with Microsoft
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
