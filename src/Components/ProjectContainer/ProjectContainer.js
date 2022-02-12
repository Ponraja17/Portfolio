import React from 'react';

import { Element } from 'react-scroll';
import Project from '../Project/Project';
import "./ProjectContainer.css";
import Cgpa from "../../assets/Cgpa.png";
import Smart from "../../assets/Smart.png";
import UI from "../../assets/UI.png";

const ProjectContainer = () => {
    const projects = [
        {
           
            img: Cgpa,
            
            title: "CGPA calculator",
            desc:"Developed a CGPA calculator mobile application using React native",
            // link: "",
        },
        {
            img: Smart,
            title: "Smart Irriagation System",
            desc:"Automatic plant watering system , using arduino microcontrollers to control and sense the moisture in the soil which automatically adjusts the watering to optimal levels ",
            // link: "",
        },
        {
            img : UI,
            title: "rChat UI",
            desc:"Designed a Profile info User Interface using React native for a chat application called rChat in rThoughts Pvt Limited.",
            // link: "",
        },

        
    ];
    return (
        <Element className="projectContainer" id="projects">
            <h1>Projects</h1>
            <p>Here are some projects that helps people for daily process</p>
            <div className="projectContainer__projects">
                {
                    projects.map((project, index) => {
                        return (
                            <Project
                            key={index}
                            img={project.img}
                            title={project.title}
                            desc={project.desc}
                            link={project.link}
                            />
                        );
                    })
                }
            </div>
        </Element>
    );
};

export default ProjectContainer;
