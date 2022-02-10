import React from 'react';
import { Element } from 'react-scroll';
import Project from '../Project/Project';
import "./ProjectContainer.css";

const ProjectContainer = () => {
    const projects = [
        {
            img: "https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
            title: "Facebook",
            desc:" a plan or scheme to do something home improvement projects ; 2 · a task or problem in school that requires work over a period",
            link: "www.google.com",
        },
        {
            img: "https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
            title: "Facebook",
            desc:" a plan or scheme to do something home improvement projects ; 2 · a task or problem in school that requires work over a period",
            link: "www.google.com",
        },
        {
            img: "https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
            title: "Facebook",
            desc:" a plan or scheme to do something home improvement projects ; 2 · a task or problem in school that requires work over a period",
            link: "www.google.com",
        },
        {
            img: "https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
            title: "Facebook",
            desc:" a plan or scheme to do something home improvement projects ; 2 · a task or problem in school that requires work over a period",
            link: "www.google.com",
        },
        {
            img: "https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
            title: "Facebook",
            desc:" a plan or scheme to do something home improvement projects ; 2 · a task or problem in school that requires work over a period",
            link: "www.google.com",
        },
        {
            img: "https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
            title: "Facebook",
            desc:" a plan or scheme to do something home improvement projects ; 2 · a task or problem in school that requires work over a period",
            link: "www.google.com",
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
