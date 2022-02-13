import React from 'react';
import{Link} from "react-scroll";
import "./Header.css";
import {LinkedIn} from "@material-ui/icons";


const header = () => {
  return(
        <div className="header">
            <div className="header__left">
                <h1>Develop
                <span>er</span>
                </h1>
                </div>
                <div className="header__right">
                    <Link to="about" smooth={true} duration={500}>
                        <h4>
                            About me
                        </h4>
                    </Link>
                    <Link to="skills" smooth={true} duration={500}>
                        <h4>
                            Skills
                        </h4>
                    </Link>
                    <Link to="projects" smooth={true} duration={500}>
                        <h4>
                            Projects
                        </h4>
                    </Link>
                    {/* <Link to="exp" smooth={true} duration={500}>
                        <h4>
                            Experience
                        </h4>
                    </Link> */}
                    <Link to="contact" smooth={true} duration={500}>
                        <h4>
                            Contact
                        </h4>
                    </Link>
                    <h4 className="header__rightButton"><a href="https://www.linkedin.com/in/pon-raja-p17/"><LinkedIn className="linkedin"></LinkedIn>
        </a></h4>
                </div>
                
        </div>);
};

export default header;