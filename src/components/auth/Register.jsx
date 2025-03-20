import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaEnvelope, FaPhone, FaArrowLeft } from 'react-icons/fa';
import logoImg from '../../assets/logo.jpg';
import buildingImg from '../../assets/1.jpg';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate registration
      setTimeout(() => {
        setIsLoading(false);
        navigate('/login');
      }, 1500);
    }
  };

  return (
    <RegisterContainer>
      <motion.div
        className="register-box"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="logo-container"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        >
          <img src={logoImg} alt="King Sukh Guest House Logo" />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            King Sukh
          </motion.h1>
        </motion.div>
        
        <motion.p
          className="welcome-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Create an account to book your stay
        </motion.p>
        
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
          </div>
          
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="input-group">
            <FaPhone className="input-icon" />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>
          
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>
          
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div 
              className="password-toggle" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>
          
          <div className="terms-checkbox">
            <label>
              <input type="checkbox" required /> I agree to the <a href="#terms">Terms and Conditions</a>
            </label>
          </div>
          
          <motion.button 
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
          >
            {isLoading ? (
              <motion.div 
                className="loading-spinner"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              'Register'
            )}
          </motion.button>
          
          <div className="login-link">
            <Link to="/login" className="back-btn">
              <FaArrowLeft /> Back to Login
            </Link>
          </div>
        </motion.form>
      </motion.div>
      
      <motion.div 
        className="register-decoration"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="decoration-text">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Join Our Family <br />Feel At Home
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            Get exclusive offers and updates<br />on your favorite accommodations
          </motion.p>
        </div>
      </motion.div>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e6f0f0 100%);
  
  .register-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    overflow-y: auto;
    width: 100%;
  }
  
  .logo-container {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: contain;
      background-color: white;
      padding: 2px;
      margin-right: 1rem;
    }
    
    h1 {
      font-family: 'Playfair Display', serif;
      color: #333;
      margin: 0;
      font-size: 2rem;
    }
  }
  
  .welcome-text {
    margin-bottom: 2rem;
    color: #666;
    text-align: center;
  }
  
  form {
    width: 100%;
    max-width: 400px;
  }
  
  .input-group {
    position: relative;
    margin-bottom: 1.5rem;
    
    .input-icon {
      position: absolute;
      left: 15px;
      top: 15px;
      color: #666;
    }
    
    input {
      width: 100%;
      padding: 15px 15px 15px 45px;
      border: 1px solid #ddd;
      border-radius: 30px;
      font-size: 1rem;
      transition: all 0.3s ease;
      
      &:focus {
        border-color: #2c8b8b;
        box-shadow: 0 0 0 2px rgba(44, 139, 139, 0.2);
        outline: none;
      }
    }
    
    .password-toggle {
      position: absolute;
      right: 15px;
      top: 15px;
      cursor: pointer;
      color: #666;
    }
    
    .error-message {
      color: #e74c3c;
      font-size: 0.8rem;
      margin-top: 0.5rem;
      display: block;
      padding-left: 15px;
    }
  }
  
  .terms-checkbox {
    margin-bottom: 1.5rem;
    
    label {
      display: flex;
      align-items: flex-start;
      color: #666;
      font-size: 0.9rem;
      
      input {
        margin-right: 0.5rem;
        margin-top: 0.2rem;
      }
      
      a {
        color: #2c8b8b;
        text-decoration: none;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  
  button {
    width: 100%;
    padding: 15px;
    background-color: #2c8b8b;
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      background-color: #236e6e;
    }
    
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    
    .loading-spinner {
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top-color: white;
      display: inline-block;
    }
  }
  
  .login-link {
    text-align: center;
    margin-top: 1.5rem;
    color: #666;
    
    .back-btn {
      color: #2c8b8b;
      text-decoration: none;
      font-weight: bold;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
  
  .register-decoration {
    flex: 1;
    background: url(${buildingImg}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
    }
    
    .decoration-text {
      position: relative;
      text-align: center;
      color: white;
      
      h2 {
        font-family: 'Playfair Display', serif;
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
      
      p {
        font-size: 1.2rem;
      }
    }
  }
  
  /* Responsive styles */
  @media (max-width: 992px) {
    .register-decoration {
      .decoration-text {
        h2 {
          font-size: 2rem;
        }
        
        p {
          font-size: 1rem;
        }
      }
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
    
    .register-box {
      order: 2;
      padding: 2rem 1rem;
      height: auto;
    }
    
    .register-decoration {
      order: 1;
      height: 30vh;
      min-height: 200px;
      
      .decoration-text {
        padding: 0 1rem;
        
        h2 {
          font-size: 1.8rem;
        }
        
        p {
          font-size: 0.9rem;
        }
      }
    }
    
    .logo-container {
      margin-top: 1rem;
      
      img {
        width: 50px;
        height: 50px;
      }
      
      h1 {
        font-size: 1.7rem;
      }
    }
    
    form {
      max-width: 100%;
    }
  }
  
  @media (max-width: 480px) {
    .register-box {
      padding: 1.5rem 1rem;
    }
    
    .register-decoration {
      height: 25vh;
      min-height: 150px;
      
      .decoration-text {
        h2 {
          font-size: 1.5rem;
        }
        
        p {
          font-size: 0.85rem;
        }
      }
    }
    
    .input-group {
      margin-bottom: 1rem;
      
      input {
        padding: 12px 12px 12px 40px;
        font-size: 0.9rem;
      }
      
      .input-icon {
        left: 12px;
        top: 12px;
        font-size: 0.9rem;
      }
      
      .password-toggle {
        right: 12px;
        top: 12px;
        font-size: 0.9rem;
      }
    }
    
    .terms-checkbox label {
      font-size: 0.8rem;
    }
    
    button {
      padding: 12px;
      font-size: 0.9rem;
    }
  }
  
  /* Fix for iOS height issue */
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
    min-height: -webkit-fill-available;
    
    .register-box, .register-decoration {
      height: auto;
    }
  }
`;

export default Register; 