import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import HomePage from './components/home/HomePage';
import './App.css';

function App() {
  return (
    <Router basename="/kings-guest-house">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/rooms" element={<HomePage />} />
        <Route path="/services" element={<HomePage />} />
        <Route path="/gallery" element={<HomePage />} />
        <Route path="/feedback" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
