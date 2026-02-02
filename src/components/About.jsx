import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.css';
import ProfileImg from '../assets/images/myimage.png';
import Resume from '../assets/Ankit_Resume.pdf';

const stats = [
  { number: 2, suffix: '+', label: 'Years Experience', icon: '🏆' },
  { number: 20, suffix: '+', label: 'Projects Completed', icon: '🚀' },
  { number: 10, suffix: '+', label: 'Happy Clients', icon: '😊' },
  { number: 99, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
];

const timelineItems = [
  {
    year: '2024',
    title: 'Bachelor\'s Degree',
    institution: 'I.K.G. Punjab Technical University',
    description: 'Graduated with honors in Computer Science',
  },
  {
    year: '2023',
    title: 'MERN Stack Developer',
    institution: 'Self-Learning & Projects',
    description: 'Mastered React, Node.js, Express, and MongoDB through intensive projects',
  },
  {
    year: '2022',
    title: 'Web Development',
    institution: 'Online Courses',
    description: 'Started journey with HTML, CSS, JavaScript',
  },
];

const skills = [
  'React.js', 'Node.js', 'Express', 'MongoDB', 
  'TypeScript', 'Tailwind CSS', 'JavaScript', 'REST APIs'
];

const About = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Passionate about creating <span className="text-gradient">amazing digital experiences</span>
          </h2>
        </motion.div>

        <div className="about-content">
          {/* Left Side - Profile */}
          <motion.div 
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="profile-container">
              <div className="profile-card">
                <div className="profile-image-wrapper">
                  <div className="profile-decoration" />
                  <img src={ProfileImg} alt="Ankit Paswan" className="profile-img" />
                </div>
                <div className="profile-shape" />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="about-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Stats Grid */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <span className="stat-icon">{stat.icon}</span>
                  <div className="stat-number">
                    {isMounted && (
                      <CountUpAnimation 
                        end={stat.number} 
                        duration={2000} 
                        suffix={stat.suffix} 
                      />
                    )}
                  </div>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Bio Text */}
            <div className="bio-section">
              <h3 className="bio-title">Hello, I'm Ankit Paswan</h3>
              <p className="bio-text">
                A passionate Web Designer, Front-end Developer, MERN Stack Developer, 
                and Freelancer from Madhubani Dist, Bihar, India. I graduated with a 
                Bachelor's Degree in Computer Science from I.K.G. Punjab Technical 
                University (IKGPTU) in 2024.
              </p>
              <p className="bio-text">
                I love combining the world of logic and creative design to make 
                eye-catching, accessible, and user-friendly websites and applications.
                My development philosophy revolves around building user-centric interfaces 
                backed by powerful, maintainable code.
              </p>
              
              {/* Skills Tags */}
              <div className="skills-tags">
                {skills.map((skill, index) => (
                  <motion.span 
                    key={index}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="about-cta">
                <motion.a 
                  href={Resume}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </motion.a>
                <motion.a 
                  href="#contact"
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </div>
            </div>

            {/* Timeline */}
            <div className="timeline-section">
              <h3 className="timeline-title">My Journey</h3>
              <div className="timeline">
                {timelineItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                      <span className="timeline-year">{item.year}</span>
                      <h4 className="timeline-title-item">{item.title}</h4>
                      <span className="timeline-institution">{item.institution}</span>
                      <p className="timeline-description">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Counter Animation Component
const CountUpAnimation = ({ end, duration, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;
      
      if (progress < 1) {
        setCount(Math.floor(progress * end));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <>{count}{suffix}</>;
};

export default About;

