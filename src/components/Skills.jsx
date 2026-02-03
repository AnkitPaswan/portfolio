import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Skills.css';
import { 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3, FaGitAlt, FaGithub,
  FaDatabase, FaServer, FaCode, FaPalette, FaMobile
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiRedux, SiExpress, SiMongodb,
  SiNextdotjs, SiFirebase, SiVercel, SiPostman, SiFigma,SiRedis,SiSocketdotio
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
const skillCategories = [
  { id: 'all', label: 'All Skills' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'tools', label: 'Tools & Others' },
];

const skillsData = [
  // Frontend
  { name: 'React.js', icon: FaReact, level: 90, category: 'frontend', color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, level: 75, category: 'frontend', color: '#3178C6' },
  { name: 'JavaScript', icon: FaJs, level: 92, category: 'frontend', color: '#F7DF1E' },
  { name: 'HTML5', icon: FaHtml5, level: 95, category: 'frontend', color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3, level: 93, category: 'frontend', color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 88, category: 'frontend', color: '#06B6D4' },
  { name: 'Redux Toolkit', icon: SiRedux, level: 85, category: 'frontend', color: '#764ABC' },
  { name: 'Next.js', icon: SiNextdotjs, level: 70, category: 'frontend', color: '#000000' },
  
  // Backend
  { name: 'Node.js', icon: FaNodeJs, level: 82, category: 'backend', color: '#339933' },
  { name: 'Express.js', icon: SiExpress, level: 88, category: 'backend', color: '#FFFFFF' },
  { name: 'MongoDB', icon: SiMongodb, level: 85, category: 'backend', color: '#47A248' },
  { name: 'REST APIs', icon: FaServer, level: 90, category: 'backend', color: '#FF6B6B' },
  { name: 'Socket.io', icon: SiSocketdotio, level: 65, category: 'backend', color: '#FFFFFF' },
    { name: 'Redis', icon: SiRedis, level: 80, category: 'backend', color: '#C6302B' },

  
  // Tools & Others
  { name: 'Git', icon: FaGitAlt, level: 88, category: 'tools', color: '#F05032' },
  { name: 'GitHub', icon: FaGithub, level: 90, category: 'tools', color: '#181717' },
  { name: 'Figma', icon: SiFigma, level: 70, category: 'tools', color: '#F24E1E' },
  { name: 'Postman', icon: SiPostman, level: 85, category: 'tools', color: '#FF6C37' },
  { name: 'Vercel', icon: SiVercel, level: 80, category: 'tools', color: '#000000' },
  { name: 'VS Code', icon: VscVscode, level: 100, category: 'tools', color: '#24AEF3' },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section className="skills" id="skills">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">My Skills</span>
          <h2 className="section-title">
            Technologies I <span className="text-gradient">work with</span>
          </h2>
          <p className="section-subtitle">
            I've worked with a variety of technologies and tools to build amazing projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="skills-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillCategories.map((category) => (
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

        {/* Skills Grid */}
        <motion.div 
          className="skills-grid"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card glass-card"
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="skill-icon-wrapper">
                  <skill.icon 
                    className="skill-icon" 
                    style={{ color: skill.color }}
                  />
                  <div 
                    className="skill-icon-bg" 
                    style={{ background: `${skill.color}20` }}
                  />
                </div>
                
                <h3 className="skill-name">{skill.name}</h3>
                
                <div className="skill-progress">
                  <div className="skill-progress-bg">
                    <motion.div 
                      className="skill-progress-fill"
                      style={{ background: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Skill Summary */}
        <motion.div 
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="summary-card glass-card">
            <div className="summary-icon">💻</div>
            <div className="summary-content">
              <h3>Full Stack Development</h3>
              <p>Building scalable web applications with modern technologies</p>
            </div>
          </div>
          <div className="summary-card glass-card">
            <div className="summary-icon">🎨</div>
            <div className="summary-content">
              <h3>Responsive Design</h3>
              <p>Creating beautiful experiences across all devices</p>
            </div>
          </div>
          <div className="summary-card glass-card">
            <div className="summary-icon">⚡</div>
            <div className="summary-content">
              <h3>Performance Optimization</h3>
              <p>Fast and efficient code for optimal user experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

