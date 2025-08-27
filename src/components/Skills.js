import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Web Development',
      skills: [
        { name: 'HTML', level: 90, color: '#E34F26' },
        { name: 'CSS', level: 85, color: '#1572B6' },
        { name: 'JavaScript', level: 80, color: '#F7DF1E' },
        { name: 'React.js', level: 80, color: '#61DAFB' },
        { name: 'Node.js', level: 75, color: '#339933' },
        { name: 'Express.js', level: 70, color: '#000000' }
      ]
    },
    {
      category: 'Programming Languages',
      skills: [
        { name: 'C', level: 75, color: '#A8B9CC' },
        { name: 'C++', level: 70, color: '#00599C' },
        { name: 'Data Structures', level: 75, color: '#FF6B6B' }
      ]
    },
    {
      category: 'Animation & Design',
      skills: [
        { name: 'GSAP', level: 70, color: '#88CE02' },
        { name: 'Shery.js', level: 65, color: '#000000' },
        { name: 'Canva', level: 80, color: '#00C4CC' }
      ]
    },
    {
      category: 'Database & Tools',
      skills: [
        { name: 'MongoDB', level: 75, color: '#47A248' },
        { name: 'Git', level: 80, color: '#F05032' }
      ]
    }
  ];

  const technologies = [
    { name: 'React.js', icon: '⚛️', color: '#61DAFB' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'Express.js', icon: '⚡', color: '#000000' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'HTML', icon: '🌐', color: '#E34F26' },
    { name: 'CSS', icon: '🎨', color: '#1572B6' },
    { name: 'JavaScript', icon: '💛', color: '#F7DF1E' },
    { name: 'C', icon: '🔵', color: '#A8B9CC' },
    { name: 'C++', icon: '🔵', color: '#00599C' },
    { name: 'GSAP', icon: '✨', color: '#88CE02' },
    { name: 'Shery.js', icon: '🎭', color: '#000000' },
    { name: 'Canva', icon: '🎨', color: '#00C4CC' },
    { name: 'Data Structures', icon: '🧮', color: '#FF6B6B' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          TECHNICAL ARSENAL
        </h2>

        <div className="skills-intro">
          <p>
            My technical toolkit spans across the full development stack, 
            from frontend frameworks to backend architectures and cloud services. 
            Each technology has been carefully mastered through real-world projects.
          </p>
        </div>

        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.category} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-card">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ 
                          backgroundColor: skill.color,
                          width: `${skill.level}%`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="technologies-section">
          <h3>Technologies I Work With</h3>
          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <div key={tech.name} className="tech-card">
                <div className="tech-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-stats">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Programming Languages</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-label">Frameworks & Libraries</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Completed Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 