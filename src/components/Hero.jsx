import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';
import ProfileImg from '../assets/images/myimage.png';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiExpress, SiTypescript } from 'react-icons/si';

const roles = [
  'Full Stack Developer',
  'MERN Stack Expert',
  'UI/UX Designer',
  'Freelancer'
];

const floatingBadges = [
  { icon: FaReact, color: '#61DAFB', name: 'React', position: 'top-right' },
  { icon: SiNextdotjs, color: '#FFFFFF', name: 'Next.js', position: 'top-left' },
  { icon: FaNodeJs, color: '#339933', name: 'Node.js', position: 'bottom-right' },
  { icon: SiExpress, color: '#FFFFFF', name: 'Express', position: 'bottom-left' },
  { icon: SiMongodb, color: '#47A248', name: 'MongoDB', position: 'right-center' },
  { icon: SiTypescript, color: '#3178C6', name: 'TypeScript', position: 'left-center' },
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
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
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
            <span className="badge-dot"></span>
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
            {/* Gradient Rings */}
            <div className="gradient-ring ring-1"></div>
            <div className="gradient-ring ring-2"></div>
            <div className="gradient-ring ring-3"></div>
            
            {/* Profile Glow */}
            <div className="profile-glow"></div>
            
            <motion.img 
              src={ProfileImg} 
              alt="Ankit Paswan" 
              className="profile-image"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            
            {/* Floating Tech Badges */}
            <div className="floating-badges">
              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={badge.name}
                  className={`floating-badge badge-${badge.position}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.15) }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div 
                    className="badge-icon-bg"
                    style={{ background: `radial-gradient(circle, ${badge.color}33 0%, transparent 70%)` }}
                  ></div>
                  <span className="badge-icon">
                    <badge.icon color={badge.color} size={18} />
                  </span>
                  <span className="badge-text">{badge.name}</span>
                </motion.div>
              ))}
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
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

