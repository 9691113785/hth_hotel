import React from 'react';
import logo from '../assests/hth.jpg';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h5>Address</h5>
          <p>Goel Properties Dealer Office No.D138-E, Gali No. 06, Laxmi Nagar Delhi, 110092</p>
        </div>
        <div className="col-md-4">
          <h5>Office Helpline No.</h5>
          <p>+91-9235538380</p>
        </div>
        <div className="col-md-2 logo-container">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer