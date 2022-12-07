import React from "react";

import "./about.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PersonalProject from "./PersonalProject";
import Introduction from "./Introduction";
import Contact from "./Contact";

function About() {
  return (
    <div className="containerAbout">
      <Introduction />
      <PersonalProject />
      <Contact />
    </div>
  );
}

export default About;
