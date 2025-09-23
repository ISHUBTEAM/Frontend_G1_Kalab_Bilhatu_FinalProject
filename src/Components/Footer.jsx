import React from 'react';
import logo from '../assets/ishublogo.jpg';
import './Footer.css';
import { FaLinkedin, FaYoutube, FaTelegram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding */}
        <div className="footer-brand">
          <img src={logo} alt="IS Hub Logo" />
          <h2>IShub Frontend</h2>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li><a href="/Mentors">Mentors</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="/Community">Announcements</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="/Courses">Courses</a></li>
              <li><a href="/Resources">Guides</a></li>
              <li><a href="/Resources">Tools</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="/Courses">Help Center</a></li>
              <li><a href="/">FAQs</a></li>
              <li><a href="/Resources">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://www.linkedin.com/company/information-system-hub/" target="_blank"><FaLinkedin /></a></li>
            <li><a href="https://www.youtube.com/@InformationSystemTalks" target="_blank"><FaYoutube /></a></li>
            <li><a href="https://t.me/InformationSystemsHub" target="_blank"><FaTelegram /></a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()}  IShub Frontend. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
