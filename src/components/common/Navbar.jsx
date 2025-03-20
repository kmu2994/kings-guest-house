import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaUserCircle, FaCalendarAlt, FaCommentDots, FaBed, FaWifi, FaTv, FaSnowflake } from 'react-icons/fa';
import logoImg from '../../assets/logo.jpg';
import roomYellowImg from '../../assets/large.jpg';
import roomPinkImg from '../../assets/small.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleBookingModal = (e) => {
    e.preventDefault();
    setShowBookingModal(!showBookingModal);
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
        staggerDirection: 1
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      y: -50,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <NavbarContainer scrolled={isScrolled}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/home" className="logo">
            <motion.img 
              src={logoImg} 
              alt="King Sukh Logo"
              whileHover={{ rotate: 10 }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="logo-text"
            >
              <h1>Kingsukh</h1>
              <div className="subtitle">Guest House</div>
            </motion.div>
          </Link>

          <div className="nav-links-desktop">
            <motion.ul>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="/home">Home</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="/about">About</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="/rooms">Rooms</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="/services">Services</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="/gallery">Gallery</Link>
              </motion.li>
              <motion.li className="feedback-link" whileHover={{ scale: 1.1 }}>
                <Link to="/feedback">
                  <FaCommentDots className="feedback-icon" />
                  <span>Feedback</span>
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="/contact">Contact</Link>
              </motion.li>
            </motion.ul>
          </div>

          <div className="nav-buttons">
            <motion.a 
              href="#online-booking"
              className="online-booking-btn"
              onClick={toggleBookingModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCalendarAlt /> <span>ONLINE BOOKING</span>
            </motion.a>
            <motion.a 
              href="https://api.whatsapp.com/send?phone=919007062180"
              target="_blank"
              rel="noopener noreferrer"
              className="book-now-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BOOK NOW
            </motion.a>
            <motion.div 
              className="user-icon"
              whileHover={{ scale: 1.1 }}
            >
              <FaUserCircle />
            </motion.div>
            <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="mobile-menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <ul>
                <motion.li variants={itemVariants}>
                  <Link to="/home" onClick={toggleMobileMenu}>Home</Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link to="/about" onClick={toggleMobileMenu}>About</Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link to="/rooms" onClick={toggleMobileMenu}>Rooms</Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link to="/services" onClick={toggleMobileMenu}>Services</Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link to="/gallery" onClick={toggleMobileMenu}>Gallery</Link>
                </motion.li>
                <motion.li variants={itemVariants} className="mobile-feedback">
                  <Link to="/feedback" onClick={toggleMobileMenu}>
                    <FaCommentDots className="feedback-icon" />
                    <span>Feedback</span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link to="/contact" onClick={toggleMobileMenu}>Contact</Link>
                </motion.li>
                <motion.li variants={itemVariants} className="mobile-book">
                  <a href="#online-booking" className="online-booking-btn" onClick={toggleBookingModal}>
                    <FaCalendarAlt /> ONLINE BOOKING
                  </a>
                </motion.li>
                <motion.li variants={itemVariants} className="mobile-book">
                  <a 
                    href="https://api.whatsapp.com/send?phone=919007062180"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="book-now-btn"
                  >
                    BOOK NOW
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Booking Modal */}
        <AnimatePresence>
          {showBookingModal && (
            <div className="modal-backdrop" onClick={toggleBookingModal}>
              <motion.div 
                className="booking-modal"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h2>Available Accommodations</h2>
                  <button className="close-btn" onClick={toggleBookingModal}>
                    <FaTimes />
                  </button>
                </div>
                
                <div className="modal-content">
                  <div className="room-options">
                    <motion.div 
                      className="room-card"
                      whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                    >
                      <div className="room-image">
                        <img src={roomYellowImg} alt="Cozy Haven Room" />
                      </div>
                      <div className="room-details">
                        <h3>Cozy Haven Room</h3>
                        <p className="room-price">₹1000 / night</p>
                        <div className="room-amenities">
                          <span><FaBed /> 1 Double Bed</span>
                          <span><FaWifi /> Free WiFi</span>
                          <span><FaSnowflake /> Air Conditioner</span>
                        </div>
                        <p className="room-description">
                          A perfect cozy retreat for couples with comfortable furnishings and a peaceful ambiance.
                        </p>
                        <div className="room-actions">
                          <a 
                            href="https://api.whatsapp.com/send?phone=919007062180?text=I'm%20interested%20in%20booking%20the%20Cozy%20Haven%20Room"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="book-btn"
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="room-card"
                      whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                    >
                      <div className="room-image">
                        <img src={roomPinkImg} alt="Spacious Serenity Suite" />
                      </div>
                      <div className="room-details">
                        <h3>Spacious Serenity Suite</h3>
                        <p className="room-price">₹1500 / night</p>
                        <div className="room-amenities">
                          <span><FaBed /> 1 King Size Bed</span>
                          <span><FaWifi /> Free WiFi</span>
                          <span><FaSnowflake /> Air Conditioner</span>
                          <span><FaTv /> 32" TV</span>
                        </div>
                        <p className="room-description">
                          A luxurious suite perfect for those seeking extra space and premium amenities for a truly relaxing stay.
                        </p>
                        <div className="room-actions">
                          <a 
                            href="https://api.whatsapp.com/send?phone=919007062180?text=I'm%20interested%20in%20booking%20the%20Spacious%20Serenity%20Suite"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="book-btn"
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="booking-note">
                    <h3>Special Offers</h3>
                    <ul>
                      <li><strong>Extended Stay Discount:</strong> 10% off for bookings of 3+ nights</li>
                      <li><strong>Breakfast Included:</strong> Complimentary breakfast with all room bookings</li>
                      <li><strong>Free Airport Pickup:</strong> For bookings of Spacious Serenity Suite</li>
                    </ul>
                    <p className="contact-info">
                      For special requests or group bookings, please contact us directly at <a href="tel:+919007062180">+91 9007062180</a>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
  padding: ${props => props.scrolled ? '0.5rem 0' : '1rem 0'};
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 0.8rem;
    }
    
    .logo-text {
      display: flex;
      flex-direction: column;
      
      h1 {
        font-family: 'Playfair Display', serif;
        color: ${props => props.scrolled ? '#333' : '#fff'};
        margin: 0;
        font-size: 1.5rem;
        line-height: 1.2;
        transition: color 0.3s ease;
      }
      
      .subtitle {
        font-size: 0.9rem;
        color: ${props => props.scrolled ? '#333' : '#fff'};
        font-weight: 500;
        transition: color 0.3s ease;
      }
    }
  }
  
  .nav-links-desktop {
    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      
      li {
        margin: 0 1rem;
        
        &.feedback-link {
          a {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            background-color: rgba(44, 139, 139, 0.1);
            padding: 0.5rem 0.75rem;
            border-radius: 20px;
            color: ${props => props.scrolled ? '#2c8b8b' : '#fff'};
            
            .feedback-icon {
              animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.2);
              }
              100% {
                transform: scale(1);
              }
            }
          }
        }
        
        a {
          text-decoration: none;
          color: ${props => props.scrolled ? '#333' : '#fff'};
          font-weight: 500;
          position: relative;
          transition: color 0.3s ease;
          
          &::after {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: ${props => props.scrolled ? '#2c8b8b' : '#fff'};
            transition: width 0.3s ease;
          }
          
          &:hover::after {
            width: 100%;
          }
        }
      }
    }
  }
  
  .nav-buttons {
    display: flex;
    align-items: center;
    
    .online-booking-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: white;
      color: #2c8b8b;
      border: 1px solid #2c8b8b;
      border-radius: 20px;
      padding: 0.5rem 1rem;
      font-weight: 500;
      font-size: 0.9rem;
      cursor: pointer;
      margin-right: 0.75rem;
      text-decoration: none;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: #f0f8f8;
      }
      
      @media (max-width: 992px) {
        display: none;
      }
    }
    
    .book-now-btn {
      background-color: #2c8b8b;
      color: white;
      border: none;
      border-radius: 20px;
      padding: 0.5rem 1rem;
      font-weight: 500;
      cursor: pointer;
      margin-right: 1rem;
      
      &:hover {
        background-color: #236e6e;
      }
    }
    
    .user-icon {
      font-size: 1.5rem;
      color: ${props => props.scrolled ? '#333' : '#fff'};
      cursor: pointer;
      margin-right: 1rem;
      transition: color 0.3s ease;
    }
    
    .mobile-menu-toggle {
      display: none;
      font-size: 1.5rem;
      color: ${props => props.scrolled ? '#333' : '#fff'};
      cursor: pointer;
      transition: color 0.3s ease;
    }
  }
  
  .mobile-menu {
    display: none;
    overflow: hidden;
    
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        margin: 1rem 0;
        text-align: center;
        
        &.mobile-feedback {
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            background-color: rgba(44, 139, 139, 0.1);
            padding: 0.5rem;
            border-radius: 20px;
            color: #2c8b8b;
            
            .feedback-icon {
              animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.2);
              }
              100% {
                transform: scale(1);
              }
            }
          }
        }
        
        a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          font-size: 1.1rem;
        }
        
        &.mobile-book {
          margin-top: 1rem;
          
          .book-now-btn, .online-booking-btn {
            width: 100%;
            padding: 0.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
          }
          
          .online-booking-btn {
            background-color: white;
            color: #2c8b8b;
            border: 1px solid #2c8b8b;
            margin-bottom: 0.75rem;
          }
        }
      }
    }
  }
  
  @media (max-width: 992px) {
    .nav-links-desktop {
      display: none;
    }
    
    .nav-buttons {
      .book-now-btn {
        display: none;
      }
      
      .mobile-menu-toggle {
        display: block;
      }
    }
    
    .mobile-menu {
      display: block;
      padding: 1rem 0;
    }
  }
  
  /* Booking Modal Styles */
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    overflow-y: auto;
    padding: 20px;
  }
  
  .booking-modal {
    background-color: white;
    border-radius: 10px;
    max-width: 900px;
    width: 90%;
    max-height: 85vh;
    overflow-y: auto;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
      border-bottom: 1px solid #eee;
      
      h2 {
        color: #2c8b8b;
        margin: 0;
        font-family: 'Playfair Display', serif;
      }
      
      .close-btn {
        background: none;
        border: none;
        color: #666;
        font-size: 1.5rem;
        cursor: pointer;
        transition: color 0.3s ease;
        
        &:hover {
          color: #2c8b8b;
        }
      }
    }
    
    .modal-content {
      padding: 1.5rem;
      
      .room-options {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        margin-bottom: 2rem;
        
        @media (max-width: 768px) {
          grid-template-columns: 1fr;
        }
        
        .room-card {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          background-color: #fff;
          transition: all 0.3s ease;
          
          .room-image {
            height: 200px;
            overflow: hidden;
            
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.5s ease;
            }
          }
          
          &:hover .room-image img {
            transform: scale(1.1);
          }
          
          .room-details {
            padding: 1.5rem;
            
            h3 {
              margin-top: 0;
              margin-bottom: 0.5rem;
              color: #333;
            }
            
            .room-price {
              color: #2c8b8b;
              font-weight: bold;
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
            
            .room-amenities {
              display: flex;
              flex-wrap: wrap;
              gap: 0.8rem;
              margin-bottom: 1rem;
              
              span {
                display: flex;
                align-items: center;
                gap: 0.3rem;
                font-size: 0.9rem;
                color: #666;
                background-color: #f5f5f5;
                padding: 0.3rem 0.6rem;
                border-radius: 20px;
                
                svg {
                  color: #2c8b8b;
                }
              }
            }
            
            .room-description {
              color: #666;
              font-size: 0.95rem;
              margin-bottom: 1.5rem;
              line-height: 1.6;
            }
            
            .room-actions {
              .book-btn {
                display: inline-block;
                background-color: #2c8b8b;
                color: white;
                padding: 0.7rem 1.2rem;
                border-radius: 30px;
                text-decoration: none;
                font-weight: 500;
                transition: all 0.3s ease;
                
                &:hover {
                  background-color: #236e6e;
                  transform: translateY(-2px);
                }
              }
            }
          }
        }
      }
      
      .booking-note {
        background-color: #f9f9f9;
        padding: 1.5rem;
        border-radius: 10px;
        
        h3 {
          color: #2c8b8b;
          margin-top: 0;
          margin-bottom: 1rem;
        }
        
        ul {
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
          
          li {
            margin-bottom: 0.5rem;
            color: #555;
          }
        }
        
        .contact-info {
          color: #666;
          font-style: italic;
          margin-bottom: 0;
          
          a {
            color: #2c8b8b;
            text-decoration: none;
            font-weight: bold;
            
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;

export default Navbar; 