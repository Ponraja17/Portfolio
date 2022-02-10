import React from 'react';
import { Element } from 'react-scroll';
import scrum from "../../assets/scrum.png";
import LinearProgress from "@material-ui/core/LinearProgress"
import "./SkillContainer.css";
const SkillContainer = () => {
  return(
  <Element className="skillContainer" id="skills">
      <div className="skillContainer__image">
          <img src={scrum} alt=""/>
      </div>
      <div className="skillContainer__text">
          <h2>SKILLSET</h2>
          <div className="skillContainer__skillSet">
              <h5>React</h5>
              <div className="skillContainer__slider skillContainer__slider1">
                  <LinearProgress variant="determinate" value={90}/>

              </div>
          </div>
          <div className="skillContainer__skillSet">
              <h5>React native</h5>
              <div className="skillContainer__slider skillContainer__slider2">
                  <LinearProgress variant="determinate" value={60}/>

              </div>
          </div>
          <div className="skillContainer__skillSet">
              <h5>C Language</h5>
              <div className="skillContainer__slider skillContainer__slider3">
                  <LinearProgress variant="determinate" value={80}/>

              </div>
          </div>
          <div className="skillContainer__skillSet">
              <h5>mongoDB</h5>
              <div className="skillContainer__slider skillContainer__slider4">
                  <LinearProgress variant="determinate" value={50}/>

              </div>
          </div>
          <div className="skillContainer__skillSet">
              <h5>GitHub</h5>
              <div className="skillContainer__slider skillContainer__slider5">
                  <LinearProgress variant="determinate" value={80}/>

              </div>
          </div>
          <div className="skillContainer__skillSet">
              <h5>HTML</h5>
              <div className="skillContainer__slider skillContainer__slider6">
                  <LinearProgress variant="determinate" value={70}/>

              </div>
          </div>


      </div>


  </Element>
  );
  
};

export default SkillContainer;
