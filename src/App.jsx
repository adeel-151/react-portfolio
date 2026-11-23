import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
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

  // Lenis smooth momentum scrolling with anchor link support
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    window.__lenis = lenis;

    const handleAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl, { offset: -70 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

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
