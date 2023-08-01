import { useState, useEffect } from 'react';
import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage.js';
import AnimatedGif from './component/AnimatedGif.js';
import './index.css';
import ContactPage from './pages/ContactPage.js';
import AboutPage from './pages/AboutPage.js';
import FeaturePage from './pages/FeaturePage.js';
import PricingPage from './pages/PricingPage.js';
import WaitlistPage from './pages/WaitlistPage.js';
import SignupPage from './pages/SignupPage.js';


const Loader = () => {
  return (
    <Container fluid className="loadingpage" style={{ display:'flex',textAlign:'center',justifyContent:'center', width: 100 + '%', height: 100 + 'vh', }}>
      <motion.div 
      initial={{ opacity: 0, scale: 0.5 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{
        repeat: 6,
        repeatType: "reverse",
        duration: 0.5
      }}>
        <center>
         <AnimatedGif />
        </center>
      </motion.div>
     
    </Container>
  )
}

const Home = () => {

  return (
    <div>
      <HomePage />
    </div>
  )
}



const RootApplication = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/feature"  element={<FeaturePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/waitlist"  element={<WaitlistPage />} />
        <Route path="/signup"  element={<SignupPage />} />
      </Routes>
    </>
  )
}

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  }, []);

  return (
    <div className="App" style={{ width: 100 + '%' }}>
      {loading && <Loader />}
      {loading || <RootApplication />}
    </div>
  );
}

export default App;

