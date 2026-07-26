
import React, { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <SmoothScroll>
      <div className="App">
        <CustomCursor />
        
        <AnimatePresence>
          {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
        </AnimatePresence>

        <div className="app-bg"></div>
        <Header />
        
        <main>
          <div id="home"><Home /></div>
          <div id="about"><About /></div>
          <div id="projects"><Projects /></div>
          <div id="skills"><Skills /></div>
          <div id="contact"><Contact /></div>
        </main>
      </div>
    </SmoothScroll>
  );
}

export default App;