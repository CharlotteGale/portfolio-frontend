import React from "react";

import "../assets/styles/components/Tools.css";

const Tools = () => {
  return (
    <section id="tools&tech">
      <h2>Tools</h2>
      <div className="tools">
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
          <img
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="Git"
            width="40"
            height="40"
          />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            width="40"
            height="40"
          />
        </a>
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            alt="VS Code"
            width="40"
            height="40"
          />
        </a>
        <a href="https://postman.com" target="_blank" rel="noreferrer">
          <img
            src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
            alt="Postman"
            width="40"
            height="40"
          />
        </a>
        <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
          <img
            src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
            alt="Figma"
            width="40"
            height="40"
          />
        </a>
        <a href="https://ubuntu.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ubuntu/ubuntu-plain.svg"
            alt="Ubuntu"
            width="40"
            height="40"
          />
        </a>
      </div>
    </section>
  );
};

export default Tools;
