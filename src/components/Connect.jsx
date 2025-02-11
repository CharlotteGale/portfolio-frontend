import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "../assets/styles/components/Connect.css";

const Connect = () => {
  return (
    <>
      <h3>Or Connect with Me...</h3>
      <div className="social-links">
      <a href="https://github.com/CharlotteGale" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://linkedin.com/in/charlottemgale" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>
      </div>
    </>
  );
};

export default Connect;
