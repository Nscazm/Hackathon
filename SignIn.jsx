import React from 'react';
import './SignIn.css'; // Import the CSS file

// Icon placeholders (in a real app, you'd use a library like react-icons)
const EmailIcon = () => <span className="icon">📧</span>;
const LockIcon = () => <span className="icon">🔒</span>;
const GoogleIcon = () => <span className="google-icon">G</span>; // Simple 'G' for visual structure

const SignIn = () => {
  return (
    <div className="signin-container">
      {/* Left Pane (Blue) */}
      <div className="left-pane">
        <div className="logo-section">
          {/* Placeholder for the Insight Hub logo graphic */}
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
        <form>
          {/* Email Input */}
          <div className="input-group">
            <EmailIcon />
            <input type="email" placeholder="Email" aria-label="Email" />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <LockIcon />
            <input type="password" placeholder="Password" aria-label="Password" />
          </div>

          {/* Links Section */}
          <div className="links-group">
            <a href="#" className="link-text">Don't have an Account?</a>
            <a href="#" className="link-text">Forgot Password?</a>
          </div>

          {/* Log In Button */}
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
