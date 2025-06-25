import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginIllustration from '../assets/login-illustration.png';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      toast.success('Login successful!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      setTimeout(() => {
        if (res.data.role === 'admin' || res.data.isAdmin) {
          navigate('/admin');
        } else {
          navigate('/home');
        }
      }, 2000);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed.');
      toast.error(err.response?.data?.message || 'Login failed.', {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="auth-split-bg">
      <ToastContainer />
      <div className="auth-split-box">
        {/* Left Side */}
        <div className="auth-split-left dark">
          <h2>Welcome back</h2>
          <p>Manage your shop efficiently with Shop.co.</p>
          <img
            src={loginIllustration}
            alt="Welcome"
            className="auth-illustration"
            style={{ width: '80%', margin: '32px auto 0 auto', display: 'block' }}
          />
        </div>
        {/* Right Side */}
        <div className="auth-split-right">
          <h3>Log in</h3>
          <form className="auth-form" onSubmit={handleLogin}>
            <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} required />
            <input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} required />
            <button type="submit">Login</button>
          </form>
          {message && <div className="auth-message">{message}</div>}
          <div className="auth-alt-action">
            Don't have an account? <Link to="/register">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
