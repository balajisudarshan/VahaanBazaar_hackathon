import React from 'react';
import Login from './pages/Login';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import FeaturedVehicles from './Components/FeaturedVehicles';
import AllVehicles from './pages/AllVehicles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Hero />} />
        <Route path="/allVehicles" element={<AllVehicles />} />
      </Routes>
    </Router>
  );
};

export default App;
