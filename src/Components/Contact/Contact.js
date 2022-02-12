import { IconButton } from '@material-ui/core';
import React from 'react';
import { Element } from 'react-scroll';
import {Facebook,Instagram,LinkedIn} from "@material-ui/icons"
import "./Contact.css";

const Contact = () => {
  return (
      <Element className="contact" id="contact">
<h1>Contact</h1>
<div className="contact__container">
<p>Email : <span>raja24pr@gmail.com</span></p>
<p>GitHub Username : <span>@ponraja17</span></p>
<div className="contact__icons">
    <a href="https://www.linkedin.com/in/pon-raja-p17/">
        <IconButton>
<LinkedIn/>
        </IconButton>
    </a>
    <a href="https://www.facebook.com/profile.php?id=100050531410064">
        <IconButton>
<Facebook/>
        </IconButton>
    </a>
    <a href="https://www.instagram.com/rj_fift/">
        <IconButton>
<Instagram/>
        </IconButton>
    </a>
</div>
</div>
      </Element>
  )
};

export default Contact;
