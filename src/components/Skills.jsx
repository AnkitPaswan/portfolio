/* eslint-disable no-unused-vars */
import React from "react";
import "./Skills.css";
import { motion } from "motion/react";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false }}
      >
        <div className="max-width">
          <h2 className="title">My skills</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">My creative skills & experiences.</div>
              <p>
                As a full-stack web developer, I combine technical expertise
                with design intuition to craft seamless, responsive, and
                scalable digital experiences. My development philosophy revolves
                around building user-centric interfaces backed by powerful,
                maintainable code. I have 2+ years of experience with HTML/CSS,
                React.js, Node.js, and MongoDb skills and I'm always eager to
                learn and expand my skills. I have done many projects like a
                portfolio website, a To-do web-app, and a Weather application. I
                have also worked on project called "Vegan-food Application" and
                "Bazaar ecommerce website" using MERN tech. In this project, I
                have used MongoDb for authentication and real-time database. I
                have used React.js for the front end and Node.js for the back
                end. I have used JavaScript as a programming language.
              </p>
              <a href="#">Read more</a>
            </div>
            <div className="column right">
              <div className="bars">
                <div className="info">
                  <span>HTML/CSS</span>
                  <span>95%</span>
                </div>
                <div className="line html"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Tailwind/Bootstrap</span>
                  <span>80%</span>
                </div>
                <div className="line tailwind"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>JavaScript</span>
                  <span>90%</span>
                </div>
                <div className="line js"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>TypeScript</span>
                  <span>60%</span>
                </div>
                <div className="line ts"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>React.js</span>
                  <span>80%</span>
                </div>
                <div className="line react"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Node.js</span>
                  <span>70%</span>
                </div>
                <div className="line node"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Express</span>
                  <span>85%</span>
                </div>
                <div className="line express"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>MongoDB</span>
                  <span>85%</span>
                </div>
                <div className="line mongo"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
