import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div className="App">
        <CustomCursor />
        
        <AnimatePresence>
          {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
        </AnimatePresence>

        <div className="app-bg"></div>
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;