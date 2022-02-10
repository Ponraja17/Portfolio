import React from 'react';
import { Link } from 'react-scroll';
import "./TopContent.css";
const TopContent = () => {
    return <div className="topContent">
        <div className="topContent__container">
            <h1>Mr.Pon Raja</h1>
            <p>Fresher Web and App Developer</p>
            <a href="ww.google.com">
                <button className="topContent__downloadButton">Download CV</button>
            </a>
            <Link>
                <button className="topContent__workButton">My Work</button>
            </Link>
        </div>
    </div>;
};

export default TopContent;
