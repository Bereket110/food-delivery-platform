import React from "react";
import "./About.css";
import Section_1 from "../../components/AboutPageComponents/Section_1/Section_1";
import Section_2 from "../../components/AboutPageComponents/Section_2/Section_2";
import Section_3 from "../../components/AboutPageComponents/Section_3/Section_3";
import Section_4 from "../../components/AboutPageComponents/Section_4/Section_4";
import Section_5 from "../../components/AboutPageComponents/Section_5/Section_5";
import CallToAction from "../Services/CallToAction";
const About = () => {
  return (
    <>
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <CallToAction />
    </>
  );
};

export default About;
