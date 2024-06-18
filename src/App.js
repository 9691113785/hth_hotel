import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './Components/NotFound';
import Booking from './Components/Booking';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  const [city, setCity] = useState(["Satna", "Rewa", "Bhopal", "Hyderabad"]);
  const [dropdownValue, setDropdownValue] = useState('');

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
  };

  const handleSearch = () => {
    alert(`Selected: ${dropdownValue}`);
    // You can perform further actions based on the selected city
  };

  return (
    <div>
      <BrowserRouter>
      <Header city={city} onDropdownChange={handleDropdownChange} onSearch={handleSearch} />
      <Routes>
      
          <Route path="/" element={<Home city={dropdownValue} />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
