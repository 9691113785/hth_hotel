import React, { useState } from 'react';
import './Header.css';
import logo from '../assests/hth.jpg'; // Make sure the path is correct
import { useNavigate } from "react-router-dom"


const Header = ({ city, onDropdownChange }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
const navigate = useNavigate();
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const navigatetohome = ()=>{
    navigate('/');
  }
const navigatetoAbout = ()=>{
  navigate('/about');
}
const navigatetoContact = () =>{
  navigate('/contact')
}
  return (
    <nav className="navbar1">
      <div className={isNavOpen ? 'container-block' : 'container1'}>
        <a className="navbar-brand1 d-flex">
          <img src={logo} alt="Logo" className="logo"  onClick={navigatetohome}/>
          <ul className="navbar-nav1">
            <li className="nav-item1">
              <select
              
                value={city}
                onChange={onDropdownChange}
                className="dropdown"
              >
                <option value="">Select Your City</option>
                {city.map((cityName) => (
                  <option key={cityName} value={cityName}>{cityName}</option>
                ))}
              </select>
            </li>

          </ul>
        </a>


        <button className="navbar-toggler" onClick={toggleNav}>
          &#9776;
        </button>
        <div className={`navbar-collapse ${isNavOpen ? 'open' : ''}`} id="navbarNav">
          <div className='navbar-nav1'>
          <b onClick={navigatetoAbout}>About</b>
          </div>
          <div className='navbar-nav1'>
            <b onClick={navigatetoContact}>Contact</b>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
