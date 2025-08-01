import React from "react";
import "./Hero.css";
import HeroImg from "../assets/images/hero_illustration.svg";
import { FaFacebookF,FaArrowDown } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Typing from "../utils/Typing";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="home" id="home">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false }}
      >
        <div className="max-width">
          <div className="home-content ">
            <div className="column left">
              <div className="text-1">Hello, my name is</div>
              <div className="text-2">Ankit Paswan</div>
              <div className="text-3">
                {" "}
                And I'm a <Typing />
              </div>
              {/* <div className="text-3">And I'm a <span className="typing">{text}</span><span className="cursor">|</span></div> */}
              <div className="hire">
                <a href="#works">See my work</a>
              </div>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/ankit.aanand.980/"
                  target="_blank"
                  className="social-btn"
                >
                  <FaFacebookF className="icon" />
                </a>
                <a
                  href="https://twitter.com/i_AnkitPaswan?t=zfkdv7_axy5JUUl5GmEn6w&s=08"
                  target="_blank"
                  className="social-btn"
                >
                  <FaXTwitter className="icon" />
                </a>
                <a
                  href="https://www.instagram.com/ankit_aanand_192/"
                  target="_blank"
                  className="social-btn"
                >
                  <FaInstagram className="icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ankit-paswan-263a66210/"
                  target="_blank"
                  className="social-btn"
                >
                  <FaLinkedin className="icon" />
                </a>
                <a
                  href="https://github.com/AnkitPaswan"
                  target="_blank"
                  className="social-btn"
                >
                  <FaGithub className="icon" />
                </a>
              </div>
            </div>
            <div className="column right">
              <img src={HeroImg} id="image" />
            </div>
          </div>
          <div className="down-btn">
            <a href="#about"> 
              <FaArrowDown className="icon" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

{
  /* <a href="https://drive.google.com/file/d/1v0g2qk4r7xX3J6b5j8f1z4l8w5v5eO/view?usp=sharing"
                                target="_blank" className="btn">Download Resume</a> */
}
