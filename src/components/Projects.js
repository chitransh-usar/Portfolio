import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye, Code, Globe } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' }
  ];

  const projects = [
    {
      id: 1,
      title: 'CRAFTiq Website',
      description: 'A fully animated, interactive website featuring rich visuals, smooth transitions, and responsive design. Showcases advanced frontend skills with image-driven layouts, engaging animations, and intuitive user experience.',
      image: '/1.png',
      category: 'frontend',
      technologies: ['Shery.JS', 'GSAP', 'HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://chitransh-usar.github.io/CRAFTiq/',
      githubUrl: 'https://github.com/chitransh-usar/CRAFTiq',
      features: ['Fully Animated', 'Interactive Design', 'Responsive Layout', 'Smooth Transitions']
    },
    {
      id: 2,
      title: 'Admin-Employee Dashboard',
      description: 'A comprehensive dashboard system allowing users (admin or employee) to log in with Gmail and password. Features role-based access control and user management functionality.',
      image: '/2.png',
      category: 'frontend',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript'],
      liveUrl: 'https://admin-employ-dashboard.vercel.app/',
      githubUrl: 'https://github.com/chitransh-usar/Admin-Employee-Dashboard',
      features: ['User Authentication', 'Role-based Access', 'Admin Panel', 'Employee Portal']
    },
    {
      id: 3,
      title: 'AniRelm',
      description: 'A FULLSTACK website where users can find and upload mobile and desktop wallpapers. Built with modern web technologies and features a comprehensive wallpaper management system.',
      image: '/3.png',
      category: 'fullstack',
      technologies: ['Node.js', 'Express.js', 'MongoDB Atlas', 'GSAP', 'HTML/CSS'],
      liveUrl: 'https://trendy-anime-anirelm.onrender.com',
      githubUrl: 'https://github.com/chitransh-usar/AniRelm',
      features: ['Wallpaper Upload', 'User Management', 'Search & Filter', 'Responsive Design']
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'web': return <Globe size={20} />;
      case 'fullstack': return <Code size={20} />;
      case 'frontend': return <Eye size={20} />;
      default: return <Code size={20} />;
    }
  };

  // Projects animations - Slide in with scale effects
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        delay: 0.2
      }
    }
  };

  const introVariants = {
    hidden: { opacity: 0, x: 100, rotateY: 90 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.4
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 8,
        delay: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const filterButtonVariants = {
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

  const projectsGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 1.2
      }
    }
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            className="section-title"
            variants={titleVariants}
          >
            DIGITAL CREATIONS
          </motion.h2>

          <motion.div
            className="projects-intro"
            variants={introVariants}
          >
            <p>
              Explore my portfolio of innovative projects that showcase cutting-edge 
              technology and creative problem-solving. Each project represents a unique 
              challenge and demonstrates my passion for building exceptional digital experiences.
            </p>
          </motion.div>

          <motion.div
            className="category-filter"
            variants={filterVariants}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
                variants={filterButtonVariants}
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {getCategoryIcon(category.id)}
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="projects-grid"
            variants={projectsGridVariants}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  variants={projectCardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -50, scale: 0.9 }}
                  whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
                  layout
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <motion.div
                        className="project-links"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={24} />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: -360 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={24} />
                        </motion.a>
                      </motion.div>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="tech-tag"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.8 + techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="project-features">
                      <h4>Key Features:</h4>
                      <ul>
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 1 + featureIndex * 0.1 }}
                          >
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="projects-cta"
            variants={ctaVariants}
          >
            <p>Interested in working together? Let's create something amazing!</p>
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 