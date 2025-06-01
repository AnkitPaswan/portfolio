import React from 'react'
import './Contact.css'
import { FaUser } from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
   <>
    <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>If you have got a Project in your mind, Why not get in touch? Let's work together. I'm available
                        for interesting freelance projects or work, Big or Small. And we are here to answer any
                        questions you may have about our I experience. Reach out to us and we'll respond as soon as
                        possible we can.
                    </p>

                    <div className="icons">
                        <div className="row">
                            <FaUser className="icon" />
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Ankit Paswan</div>
                            </div>
                        </div>
                        <div className="row">
                        <FaMapMarkerAlt className='icon'/>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Madhubani, Bihar</div>
                            </div>
                        </div>
                        <div className="row">
                        <FaEnvelope className='icon'/>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">ankitpaswan192@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message me</div>
                    <form  action="https://formspree.io/f/mknenlqg"
                    method="POST">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" name="name"id="name" placeholder="Name" required/>
                            </div>
                            <div className="field email">
                                <input type="email" name="email" id="email" placeholder="Email" required/>
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" name="message" id="message" placeholder="Subject" required/>
                        </div>
                        <div className="field textarea">
                            <textarea cols="30" rows="10" name="message" placeholder="Message.." required></textarea>
                        </div>
                        <div className="button-area">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}
