import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaInstagram,
  FaPaperPlane
} from 'react-icons/fa';

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: 'Location',
    details: 'Madhubani, Bihar, India',
    subdetails: 'Available for remote work',
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    details: 'ankitpaswan192@gmail.com',
    subdetails: 'Drop me a line',
  },
  {
    icon: FaPhone,
    title: 'Phone',
    details: '+91 8541806579',
    subdetails: 'Mon - Fri: 9AM - 7PM',
  },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/AnkitPaswan', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ankit-paswan-263a66210/', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/i_AnkitPaswan', label: 'Twitter' },
  { icon: FaInstagram, href: 'https://www.instagram.com/ankit_aanand_192/', label: 'Instagram' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData(e.target);
    formDataToSend.append('access_key', 'ec18fa89-18a3-44ab-942e-af5e60bff429');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await res.json();
      
      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to send message' });
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Something went wrong' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let's collaborate and create something amazing!
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-text">
              I'm currently available for freelance projects and full-time opportunities. 
              Feel free to reach out through any of the channels below.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="contact-item glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                >
                  <div className="contact-item-icon">
                    <info.icon />
                  </div>
                  <div className="contact-item-content">
                    <h4>{info.title}</h4>
                    <p className="main-details">{info.details}</p>
                    <p className="sub-details">{info.subdetails}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="contact-social">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <h3 className="form-title">Send a Message</h3>
              
              <div className="form-row">
                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    required
                  />
                  <label htmlFor="name">Your Name</label>
                </motion.div>

                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    required
                  />
                  <label htmlFor="email">Your Email</label>
                </motion.div>
              </div>

              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label htmlFor="subject">Subject</label>
              </motion.div>

              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  rows="5"
                  required
                />
                <label htmlFor="message">Your Message</label>
              </motion.div>

              {submitStatus && (
                <motion.div 
                  className={`form-status ${submitStatus.type}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="submit-btn btn btn-primary"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="loading-spinner" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

