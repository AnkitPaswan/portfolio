import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';
import ProfileImg from '../assets/images/myimage.png';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { SiNextdotjs, SiRedux, SiMongodb, SiExpress, SiTypescript } from 'react-icons/si';

const roles = [
  'Full Stack Developer',
  'MERN Stack Expert',
  'UI/UX Designer',
  'Freelancer'
];

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="hero" id="home" ref={containerRef}>
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
        <div className="grid-overlay" />
      </div>

      <motion.div 
        className="hero-content container"
        style={{ y, opacity }}
      >
        <div className="hero-left">
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-dot" />
            Available for hire
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hi, I'm <span className="text-gradient">Ankit</span>
            <br />
            Creative Developer
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I craft stunning digital experiences with modern technologies. 
            Passionate about building beautiful, functional, and user-centric web applications.
          </motion.p>

          <motion.div 
            className="role-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="role-label">I specialize in</span>
            <div className="role-wrapper">
              {roles.map((role, index) => (
                <motion.span
                  key={index}
                  className="role-text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                >
                  {role}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a 
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div 
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { icon: FaGithub, href: 'https://github.com/AnkitPaswan' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ankit-paswan-263a66210/' },
              { icon: FaTwitter, href: 'https://twitter.com/i_AnkitPaswan' },
              { icon: FaInstagram, href: 'https://www.instagram.com/ankit_aanand_192/' },
              { icon: FaEnvelope, href: 'mailto:ankitpaswan192@gmail.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="profile-wrapper">
            <div className="profile-glow" />
            <div className="profile-ring" />
            <motion.img 
              src={ProfileImg} 
              alt="Ankit Paswan" 
              className="profile-image"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <div className="floating-badges">
              <motion.div 
                className="floating-badge badge-1"
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="badge-glow" style={{ background: 'radial-gradient(circle, rgba(97,218,251,0.4) 0%, transparent 70%)' }} />
                <span className="badge-icon"><FaReact color="#61DAFB" size={20} /></span>
                <span className="badge-text">React</span>
              </motion.div>
              <motion.div 
                className="floating-badge badge-2"
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="badge-glow" style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.4) 0%, transparent 70%)' }} />
                <span className="badge-icon"><SiNextdotjs color="#FFFFFF" size={20} /></span>
                <span className="badge-text">Next.js</span>
              </motion.div>
              <motion.div 
                className="floating-badge badge-3"
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="badge-glow" style={{ background: 'radial-gradient(circle, rgba(247,223,30,0.4) 0%, transparent 70%)' }} />
                <span className="badge-icon"><FaJs color="#F7DF1E" size={20} /></span>
                <span className="badge-text">JavaScript</span>
              </motion.div>
              <motion.div 
                className="floating-badge badge-4"
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="badge-glow" style={{ background: 'radial-gradient(circle, rgba(118,74,188,0.4) 0%, transparent 70%)' }} />
                <span className="badge-icon"><SiRedux color="#764ABC" size={20} /></span>
                <span className="badge-text">Redux</span>
              </motion.div>
              <motion.div 
                className="floating-badge badge-5"
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="badge-glow" style={{ background: 'radial-gradient(circle, rgba(51,153,51,0.4) 0%, transparent 70%)' }} />
                <span className="badge-icon"><FaNodeJs color="#339933" size={20} /></span>
                <span className="badge-text">Node.js</span>
              </motion.div>
              <motion.div 
                className="floating-badge badge-6"
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="badge-glow" style={{ background: 'radial-gradient(circle, rgba(71,162,72,0.4) 0%, transparent 70%)' }} />
                <span className="badge-icon"><SiMongodb color="#47A248" size={20} /></span>
                <span className="badge-text">MongoDB</span>
              </motion.div>
              <motion.div 
                className="floating-badge badge-7"
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.7 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="badge-glow" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)' }} />
                <span className="badge-icon"><SiExpress color="#FFFFFF" size={20} /></span>
                <span className="badge-text">Express</span>
              </motion.div>
              <motion.div 
                className="floating-badge badge-8"
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.9 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="badge-glow" style={{ background: 'radial-gradient(circle, rgba(49,120,198,0.4) 0%, transparent 70%)' }} />
                <span className="badge-icon"><SiTypescript color="#3178C6" size={20} /></span>
                <span className="badge-text">TypeScript</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-line">
          <motion.div 
            className="scroll-dot"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

