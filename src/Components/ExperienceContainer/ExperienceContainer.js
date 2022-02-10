import React from 'react';
import Experience from '../ExperienceBox/Experience';
import { Element } from 'react-scroll';
import "./ExperienceContainer.css";

const ExperienceContainer = () => {
  return (
      <Element className="experienceContainer" id="exp">
          <h1>Experience</h1>
          <div className="experienceContainer__info">
              <Experience number="0+" title="Client"/>
              <Experience number="5+" title="Projects" style={{backgroundColor:"#f64c08"}}/>
              <Experience number="0+" title="Students got trained"/>
              <Experience number="2+" title="Learning"/>
          </div>
      </Element>
  );
};

export default ExperienceContainer;
