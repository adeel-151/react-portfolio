
import React, { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      
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
  );
}

export default App;