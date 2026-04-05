import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './components/home/Home';
import TheProject from './components/pages/TheProject';
import Science from './components/pages/Science';
import ForPatients from './components/pages/ForPatients';
import Contributors from './components/pages/Contributors';
import ContactUs from './components/pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="App" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        backgroundColor: 'var(--primary-white)' 
      }}>
        <Navbar />
        
        <main style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<TheProject />} />
            <Route path="/science" element={<Science />} />
            <Route path="/patients" element={<ForPatients />} />
            <Route path="/contributors" element={<Contributors />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;