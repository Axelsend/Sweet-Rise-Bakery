import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-container">

      <div className="footer-section1">
        <h2 className="footer-logo">Sweet Rise <span>Bakery</span></h2>
        <p>Baked with love. Risen to perfection.</p>
        <Link to="/contact">
          <button className="footer-cta-button">Order Now</button>
        </Link>
      </div>

      <div className="footer-section2">
        <h4>Quick Links</h4>
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="footer-section3">
        <h4>Visit Us</h4>
        <ul className="contact-info">
          <li><span className="icon">📍</span> 123 Main Street, Toledo, OH</li>
          <li><span className="icon">📞</span> (419) 555-0192</li>
          <li><span className="icon">🕐</span> Mon–Fri: 7am–6pm</li>
          <li><span className="icon">🕐</span> Sat–Sun: 7am–4pm</li>
        </ul>
      </div>

    </div>

    <div className="footer-bottom">
      <p>© 2025 Sweet Rise Bakery. All rights reserved.</p>
      <p>Toledo, OH</p>
    </div>
  </footer>
);

export default Footer;