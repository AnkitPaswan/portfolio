import { motion } from 'framer-motion';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/AnkitPaswan', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ankit-paswan-263a66210/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/i_AnkitPaswan', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://www.instagram.com/ankit_aanand_192/', label: 'Instagram' },
    { icon: FaEnvelope, href: 'mailto:ankitpaswan192@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const skills = [
    'React.js','Next.js', 'Node.js','Express.js', 'MongoDB','JavaScript', 'TypeScript','Tailwind CSS', 'Git/GitHub', 'REST APIs'
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="footer-logo">Er<span>.</span> Ankit</h2>
            <p className="footer-tagline">
              Passionate Full Stack Developer crafting beautiful and functional digital experiences.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="footer-title">Quick Links</h3>
            <ul className="links-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div 
            className="footer-skills"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="footer-title">Skills</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="footer-title">Get In Touch</h3>
            <div className="contact-info">
              <p>
                <strong>Location:</strong> Madhubani, Bihar, India
              </p>
              <p>
                <strong>Email:</strong> ankitpaswan192@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +91 8541806579
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="copyright">
            © {currentYear} <strong>Ankit Paswan</strong>. All rights reserved.
          </p>
          <p className="made-with">
            Made with <span className="heart">❤</span> by Er. Ankit Paswan
          </p>
        </motion.div>
      </div>

      {/* Footer Background */}
      <div className="footer-bg">
        <div className="footer-glow" />
      </div>
    </footer>
  );
};

export default Footer;

