import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Code, Target, Award } from 'lucide-react';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // About animations - Zoom in with flip effects
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        delay: 0.2
      }
    }
  };

  const introVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.4
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 8,
        delay: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.5, rotateY: 180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 100, rotateZ: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.8
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 8,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            className="section-title"
            variants={titleVariants}
          >
            ABOUT THE DEVELOPER
          </motion.h2>

          <motion.div
            className="about-intro"
            variants={introVariants}
          >
            <p>
              A passionate Software Engineer with a deep love for creating innovative digital solutions. 
              My journey in technology is driven by curiosity and a desire to build applications that make a difference.
            </p>
          </motion.div>

          <motion.div
            className="about-stats"
            variants={statsVariants}
          >
            <motion.div className="stat-item" variants={statVariants}>
              <div className="stat-icon">
                <User size={32} />
              </div>
              <div className="stat-content">
                <div className="stat-number">1+</div>
                <div className="stat-label">Years Experience in WEB DEV</div>
              </div>
            </motion.div>

            <motion.div className="stat-item" variants={statVariants}>
              <div className="stat-icon">
                <Code size={32} />
              </div>
              <div className="stat-content">
                <div className="stat-number">10+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </motion.div>

            <motion.div className="stat-item" variants={statVariants}>
              <div className="stat-icon">
                <Target size={32} />
              </div>
              <div className="stat-content">
                <div className="stat-number">3+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </motion.div>

            <motion.div className="stat-item" variants={statVariants}>
              <div className="stat-icon">
                <Award size={32} />
              </div>
              <div className="stat-content">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-content-grid"
            variants={contentVariants}
          >
            <motion.div className="about-text" variants={paragraphVariants}>
              <h3>My Journey</h3>
              <p>
                I started my journey in software development with a fascination for how code can transform ideas into reality. 
                From my first "Hello World" to building full-stack applications, every project has been a learning experience 
                that has shaped my approach to problem-solving and development.
              </p>
              <p>
                My expertise spans across the full development stack, from creating responsive user interfaces with modern 
                frameworks to designing robust backend architectures. I believe in writing clean, maintainable code and 
                staying updated with the latest industry trends and best practices.
              </p>
            </motion.div>

            <motion.div className="about-text" variants={paragraphVariants}>
              <h3>My Approach</h3>
              <p>
                I approach every project with a focus on user experience, performance, and scalability. Whether it's a 
                simple landing page or a complex web application, I ensure that the end result is not just functional 
                but also intuitive and engaging for users.
              </p>
              <p>
                I'm passionate about continuous learning and always eager to take on new challenges. My goal is to create 
                digital solutions that not only meet the current requirements but are also future-proof and adaptable to 
                evolving needs.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 