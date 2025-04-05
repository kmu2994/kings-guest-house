import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaHome, FaUtensils, FaRoute, FaWifi, FaConciergeBell, FaHiking, FaSearch, FaTimes, FaStar, FaEnvelope, FaUser, FaComment, FaWhatsapp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import headerImg from '../../assets/header.jpg';
import buildingImg from '../../assets/1.jpg';
import roomYellowImg from '../../assets/large.jpg';
import roomPinkImg from '../../assets/small.jpg';
import serviceImg from '../../assets/service.jpg';
import room1Img from '../../assets/room1.jpg';
import recepImg from '../../assets/recep.jpg';
import logoImg from '../../assets/logo.jpg';
import mithonDamImg from '../../assets/mithonDam.webp';
import palashImg from '../../assets/palash.webp';
import barantiImg from '../../assets/baranti.webp';
import ayodhyaImg from '../../assets/ayodhya.webp';
import flowerImg from '../../assets/flower.jpg';
import outImg from '../../assets/out.jpg';
import Navbar from '../common/Navbar';

const HomePage = () => {
  // Animation controls for scroll animations
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  // State for gallery lightbox
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [imagesLoaded, setImagesLoaded] = useState({
    header: false,
    building: false,
    roomYellow: false,
    roomPink: false,
    service: false,
    room1: false,
    recep: false,
    flower: false,
    out: false,
    mithonDam: false,
    palash: false,
    baranti: false,
    ayodhya: false
  });
  const [imagesLoading, setImagesLoading] = useState(true);
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  // Scroll to section based on route
  useEffect(() => {
    const path = location.pathname;
    let sectionId = '';
    
    if (path === '/about') sectionId = 'about';
    else if (path === '/rooms') sectionId = 'rooms';
    else if (path === '/services') sectionId = 'services';
    else if (path === '/gallery') sectionId = 'gallery';
    else if (path === '/feedback') sectionId = 'feedback';
    else if (path === '/contact') sectionId = 'contact';
    
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (path === '/home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  // Function to handle image load
  const handleImageLoad = (imageId) => {
    console.log(`Image loaded: ${imageId}`);
    setImagesLoaded(prev => ({
      ...prev,
      [imageId]: true
    }));
  };
  
  // Check if all images are loaded
  useEffect(() => {
    const imageKeys = [
      'header', 'building', 'roomYellow', 'roomPink', 'service', 
      'room1', 'recep', 'flower', 'out', 'mithonDam', 
      'palash', 'baranti', 'ayodhya'
    ];
    
    const allImagesLoaded = imageKeys.every(img => imagesLoaded[img]);
    console.log('Images loaded status:', imagesLoaded);
    console.log('All images loaded:', allImagesLoaded);
    
    if (allImagesLoaded) {
      console.log('All images are now loaded');
      setImagesLoading(false);
    }
  }, [imagesLoaded]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
      },
    },
  };
  
  // Function to open lightbox
  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };
  
  // Function to close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <HomePageContainer>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          >
            Make Yourself At Home <br /> In Our Guest House
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Simple - Unique - Friendly
          </motion.p>
          <motion.a
            href="https://api.whatsapp.com/send?phone=919007062180"
            target="_blank"
            rel="noopener noreferrer"
            className="book-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            BOOK NOW
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-header">
            <span>about</span>
            <h2>ABOUT US</h2>
          </div>
          
          <motion.div 
            className="about-content"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div className="about-text" variants={itemVariants}>
              <h3>The Best Holidays Start Here!</h3>
              <p>
                Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
              </p>
              <div className="about-contact">
                <p><strong>Address:</strong> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
                <p><strong>Contact us:</strong> +91 9007062180</p>
              </div>
              <motion.a 
                href="https://api.whatsapp.com/send?phone=919007062180"
                target="_blank"
                rel="noopener noreferrer"
                className="book-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                BOOK NOW
              </motion.a>
            </motion.div>
            <motion.div className="about-image" variants={itemVariants}>
              <img src={buildingImg} alt="Kings Guest House Building" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us</h2>
          </div>
          
          <motion.div 
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Prime Location</h3>
              <p>Located at a scenic spot with easy access to the main attractions and natural beauty of the region.</p>
            </motion.div>
            
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">
                <FaHome />
              </div>
              <h3>Homely Comfort</h3>
              <p>Clean, comfortable rooms with modern amenities and a warm, homely atmosphere for a relaxing stay.</p>
            </motion.div>
            
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">
                <FaUtensils />
              </div>
              <h3>Authentic Cuisine</h3>
              <p>Enjoy delicious home-cooked Indian meals prepared with local ingredients and traditional recipes.</p>
            </motion.div>
            
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">
                <FaHiking />
              </div>
              <h3>Tourist Guide Support</h3>
              <p>Expert guides to help you explore the region's natural and cultural attractions.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="rooms" id="rooms">
        <div className="container">
          <div className="section-header">
            <span>OUR LIVING ROOM</span>
            <h2>The Most Memorable Rest Time Starts Here.</h2>
          </div>
          
          <motion.div 
            className="rooms-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div className="room-card" variants={itemVariants}>
              <div className="room-image">
                <img src={roomYellowImg} alt="Cozy Haven Room" />
              </div>
              <div className="room-content">
                <h3>Cozy Haven Room</h3>
                <p>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.</p>
                <span className="room-price">Starting from Rs. 1000/night</span>
                <motion.a 
                  href="https://api.whatsapp.com/send?phone=919007062180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="book-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  BOOK NOW
                </motion.a>
              </div>
            </motion.div>

            <motion.div className="room-card" variants={itemVariants}>
              <div className="room-image">
                <img src={roomPinkImg} alt="Serene Suite Room" />
              </div>
              <div className="room-content">
                <h3>Serene Suite Room</h3>
                <p>Experience tranquility in our Serene Suite Room, where comfort meets elegant design.</p>
                <span className="room-price">Starting from Rs. 1500/night</span>
                <motion.a 
                  href="https://api.whatsapp.com/send?phone=919007062180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="book-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  BOOK NOW
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <span>SERVICES</span>
            <h2>Strive Only For The Best.</h2>
          </div>
          
          <motion.div 
            className="services-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div className="services-list" variants={itemVariants}>
              <h3>We Provide The Best Experience</h3>
              <p>
                At Kingsukh Guest House, we go above and beyond to ensure your stay is comfortable and memorable. Our range of services is designed to meet all your needs.
              </p>
              
              <div className="service-item">
                <FaWifi />
                <div>
                  <h4>Free Wi-Fi</h4>
                  <p>Stay connected with high-speed internet access throughout the property.</p>
                </div>
              </div>
              
              <div className="service-item">
                <FaConciergeBell />
                <div>
                  <h4>Room Service</h4>
                  <p>Enjoy meals and refreshments delivered directly to your room.</p>
                </div>
              </div>
              
              <div className="service-item">
                <FaUtensils />
                <div>
                  <h4>Homemade Food</h4>
                  <p>Savor authentic local cuisine prepared with fresh ingredients.</p>
                </div>
              </div>
              
              <div className="service-item">
                <FaRoute />
                <div>
                  <h4>Tour Assistance</h4>
                  <p>Get expert guidance for exploring local attractions and hidden gems.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="services-image-container" variants={itemVariants}>
              <img src={serviceImg} alt="Our Services" />
            </motion.div>
          </motion.div>
          
          <div className="stats-container">
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>100+</h3>
              <p>Bookings Completed</p>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>150+</h3>
              <p>Happy Customers</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="section-header">
            <span>OUR GALLERY</span>
            <h2>Explore Our Property & Nearby Attractions</h2>
          </div>
          
          {imagesLoading && (
            <div className="gallery-loading">
              <div className="spinner"></div>
              <p>Loading beautiful images...</p>
            </div>
          )}
          
          <motion.div 
            className="gallery-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div className="gallery-item" variants={itemVariants} onClick={() => openLightbox(headerImg)}>
              <div className="image-container">
                {!imagesLoaded['header'] && <div className="image-placeholder"></div>}
                <img 
                  src={headerImg} 
                  alt="Guest House Exterior" 
                  onLoad={() => handleImageLoad('header')} 
                  style={{ display: imagesLoaded['header'] ? 'block' : 'none' }}
                />
              </div>
              <div className="gallery-caption">Exterior View</div>
            </motion.div>
            
            <motion.div className="gallery-item" variants={itemVariants} onClick={() => openLightbox(buildingImg)}>
              <div className="image-container">
                {!imagesLoaded['building'] && <div className="image-placeholder"></div>}
                <img 
                  src={buildingImg} 
                  alt="Building View" 
                  onLoad={() => handleImageLoad('building')} 
                  style={{ display: imagesLoaded['building'] ? 'block' : 'none' }}
                />
              </div>
              <div className="gallery-caption">Building View</div>
            </motion.div>
            
            <motion.div className="gallery-item" variants={itemVariants} onClick={() => openLightbox(roomYellowImg)}>
              <div className="image-container">
                {!imagesLoaded['roomYellow'] && <div className="image-placeholder"></div>}
                <img 
                  src={roomYellowImg} 
                  alt="Cozy Haven Room" 
                  onLoad={() => handleImageLoad('roomYellow')} 
                  style={{ display: imagesLoaded['roomYellow'] ? 'block' : 'none' }}
                />
              </div>
              <div className="gallery-caption">Cozy Haven Room</div>
            </motion.div>
            
            <motion.div className="gallery-item" variants={itemVariants} onClick={() => openLightbox(roomPinkImg)}>
              <div className="image-container">
                {!imagesLoaded['roomPink'] && <div className="image-placeholder"></div>}
                <img 
                  src={roomPinkImg} 
                  alt="Serene Suite Room" 
                  onLoad={() => handleImageLoad('roomPink')} 
                  style={{ display: imagesLoaded['roomPink'] ? 'block' : 'none' }}
                />
              </div>
              <div className="gallery-caption">Serene Suite Room</div>
            </motion.div>
            
            <motion.div className="gallery-item" variants={itemVariants} onClick={() => openLightbox(recepImg)}>
              <div className="image-container">
                {!imagesLoaded['recep'] && <div className="image-placeholder"></div>}
                <img 
                  src={recepImg} 
                  alt="Reception Area" 
                  onLoad={() => handleImageLoad('recep')} 
                  style={{ display: imagesLoaded['recep'] ? 'block' : 'none' }}
                />
              </div>
              <div className="gallery-caption">Reception Area</div>
            </motion.div>
            
            <motion.div className="gallery-item" variants={itemVariants} onClick={() => openLightbox(serviceImg)}>
              <div className="image-container">
                {!imagesLoaded['service'] && <div className="image-placeholder"></div>}
                <img 
                  src={serviceImg} 
                  alt="Service Area" 
                  onLoad={() => handleImageLoad('service')} 
                  style={{ display: imagesLoaded['service'] ? 'block' : 'none' }}
                />
              </div>
              <div className="gallery-caption">Service Area</div>
            </motion.div>
            
            <motion.div className="gallery-item" variants={itemVariants} onClick={() => openLightbox(room1Img)}>
              <div className="image-container">
                {!imagesLoaded['room1'] && <div className="image-placeholder"></div>}
                <img 
                  src={room1Img} 
                  alt="Deluxe Room" 
                  onLoad={() => handleImageLoad('room1')} 
                  style={{ display: imagesLoaded['room1'] ? 'block' : 'none' }}
                />
              </div>
              <div className="gallery-caption">Deluxe Room</div>
            </motion.div>
            
            <motion.div className="gallery-item" variants={itemVariants} onClick={() => openLightbox(flowerImg)}>
              <div className="image-container">
                {!imagesLoaded['flower'] && <div className="image-placeholder"></div>}
                <img 
                  src={flowerImg} 
                  alt="Garden View" 
                  onLoad={() => handleImageLoad('flower')} 
                  style={{ display: imagesLoaded['flower'] ? 'block' : 'none' }}
                />
              </div>
              <div className="gallery-caption">Garden View</div>
            </motion.div>
            
            <motion.div className="gallery-item" variants={itemVariants} onClick={() => openLightbox(outImg)}>
              <div className="image-container">
                {!imagesLoaded['out'] && <div className="image-placeholder"></div>}
                <img 
                  src={outImg} 
                  alt="Outdoor Area" 
                  onLoad={() => handleImageLoad('out')} 
                  style={{ display: imagesLoaded['out'] ? 'block' : 'none' }}
                />
              </div>
              <div className="gallery-caption">Outdoor Area</div>
            </motion.div>
            
            <motion.div className="gallery-item" variants={itemVariants} onClick={() => openLightbox(mithonDamImg)}>
              <div className="image-container">
                {!imagesLoaded['mithonDam'] && <div className="image-placeholder"></div>}
                <img 
                  src={mithonDamImg} 
                  alt="Mithon Dam" 
                  onLoad={() => handleImageLoad('mithonDam')} 
                  style={{ display: imagesLoaded['mithonDam'] ? 'block' : 'none' }}
                />
              </div>
              <div className="gallery-caption">Mithon Dam</div>
            </motion.div>
            
            <motion.div className="gallery-item" variants={itemVariants} onClick={() => openLightbox(palashImg)}>
              <div className="image-container">
                {!imagesLoaded['palash'] && <div className="image-placeholder"></div>}
                <img 
                  src={palashImg} 
                  alt="Palash Flowers" 
                  onLoad={() => handleImageLoad('palash')} 
                  style={{ display: imagesLoaded['palash'] ? 'block' : 'none' }}
                />
              </div>
              <div className="gallery-caption">Palash Flowers</div>
            </motion.div>
            
            <motion.div className="gallery-item" variants={itemVariants} onClick={() => openLightbox(barantiImg)}>
              <div className="image-container">
                {!imagesLoaded['baranti'] && <div className="image-placeholder"></div>}
                <img 
                  src={barantiImg} 
                  alt="Baranti View" 
                  onLoad={() => handleImageLoad('baranti')} 
                  style={{ display: imagesLoaded['baranti'] ? 'block' : 'none' }}
                />
              </div>
              <div className="gallery-caption">Baranti</div>
            </motion.div>
            
            <motion.div className="gallery-item large-item" variants={itemVariants} onClick={() => openLightbox(ayodhyaImg)}>
              <div className="image-container">
                {!imagesLoaded['ayodhya'] && <div className="image-placeholder"></div>}
                <img 
                  src={ayodhyaImg} 
                  alt="Ayodhya Hills" 
                  onLoad={() => handleImageLoad('ayodhya')} 
                  style={{ display: imagesLoaded['ayodhya'] ? 'block' : 'none' }}
                />
              </div>
              <div className="gallery-caption">Ayodhya Hills</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="feedback" id="feedback">
        <div className="container">
          <div className="section-header">
            <span>YOUR OPINION MATTERS</span>
            <h2>Share Your Experience</h2>
          </div>
          
          <div className="feedback-container">
            <motion.div 
              className="feedback-form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Tell Us About Your Stay</h3>
              <p>Your feedback helps us improve our services and provide a better experience for all our guests.</p>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your feedback! We appreciate your input.');
                e.target.reset();
              }}>
                <div className="input-row">
                  <div className="input-group">
                    <label><FaUser /> Full Name</label>
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  
                  <div className="input-group">
                    <label><FaEnvelope /> Email</label>
                    <input type="email" placeholder="Your Email" required />
                  </div>
                </div>
                
                <div className="input-group">
                  <label>How would you rate your stay?</label>
                  <div className="rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star">
                        <FaStar />
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="input-group">
                  <label><FaComment /> Your Feedback</label>
                  <textarea 
                    placeholder="Please share your experience, suggestions, or any issues you faced during your stay" 
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <div className="input-group">
                  <input type="checkbox" id="permission" />
                  <label htmlFor="permission" className="checkbox-label">
                    Allow us to share your feedback publicly
                  </label>
                </div>
                
                <motion.button 
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit Feedback
                </motion.button>
              </form>
            </motion.div>
            
            <motion.div 
              className="testimonials-preview"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>What Our Guests Say</h3>
              
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="guest-info">
                    <h4>Amit Singh</h4>
                    <p>Stayed June 2024</p>
                  </div>
                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <p className="testimonial-text">
                  "The hospitality at Kingsukh Guest House exceeded my expectations. The staff was extremely helpful and the rooms were clean and comfortable. The location is perfect for exploring the area."
                </p>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="guest-info">
                    <h4>Priya Sharma</h4>
                    <p>Stayed April 2024</p>
                  </div>
                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <p className="testimonial-text">
                  "Peaceful environment, delicious food, and warm hospitality - exactly what we were looking for. The rooms were spacious and well-maintained. Will definitely recommend to friends and family!"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-header">
            <span>FIND US</span>
            <h2>Get In Touch</h2>
          </div>
        
          <div className="contact-container">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Contact Info</h2>
              <div className="info-item">
                <FaMapMarkerAlt />
                <div>
                  <p>Beside Barshal Water Tank,<br />Manpur, Barhanti,<br />West Bengal 723156</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <p>kkghosh0099@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <p>+91 9007062180</p>
                </div>
              </div>
              <div className="social-icons">
                <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="#twitter"><i className="fab fa-twitter"></i></a>
                <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
              </div>
              
              <motion.div 
                className="location-map"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3>Our Location</h3>
                <div className="map-container">
                  <iframe 
                    title="King Sukh Guest House Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.9604428075396!2d86.85979037397037!3d23.586332448108136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1711031844991!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="contact-form"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Send a Message</h2>
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" placeholder="First Name" required />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Last Name" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input type="email" placeholder="Email Address" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" placeholder="Mobile Number" required />
                  </div>
                </div>
                <div className="form-group">
                  <textarea placeholder="Write your message here..." rows="5" required></textarea>
                </div>
                <motion.button 
                  type="submit" 
                  className="send-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section about">
              <div className="footer-logo">
                <img src={logoImg} alt="Kings Guest House Logo" />
                <h3>Kings Guest House</h3>
              </div>
              <p>
                Experience luxury and comfort at our serene guest house nestled in the beautiful region of Purulia.
              </p>
              <div className="contact">
                <p><strong>Address:</strong> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
                <p><strong>Phone:</strong> +91 9007062180</p>
                <p><strong>Email:</strong> info@kingsgh.com</p>
              </div>
              <motion.a 
                href="https://api.whatsapp.com/send?phone=919007062180"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp /> Book Now on WhatsApp
              </motion.a>
            </div>
            
            <div className="footer-section links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#rooms">Rooms</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section attractions">
              <h3>Nearby Attractions</h3>
              <ul>
                <li>Biharinath Hill</li>
                <li>Susunia Hill</li>
                <li>Joychandi Hill</li>
                <li>Baranti Dam</li>
                <li>Maithon Dam</li>
                <li>Garpanchkot</li>
                <li>Ayodhya Hills</li>
                <li>Palash Forest</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Kings Guest House. All Rights Reserved.</p>
            <p>Designed with ❤️ for comfort and luxury</p>
          </div>
        </div>
      </footer>
      
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={currentImage} alt="Gallery View" />
          <div className="close-btn">
            <FaTimes />
          </div>
        </div>
      )}
    </HomePageContainer>
  );
};

const HomePageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  
  /* Hero Section */
  .hero {
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                  url(${headerImg});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -1;
    }
  }
  
  .hero-content {
    max-width: 800px;
    position: relative;
    z-index: 1;
    padding: 0 1.5rem;
    
    h1 {
      font-size: 3.5rem;
      font-family: 'Playfair Display', serif;
      margin-bottom: 1.5rem;
      
      @media (max-width: 992px) {
        font-size: 3rem;
      }
      
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
      
      @media (max-width: 480px) {
        font-size: 2rem;
      }
    }
    
    p {
      font-size: 1.5rem;
      margin-bottom: 2.5rem;
      
      @media (max-width: 768px) {
        font-size: 1.2rem;
        margin-bottom: 2rem;
      }
      
      @media (max-width: 480px) {
        font-size: 1.1rem;
        margin-bottom: 1.8rem;
      }
    }
    
    .book-btn {
      display: inline-block;
      background-color: #2c8b8b;
      color: white;
      text-decoration: none;
      padding: 1rem 2rem;
      border-radius: 50px;
      font-weight: bold;
      letter-spacing: 1px;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: #236e6e;
      }
      
      @media (max-width: 480px) {
        padding: 0.8rem 1.5rem;
        font-size: 0.9rem;
      }
    }
  }
  
  /* Common Container */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
      padding: 0 1.5rem;
    }
    
    @media (max-width: 480px) {
      padding: 0 1rem;
    }
  }
  
  /* Section Header */
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
    
    @media (max-width: 768px) {
      margin-bottom: 2rem;
    }
    
    span {
      color: #2c8b8b;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 500;
      display: block;
      margin-bottom: 0.5rem;
    }
    
    h2 {
      font-size: 2.5rem;
      font-family: 'Playfair Display', serif;
      color: #333;
      position: relative;
      padding-bottom: 1rem;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background-color: #2c8b8b;
      }
      
      @media (max-width: 768px) {
        font-size: 2rem;
      }
      
      @media (max-width: 480px) {
        font-size: 1.8rem;
      }
    }
  }
  
  /* About Section */
  .about {
    padding: 5rem 0;
    
    @media (max-width: 768px) {
      padding: 4rem 0;
    }
    
    @media (max-width: 480px) {
      padding: 3rem 0;
    }
    
    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
      
      @media (max-width: 992px) {
        gap: 2rem;
      }
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
      
      .about-text {
        h3 {
          font-size: 1.8rem;
          font-family: 'Playfair Display', serif;
          color: #333;
          margin-bottom: 1.5rem;
          
          @media (max-width: 480px) {
            font-size: 1.5rem;
          }
        }
        
        p {
          color: #666;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          
          @media (max-width: 480px) {
            font-size: 0.95rem;
          }
        }
        
        .about-contact {
          margin-bottom: 1.5rem;
          
          p {
            margin-bottom: 0.5rem;
          }
        }
        
        .book-btn {
          display: inline-block;
          background-color: #2c8b8b;
          color: white;
          text-decoration: none;
          padding: 0.8rem 1.5rem;
          border-radius: 5px;
          font-weight: bold;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          
          &:hover {
            background-color: #236e6e;
          }
          
          @media (max-width: 480px) {
            padding: 0.7rem 1.2rem;
            font-size: 0.9rem;
          }
        }
      }
      
      .about-image {
        width: 100%;
        height: 400px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  
  /* Features Section */
  .features {
    padding: 5rem 0;
    background-color: #f9f9f9;
    
    @media (max-width: 768px) {
      padding: 4rem 0;
    }
    
    @media (max-width: 480px) {
      padding: 3rem 0;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      
      @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (max-width: 576px) {
        grid-template-columns: 1fr;
      }
      
      .feature-card {
        background-color: white;
        padding: 2rem;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease;
        
        &:hover {
          transform: translateY(-10px);
        }
        
        @media (max-width: 480px) {
          padding: 1.5rem;
        }
        
        .feature-icon {
          color: #2c8b8b;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          
          @media (max-width: 480px) {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
        }
        
        h3 {
          font-size: 1.4rem;
          color: #333;
          margin-bottom: 1rem;
          
          @media (max-width: 480px) {
            font-size: 1.2rem;
          }
        }
        
        p {
          color: #666;
          line-height: 1.6;
          
          @media (max-width: 480px) {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  
  /* Rooms Section */
  .rooms {
    padding: 5rem 0;
    
    @media (max-width: 768px) {
      padding: 4rem 0;
    }
    
    @media (max-width: 480px) {
      padding: 3rem 0;
    }
    
    .rooms-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      
      @media (max-width: 992px) {
        gap: 1.5rem;
      }
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
      
      .room-card {
        background: #fff;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
        
        &:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .room-image {
          width: 100%;
          height: 300px;
          overflow: hidden;
          
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }
          
          &:hover img {
            transform: scale(1.1);
          }
        }
        
        .room-content {
          padding: 1.5rem;
          
          @media (max-width: 480px) {
            padding: 1.2rem;
          }
          
          h3 {
            font-size: 1.5rem;
            color: #333;
            margin-bottom: 0.5rem;
            
            @media (max-width: 480px) {
              font-size: 1.3rem;
            }
          }
          
          p {
            color: #666;
            line-height: 1.6;
            margin-bottom: 1rem;
          }
          
          .room-price {
            display: block;
            color: #2c8b8b;
            font-weight: bold;
            font-size: 1.2rem;
            margin-bottom: 1rem;
            
            @media (max-width: 480px) {
              font-size: 1.1rem;
            }
          }
          
          .book-btn {
            display: inline-block;
            background-color: #2c8b8b;
            color: white;
            text-decoration: none;
            padding: 0.7rem 1.5rem;
            border-radius: 5px;
            font-weight: 500;
            transition: all 0.3s ease;
            
            &:hover {
              background-color: #236e6e;
            }
            
            @media (max-width: 480px) {
              padding: 0.6rem 1.2rem;
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }
  
  /* Services Section */
  .services {
    padding: 5rem 0;
    background-color: #f9f9f9;
    
    @media (max-width: 768px) {
      padding: 4rem 0;
    }
    
    @media (max-width: 480px) {
      padding: 3rem 0;
    }
    
    .services-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
      
      @media (max-width: 992px) {
        gap: 2rem;
      }
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
      
      .services-image-container {
        width: 100%;
        height: 400px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        &:hover img {
          transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
          height: 350px;
          order: 2;
        }
        
        @media (max-width: 480px) {
          height: 250px;
        }
      }
      
      .services-list {
        @media (max-width: 768px) {
          order: 1;
        }
        
        h3 {
          font-size: 1.8rem;
          font-family: 'Playfair Display', serif;
          color: #333;
          margin-bottom: 1.5rem;
          
          @media (max-width: 480px) {
            font-size: 1.5rem;
          }
        }
        
        p {
          color: #666;
          line-height: 1.8;
          margin-bottom: 2rem;
          
          @media (max-width: 480px) {
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
          }
        }
        
        .service-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          
          @media (max-width: 480px) {
            margin-bottom: 1.2rem;
          }
          
          svg {
            color: #2c8b8b;
            font-size: 1.5rem;
            margin-right: 1rem;
            flex-shrink: 0;
            
            @media (max-width: 480px) {
              font-size: 1.3rem;
            }
          }
          
          div {
            h4 {
              font-size: 1.2rem;
              color: #333;
              margin-bottom: 0.5rem;
              
              @media (max-width: 480px) {
                font-size: 1.1rem;
              }
            }
            
            p {
              margin-bottom: 0;
              color: #666;
              
              @media (max-width: 480px) {
                font-size: 0.9rem;
              }
            }
          }
        }
      }
    }
  }
  
  /* Gallery Section */
  .gallery {
    padding: 5rem 0;
    background-color: #f8f8f8;
    
    @media (max-width: 768px) {
      padding: 4rem 0;
    }
    
    @media (max-width: 480px) {
      padding: 3rem 0;
    }
  }
  
  .gallery-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    margin-bottom: 2rem;
  }
  
  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: #d4af37;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }
  
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .gallery-loading p {
    font-size: 1.2rem;
    color: #555;
  }
  
  .image-container {
    position: relative;
    width: 100%;
    height: 250px;
    overflow: hidden;
    border-radius: 8px;
  }
  
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .image-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    -webkit-animation: shimmer 1.5s linear infinite;
    animation: shimmer 1.5s linear infinite;
    border-radius: 8px;
  }
  
  @-webkit-keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 250px;
    gap: 20px;
    
    .gallery-item {
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
      border: 5px solid #fff;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
        border-color: #2c8b8b;
      }
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
      
      &:hover img {
        transform: scale(1.1);
      }
      
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      &:hover::after {
        opacity: 1;
      }
      
      .gallery-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 15px;
        background: rgba(0,0,0,0.5);
        color: white;
        font-weight: 500;
        text-align: center;
        transform: translateY(100%);
        transition: transform 0.3s ease;
        z-index: 2;
      }
      
      &:hover .gallery-caption {
        transform: translateY(0);
      }
    }
    
    .large-item {
      grid-column: span 2;
      grid-row: span 1;
    }
    
    @media (max-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
      
      .large-item {
        grid-column: span 1;
      }
    }
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      grid-auto-rows: 220px;
    }
  }
  
  /* Feedback Section */
  .feedback {
    padding: 5rem 0;
    background-color: #f9f9f9;
    
    .feedback-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
      
      .feedback-form {
        background-color: white;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        
        h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #333;
        }
        
        p {
          color: #666;
          margin-bottom: 1.5rem;
        }
        
        .input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          
          @media (max-width: 576px) {
            grid-template-columns: 1fr;
          }
        }
        
        .input-group {
          margin-bottom: 1.5rem;
          
          label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
            font-weight: 500;
            
            svg {
              color: #2c8b8b;
            }
          }
          
          .checkbox-label {
            display: inline-flex;
            align-items: center;
            cursor: pointer;
            font-weight: normal;
            
            input[type="checkbox"] {
              margin-right: 0.5rem;
            }
          }
          
          input[type="text"],
          input[type="email"],
          textarea {
            width: 100%;
            padding: 0.8rem 1rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-family: inherit;
            font-size: 1rem;
            
            &:focus {
              border-color: #2c8b8b;
              outline: none;
            }
          }
          
          .rating-stars {
            display: flex;
            gap: 0.5rem;
            margin-top: 0.5rem;
            
            .star {
              color: #ddd;
              font-size: 1.5rem;
              cursor: pointer;
              transition: color 0.3s ease;
              
              &:hover,
              &:hover ~ .star {
                color: #f1c40f;
              }
              
              &.active {
                color: #f1c40f;
              }
            }
          }
        }
        
        .submit-btn {
          background-color: #2c8b8b;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 0.8rem 1.5rem;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          
          &:hover {
            background-color: #236e6e;
          }
        }
      }
      
      .testimonials-preview {
        h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #333;
        }
        
        .testimonial-card {
          background-color: white;
          border-radius: 10px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          
          .testimonial-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1rem;
            
            .guest-info {
              h4 {
                margin: 0;
                color: #333;
              }
              
              p {
                margin: 0.5rem 0 0;
                color: #888;
                font-size: 0.9rem;
              }
            }
            
            .rating {
              color: #f1c40f;
              display: flex;
              gap: 0.2rem;
              
              svg {
                font-size: 1rem;
              }
            }
          }
          
          .testimonial-text {
            color: #666;
            font-style: italic;
            margin: 0;
            line-height: 1.6;
          }
        }
      }
    }
  }
  
  /* Contact Section */
  .contact {
    padding: 5rem 0;
    
    .contact-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
      
      .contact-info {
        background-color: #2c8b8b;
        color: white;
        padding: 2.5rem 2rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        
        h2 {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          position: relative;
          
          &::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 50px;
            height: 3px;
            background-color: white;
          }
        }
        
        .info-item {
          display: flex;
          margin-bottom: 1.5rem;
          
          svg, i {
            font-size: 1.5rem;
            margin-right: 1rem;
            margin-top: 0.3rem;
          }
        }
        
        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          margin-bottom: 2rem;
          
          a {
            color: white;
            font-size: 1.2rem;
            transition: transform 0.3s ease;
            
            &:hover {
              transform: translateY(-5px);
            }
          }
        }
        
        .location-map {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          
          h3 {
            font-size: 1.4rem;
            margin-bottom: 1rem;
          }
          
          .map-container {
            width: 100%;
            aspect-ratio: 1 / 1;
            overflow: hidden;
            border-radius: 8px;
            border: 3px solid white;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          }
        }
      }
      
      .contact-form {
        padding: 2rem;
        
        h2 {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          color: #333;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 1rem;
          
          @media (max-width: 576px) {
            grid-template-columns: 1fr;
          }
        }
        
        .form-group {
          margin-bottom: 1rem;
          
          input, textarea {
            width: 100%;
            padding: 1rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-family: 'Poppins', sans-serif;
            transition: border-color 0.3s ease;
            
            &:focus {
              outline: none;
              border-color: #2c8b8b;
            }
          }
        }
        
        .send-btn {
          background-color: #2c8b8b;
          color: white;
          border: none;
          border-radius: 30px;
          padding: 0.8rem 2.5rem;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
          
          &:hover {
            background-color: #236e6e;
          }
        }
      }
    }
  }
  
  /* Footer Section */
  .footer {
    background-color: #2a3950;
    color: #fff;
    padding: 4rem 0 2rem;
    
    @media (max-width: 768px) {
      padding: 3rem 0 2rem;
    }
    
    @media (max-width: 480px) {
      padding: 2rem 0 1rem;
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-bottom: 2rem;
      
      @media (max-width: 992px) {
        gap: 1.5rem;
      }
      
      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (max-width: 576px) {
        grid-template-columns: 1fr;
      }
      
      .footer-section {
        h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          position: relative;
          color: #2c8b8b;
          
          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -8px;
            width: 50px;
            height: 2px;
            background-color: #2c8b8b;
          }
          
          @media (max-width: 480px) {
            font-size: 1.3rem;
            margin-bottom: 1.2rem;
          }
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          
          img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            margin-right: 15px;
            border: 3px solid #2c8b8b;
          }
          
          h3 {
            margin-bottom: 0;
            
            &::after {
              display: none;
            }
          }
        }
        
        p {
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .contact {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          
          p {
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
          }
        }
        
        .whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #25D366;
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 30px;
          font-weight: 500;
          transition: all 0.3s ease;
          
          &:hover {
            background-color: #128C7E;
          }
          
          svg {
            font-size: 1.2rem;
          }
        }
        
        ul {
          list-style: none;
          padding: 0;
          
          li {
            margin-bottom: 0.8rem;
            
            a {
              color: #fff;
              text-decoration: none;
              transition: color 0.3s ease;
              
              &:hover {
                color: #2c8b8b;
              }
            }
          }
        }
      }
    }
    
    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      
      p {
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
  
  /* Lightbox */
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.92);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    
    img {
      max-width: 90%;
      max-height: 85vh;
      object-fit: contain;
      border: 5px solid #fff;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    }
    
    .close-btn {
      position: absolute;
      top: 30px;
      right: 30px;
      color: white;
      font-size: 35px;
      cursor: pointer;
      z-index: 1001;
      transition: all 0.3s ease;
      
      &:hover {
        color: #2c8b8b;
        transform: scale(1.1);
      }
    }
  }
  
  /* Responsive */
  @media (max-width: 992px) {
    .about .about-content {
      flex-direction: column;
      text-align: center;
      
      .about-image {
        width: 100%;
      }
    }
    
    footer .footer-content {
      grid-template-columns: 1fr;
      
      .footer-links {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  
  @media (max-width: 768px) {
    .hero .hero-content h1 {
      font-size: 2.5rem;
    }
    
    .section-header h2 {
      font-size: 2rem;
    }
    
    footer .footer-content .footer-links {
      grid-template-columns: 1fr;
    }
    
    .footer-bottom {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  }
  
  /* Enhanced Responsive Styles */
  @media (max-width: 576px) {
    .section-header h2 {
      font-size: 1.8rem;
    }
    
    .book-btn {
      padding: 0.8rem 1.5rem;
      font-size: 0.9rem;
    }
    
    .gallery .gallery-grid {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      
      .gallery-item {
        height: 180px;
      }
    }
  }
`;

export default HomePage; 