import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="home" smooth={true} duration={500}>
            <span className="logo-text font-orbitron">🤖 CHITRANSH</span>
            <div className="logo-glow"></div>
          </Link>
        </motion.div>

        <div className="nav-menu">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className="nav-link font-chakra"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                <div className="nav-link-underline"></div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? '0%' : '100%' }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              className="mobile-nav-link font-chakra"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 