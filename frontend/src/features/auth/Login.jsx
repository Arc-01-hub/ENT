import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authProvider from '../../core/auth/authProvider';
import api from '../../core/api/axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/auth/login', { email, password });
      const { token, refreshToken, user } = response.data;

      authProvider.setToken(token);
      authProvider.setRefreshToken(refreshToken);
      authProvider.setUser(user);

      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-box">
          <div className="login-header">
            <h1 className="login-title">ENT System</h1>
            <p className="login-subtitle">Professional Learning Management</p>
          </div>

          {error && <div className="login-error">{error}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="login-footer">
            <a href="#forgot" className="forgot-password">Forgot Password?</a>
            <p className="signup-link">
              Don't have an account? <a href="#signup">Sign Up</a>
            </p>
          </div>

          <div className="login-features">
            <ul>
              <li><span className="check-icon">✓</span> Secure Authentication</li>
              <li><span className="check-icon">✓</span> User Management</li>
              <li><span className="check-icon">✓</span> Course Management</li>
            </ul>
          </div>
        </div>

        <div className="login-image">
          <div className="image-content">
            <h2>Welcome Back</h2>
            <p>Access your learning management system and track your progress</p>
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-icon">👥</span>
                <span>Team Collaboration</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <span>Analytics & Reports</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔒</span>
                <span>Enterprise Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
