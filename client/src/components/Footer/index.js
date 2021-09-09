import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div id="footerDiv">
      <span>
        <FontAwesomeIcon icon={faLinkedin} />
      </span>
      <span>
        <FontAwesomeIcon icon={faGithub} />
      </span>
      <span>
        <FontAwesomeIcon icon={faIdCard} />
      </span>
    </div>
  );
};

export default Footer;
