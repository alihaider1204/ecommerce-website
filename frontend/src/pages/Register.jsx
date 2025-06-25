import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginIllustration from '../assets/login-illustration.png';

const Register = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async e => {
    e.preventDefault();
    
    if (form.password !== form.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const { confirmPassword, ...submitData } = form;
      await axios.post('http://localhost:5000/api/auth/register', submitData);
      toast.success('Registration successful! Redirecting to login...', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Registration failed.');
      toast.error(err.response?.data?.message || 'Registration failed.', {
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
          <h2>Join Shop.co</h2>
          <p>Create your account and start shopping with us today.</p>
          <img
            src={loginIllustration}
            alt="Register"
            className="auth-illustration"
            style={{ width: '80%', margin: '32px auto 0 auto', display: 'block' }}
          />
        </div>
        {/* Right Side */}
        <div className="auth-split-right">
          <h3>Sign Up</h3>
          <form className="auth-form" onSubmit={handleRegister}>
            <input 
              name="firstName" 
              placeholder="First Name" 
              value={form.firstName} 
              onChange={handleChange} 
              required 
            />
            <input 
              name="lastName" 
              placeholder="Last Name" 
              value={form.lastName} 
              onChange={handleChange} 
              required 
            />
            <input 
              name="email" 
              placeholder="Email" 
              type="email" 
              value={form.email} 
              onChange={handleChange} 
              required 
            />
            <input 
              name="password" 
              placeholder="Password" 
              type="password" 
              value={form.password} 
              onChange={handleChange} 
              required 
            />
            <input 
              name="confirmPassword" 
              placeholder="Confirm Password" 
              type="password" 
              value={form.confirmPassword} 
              onChange={handleChange} 
              required 
            />
            <button type="submit">Sign Up</button>
          </form>
          {message && <div className="auth-message">{message}</div>}
          <div className="auth-alt-action">
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
