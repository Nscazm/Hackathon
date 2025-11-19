import React, { useState } from 'react';
import './SignIn.css';

// Using a standard modern icon look (you'd use an actual icon library like react-icons in production)
const UserIcon = () => <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"/></svg>;
const LockIcon = () => <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4m-4-8h4v6H8v-6m-4 8a1 1 0 0 0 1-1V9a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v7a1 1 0 0 0 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2z"/></svg>;
const GoogleIcon = () => <svg className="google-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.72 1.25 9.21 3.51l6.19-6.19C34.02 3.19 29.07 1 24 1 15.6 1 8.2 5.07 3.86 11.66l7.85 6.09C12.83 13.9 17.9 9.5 24 9.5z"/><path fill="#4285F4" d="M46.7 24.38c0-1.54-.14-3.02-.38-4.43H24v8.52h12.55c-.53 2.92-2.24 5.4-4.73 7.15l7.73 6c4.5-4.14 7.12-10.23 7.12-17.24z"/><path fill="#FBBC05" d="M11.71 30.34c-1.12-.34-2.17-.6-3.14-.6s-2.02.26-3.14.6l-7.85-6.09C5.86 17.51 11.83 13.5 19 13.5v8c-2.73 0-5.17 1.15-6.83 3.02l-7.73 6z"/><path fill="#34A853" d="M24 47c6.26 0 11.64-2.12 15.52-5.74l-7.73-6c-2.49 1.75-4.2 4.23-4.73 7.15H24c-3.1 0-6.1-1.15-8.48-3.32l-7.85 6.09C15.8 41.93 24 47 24 47z"/></svg>;


const SignIn = () => {
  // 1. State for managing user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 2. Simple form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to an API
    console.log('Attempting to sign in...');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    alert(`Attempting Login for: ${email}`);
  };

  return (
    <div className="signin-container">
      {/* Left Pane (Blue) */}
      <div className="left-pane">
        <div className="logo-section">
          {/* Logo Graphic Structure */}
          <div className="logo-icon-placeholder">
            <div className="person-icon-1"></div>
            <div className="person-icon-2"></div>
            <div className="speech-bubble"></div>
          </div>
          <h1>Insight Hub</h1>
        </div>
        <p className="description">
          A platform for students and teachers to <span className="highlight-1">communicate</span>, <span className="highlight-2">share</span>, and <span className="highlight-3">find the support</span> they need.
        </p>
      </div>

      {/* Right Pane (White) */}
      <div className="right-pane">
        <h2>Sign-in with your account!</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input with State Handling */}
          <div className="input-group">
            <UserIcon />
            <input 
              type="email" 
              placeholder="Email" 
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Capture input
              required 
            />
          </div>

          {/* Password Input with State Handling */}
          <div className="input-group">
            <LockIcon />
            <input 
              type="password" 
              placeholder="Password" 
              aria-label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Capture input
              required
            />
          </div>

          {/* Links Section */}
          <div className="links-group">
            <a href="#" className="link-text no-account">Don't have an Account?</a>
            <a href="#" className="link-text forgot-password">Forgot Password?</a>
          </div>

          {/* Log In Button (submit) */}
          <button type="submit" className="login-button">
            Log In
          </button>

          {/* Sign in with Google Button */}
          <button type="button" className="google-button">
            <GoogleIcon />
            <span>Sign in with Google</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
