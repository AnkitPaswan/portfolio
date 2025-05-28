

import React from 'react'
import ProfileImg from '../assets/images/profileImg.png'
import Resume from '../assets/AnkitResume.pdf'
import './About.css'
import Typing from '../utils/Typing'

export default function About(){
  return (
   <>
    <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src={ProfileImg} alt=""/>
                </div>
                <div className="column right">
                    <div className="text">I'm Ankit and I'm a <span className="typing-2">
                        <Typing/>
                        </span></div>

                    <p>Hello, world! I'm Ankit Paswan, a Web designer, Front-end developer, MERN Stack developer, and Freelancer from
                        Madhubani Dist, Bihar, India. I have done my Batchelor's Degree in Computer Science from I.K.G. Punjab
                        Technical University(IKGPTU) in 2024. I Love to combine the world of logic and creative design to make
                        eye-catching, accessible, and user-friendly websites and applications.</p>
                    <a href={Resume} download rel="noopener noreferrer" target="_blank">
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}


   