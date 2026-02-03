import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Work.css';
import data from '../utils/WorksData';
import { FaExternalLinkAlt, FaGithub, FaCode, FaTimes } from 'react-icons/fa';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'react', label: 'React' },
];

const projectTechBadges = {
  'Trader\'s Blog': ['React.js', 'Node.js', 'Express', 'MongoDB','Redis', 'Recharts', 'TipTap', 'JWT', 'Axios', 'Postman', 'Git', 'GitHub', 'Responsive Design'],
  'NeoTreasure': ['React.js', 'Node.js', 'Express', 'MongoDB','Mongoose','Redux Toolkit', 'Tailwind CSS','ethers.js', 'JWT', 'WebSocket','OpenSea API', 'Axios','Postman', 'Git', 'GitHub','Framer Motion','Responsive Design'],
  'Techie-Tutorials': ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Axios','Postman', 'Git', 'GitHub', 'TipTap','Rich Text Editor', 'Responsive Design'],
  'Tech-market': ['React.js','TypeScript', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Axios', 'Postman','Git', 'GitHub', 'Responsive Design'],
  'Vegan-food': ['React.js', 'Node.js', 'Express', 'MongoDB','CSS', 'Stripe','Canva', 'Git', 'GitHub'],
  'Weather-Application': ['React.js', 'Tailwind CSS', 'OpenWeather API'],
  'To-Do List': ['React.js', 'CSS', 'Bootstrap', 'LocalStorage'],
  'Personal Portfolio': ['React.js', 'CSS', 'Framer Motion'],
  'NewsPortal': ['React.js', 'Tailwind CSS', 'News API'],
};

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all' 
    ? data 
    : data.filter(project => {
        if (activeCategory === 'fullstack') {
          return ['Trader\'s Blog','NeoTreasure', 'Techie-Tutorials', 'Tech-market', 'Vegan-food'].includes(project.name);
        }
        if (activeCategory === 'frontend') {
          return ['Weather-Application', 'To-Do List', 'NewsPortal'].includes(project.name);
        }
        if (activeCategory === 'react') {
          return data.filter(p => p.name !== 'Personal Portfolio').includes(project);
        }
        return true;
      });

  const getTechBadges = (projectName) => {
    return projectTechBadges[projectName] || ['React.js', 'CSS', 'JavaScript'];
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">My Projects</span>
          <h2 className="section-title">
            Recent <span className="text-gradient">Work</span>
          </h2>
          <p className="section-subtitle">
            Here are some of the projects I've worked on
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="projects-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                className="project-card glass-card"
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image-wrapper">
                  <div 
                    className="project-image-bg"
                    style={{ background: project.backgound }}
                  />
                  <img 
                    src={project.img} 
                    alt={project.name}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <motion.button 
                      className="project-view-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaCode />
                    </motion.button>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">
                    {project.description.slice(0, 100)}...
                  </p>
                  <div className="project-tech">
                    {getTechBadges(project.name).slice(0, 3).map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                    {getTechBadges(project.name).length > 3 && (
                      <span className="tech-more">+{getTechBadges(project.name).length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* More Projects CTA */}
        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a 
            href="https://github.com/AnkitPaswan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> View All Projects
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>
              
              <div className="modal-image-wrapper">
                <div 
                  className="modal-image-bg"
                  style={{ background: selectedProject.backgound }}
                />
                <img 
                  src={selectedProject.img} 
                  alt={selectedProject.name}
                  className="modal-image"
                />
              </div>
              
              <div className="modal-body">
                <h2 className="modal-title">{selectedProject.name}</h2>
                
                <div className="modal-tech">
                  {getTechBadges(selectedProject.name).map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <p className="modal-description">{selectedProject.description}</p>
                
                <div className="modal-links">
                  <motion.a 
                    href={selectedProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                  <motion.a 
                    href="https://github.com/AnkitPaswan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;

