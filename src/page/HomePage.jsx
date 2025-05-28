import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/contact";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Work from "../components/Work";

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
