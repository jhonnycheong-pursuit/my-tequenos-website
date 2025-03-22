import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import FullMenu from './components/FullMenu';
import AboutUs from './components/AboutUs';
import Order from './components/Order';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<FullMenu />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
