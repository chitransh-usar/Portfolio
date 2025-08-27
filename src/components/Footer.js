import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <span className="copyright">© {currentYear} Chitransh Koshta. All rights reserved.</span>
        </div>
        <div className="footer-made-by">
          <span className="made-by">Made with ❤️ by Chitransh</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 