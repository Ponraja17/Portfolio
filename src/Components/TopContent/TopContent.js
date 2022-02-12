import React from 'react';
import { Link } from 'react-scroll';
import "./TopContent.css";
const TopContent = () => {
    return <div className="topContent">
        <div className="topContent__container">
            <h1>Mr.Pon Raja</h1>
            <p>Fresher Web and App Developer</p>
            <a href="https://drive.google.com/file/d/1_8GinnbFbcTXH62UOjuRJ0VdYbejCyrw/view?usp=sharing">
                <button className="topContent__downloadButton">Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={800}>
                <button className="topContent__workButton">My Work</button>
            </Link>
        </div>
    </div>;
};

export default TopContent;
