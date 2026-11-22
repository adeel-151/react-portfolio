import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('aq-portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('aq-portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="App">
      <AnimatePresence>
        {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="app-bg"></div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <div id="home"><Home theme={theme} /></div>
        <div id="projects"><Projects /></div>
        <div id="skills"><Skills /></div>
        <div id="about"><About /></div>
        <div id="contact"><Contact /></div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
