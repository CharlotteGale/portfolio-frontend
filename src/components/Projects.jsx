import React from "react";
import gameImage from "../assets/images/text-adventure.png";
import groupProject from "../assets/images/chakraX-homePage.png";
import portfolio from "../assets/images/portfolio.png";

import "../assets/styles/components/Projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="portfolio">
          <h3>My Portfolio Web Page</h3>
          <img src={portfolio} alt="my portfolio webpage" />
          <legend>This is my portfolio webpage</legend>
          <p>
            A webpage designed to display the full breadth of my skills learned
            both during the CFG Bootcamp and through my self-learning journey.
          </p>
          <p>The Tech-Stack:</p>
          <ul className="tech-stack">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>HTML & CSS</li>
            <li>C#</li>
            <li>ASP.NET</li>
            <li>Vitest</li>
            <li>xUnit</li>
            <li></li>
          </ul>
        </div>
        <div className="group-project">
          <h3>Executive Function Web App</h3>
          <img src={groupProject} alt="landing page for ChakraX" />
          <legend>An executive function web app.</legend>
          <p>
            A support tool designed to assist neurodivergent users in managing
            daily tasks and building healthy habits.
          </p>
          <p>The Tech-Stack:</p>
          <ul className="tech-stack">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>HTML & CSS</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>Jest</li>
            <li></li>
          </ul>
        </div>
        <div className="adventure-game">
          <h3>Text-Based Adventure Game</h3>
          <img src={gameImage} alt="landing page for text adventure" />
          <legend>
            A D&D inspired text-based adventure game, Work In Progress
          </legend>
          <p>
            This simple text-based game allows the player to choose from 1 of 4
            adventures, 3 of which are complete.
          </p>
          <p>The Tech-Stack:</p>
          <ul className="tech-stack">
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
