import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import logoImg from '../../assets/logo.jpg';
import buildingImg from '../../assets/1.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      navigate('/home');
    }, 1500);
  };

  return (
    <LoginContainer>
      <motion.div
        className="login-box"
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
          Welcome to King Sukh Guest House - Simple - Unique - Friendly
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
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div 
              className="password-toggle" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#forgot">Forgot password?</a>
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
              'Login'
            )}
          </motion.button>
          
          <div className="register-link">
            <p>Don't have an account? <Link to="/register" className="register-btn">Register</Link></p>
          </div>
        </motion.form>
      </motion.div>
      
      <motion.div 
        className="login-decoration"
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
            Make Yourself At Home <br />In Our Guest House
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            Beside Barshal Water Tank, <br />Manpur, Barhanti, West Bengal 723156
          </motion.p>
        </div>
      </motion.div>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e6f0f0 100%);
  
  .login-box {
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
      top: 50%;
      transform: translateY(-50%);
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
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      color: #666;
    }
  }
  
  .remember-forgot {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    
    label {
      display: flex;
      align-items: center;
      color: #666;
      
      input {
        margin-right: 0.5rem;
      }
    }
    
    a {
      color: #2c8b8b;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
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
    
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    
    &:hover {
      background-color: #236e6e;
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
  
  .register-link {
    text-align: center;
    margin-top: 1.5rem;
    color: #666;
    
    a {
      color: #2c8b8b;
      text-decoration: none;
      font-weight: bold;
      
      &:hover {
        text-decoration: underline;
      }
    }
    
    .register-btn {
      color: #2c8b8b;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        color: #236e6e;
      }
    }
  }
  
  .login-decoration {
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
      padding: 0 1rem;
      
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
    .login-decoration {
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
    
    .login-box {
      order: 2;
      padding: 2rem 1rem;
      height: auto;
    }
    
    .login-decoration {
      order: 1;
      height: 30vh;
      min-height: 200px;
      
      .decoration-text {
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
    
    .remember-forgot {
      flex-direction: column;
      gap: 0.5rem;
      align-items: flex-start;
    }
  }
  
  @media (max-width: 480px) {
    .login-box {
      padding: 1.5rem 1rem;
    }
    
    .login-decoration {
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
    
    .welcome-text {
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }
    
    .input-group {
      margin-bottom: 1rem;
      
      input {
        padding: 12px 12px 12px 40px;
        font-size: 0.9rem;
      }
      
      .input-icon {
        left: 12px;
        font-size: 0.9rem;
      }
      
      .password-toggle {
        right: 12px;
        font-size: 0.9rem;
      }
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
    
    .login-box, .login-decoration {
      height: auto;
    }
  }
`;

export default Login; 