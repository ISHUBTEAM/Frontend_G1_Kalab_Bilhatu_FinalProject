import React from 'react';
import logo from '../assets/ishublogo.jpg';
import './Footer.css';
import { FaLinkedin, FaYoutube, FaTelegram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="islogo" />
          <h2 className="name">Ishub Frontend</h2>
        </div>

        {/* Links Section */}
        <div className="links">
          <div className="column">
            <h4>About</h4>
            <ul>
              <li><a href="/Mentors">Mentors</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="/Community">Announcements</a></li>
            </ul>
          </div>
          <div className="column">
            <h4>Resources</h4>
            <ul>
              <li><a href="/Courses">Courses</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="/Resources">Resources</a></li>
            </ul>
          </div>
          <div className="column">
            <h4>Support</h4>
            <ul>
              <li><a href="/Courses">Help Center</a></li>
              <li><a href="/">FAQs</a></li>
              <li><a href="/Resources">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className="social">
            <h4>Social</h4>
            <ul className="social-icons">
                <li><a href="https://www.linkedin.com/company/information-system-hub/?viewAsMember=true"><FaLinkedin /></a></li>
                <li><a href="https://www.youtube.com/@InformationSystemTalks"><FaYoutube /></a></li>
                <li><a href="https://t.me/InformationSystemsHub"><FaTelegram /></a></li>
            </ul>
            </div>

      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>&copy; 2025 IS Hub Frontend. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
