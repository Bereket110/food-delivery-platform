import React from "react";
import "./About.css";
import AboutHero from "../../components/AboutPageComponents/AboutHero/AboutHero";
import AboutHeader1 from "../../components/AboutPageComponents/AboutHeader1/AboutHeader1";
import AboutHeader2 from "../../components/AboutPageComponents/AboutHeader2/AboutHeader2";
const About = () => {
  return (
    <>
      <AboutHero />
      <AboutHeader1 />
      <AboutHeader2 />
    </>
  );
};

export default About;
