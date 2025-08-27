import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline();
    
    tl.fromTo(heroRef.current, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo('.hero-title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5"
    )
    .fromTo('.hero-subtitle', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.3"
    )
    .fromTo('.hero-buttons', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.3"
    );

    // Typing effect
    const text = "SOFTWARE ENGINEER";
    let index = 0;
    
    const typeWriter = () => {
      if (index < text.length) {
        textRef.current.textContent = text.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 100);
      }
    };

    setTimeout(typeWriter, 2000);
  }, []);

  const heroVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        delay: 0.3
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.6
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 8,
        delay: 0.9
      }
    }
  };

  const buttonsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 1.2,
        staggerChildren: 0.2
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 1.5,
        staggerChildren: 0.1
      }
    }
  };

  const socialItemVariants = {
    hidden: { opacity: 0, scale: 0, rotate: 360 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const sphereVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.5, rotateY: 180 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1, 
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
        delay: 0.5
      }
    }
  };

  

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="hero-lines"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="hero-title font-audiowide"
              variants={titleVariants}
            >
              HELLO, I'M
              <span className="hero-name font-orbitron"> CHITRANSH KOSHTA</span>
            </motion.h1>

            <motion.h2 
              className="hero-subtitle font-chakra"
              variants={subtitleVariants}
            >
              <span ref={textRef} className="typing-text"></span>
              <span className="cursor">|</span>
            </motion.h2>

            <motion.p 
              className="hero-description"
              variants={descriptionVariants}
            >
              Software Engineer specializing in web development and data structures. 
              Building responsive, efficient, and maintainable applications with modern frameworks.
            </motion.p>

            <motion.div 
              className="hero-buttons"
              variants={buttonsVariants}
            >
              <motion.a
                href="#projects"
                className="btn btn-primary"
                variants={buttonVariants}
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>

            <motion.div 
              className="hero-social"
              variants={socialVariants}
            >
              <motion.a
                href="https://github.com/chitransh-usar"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialItemVariants}
                whileHover={{ scale: 1.2, y: -5, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/chitranshk/"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialItemVariants}
                whileHover={{ scale: 1.2, y: -5, rotate: -360 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-3d"
            variants={sphereVariants}
            initial="hidden"
            animate="visible"
          >
            <Spline scene="https://prod.spline.design/B7s41turuOQKcXml/scene.splinecode" />
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero; 