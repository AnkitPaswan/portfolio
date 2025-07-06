/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Work from "../components/Work";
import { motion } from "motion/react"


const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
