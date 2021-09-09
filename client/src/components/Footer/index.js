import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Footer = () => {
  return (
    <div id="footerDiv">
      <span className="footerIcons">
        <FontAwesomeIcon icon={faLinkedin} />
      </span>
      <span className="footerIcons">
        <FontAwesomeIcon icon={faGithub} />
      </span>
      <span className="footerIcons">
        <FontAwesomeIcon icon={faIdCard} />
      </span>
    </div>
  );
};

export default Footer;
