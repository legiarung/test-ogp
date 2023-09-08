import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import { Collectiton } from './components/Collectiton';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/collection/*" element={<Collectiton />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
