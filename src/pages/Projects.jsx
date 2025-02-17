import React from "react";
import ProjectCard from "../components/ProjectCard";
import gameImage from "../assets/images/text-adventure.png";
import groupProject from "../assets/images/chakraX-homePage.png";
import portfolio from "../assets/images/portfolio.png";

import "../assets/styles/pages/Projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <ProjectCard
          title="My Portfolio Web Page"
          image={portfolio}
          alt="version 0.0 of my portfolio webpage"
          legend="A webpage designed to display the full breadth of my skills learned, both during the CFG Bootcamp and through my self-learning journey."
          description="
          When I set out to build my portfolio, I knew from the start that I wanted to create a full-stack application. 
          Having been learning C#, I saw this as the perfect opportunity to bring my knowledge together by doing something I truly enjoy—building APIs.

          To give my portfolio a functional backend, I developed a small API to handle the contact form (found under the 'Contact' section). 
          This allowed me to integrate ASP.NET for backend logic, ensuring a seamless communication channel between visitors and myself.
          "
          subheading1="Backend Development & Deployment"
          subcontent1={[
            "- The contact form API was built using ASP.NET and rigorously tested using xUnit, Postman, and eventually integrated with the frontend for end-to-end validation.",
            "- I encountered initial challenges in getting the API to respond correctly but used structured debugging and testing to resolve the issues.",
            "- For deployment, I explored various options, including AWS Elastic Beanstalk, but ultimately chose Render, as it was better suited for the lightweight nature of my API."
          ]}
          subheading2="Frontend Development & React Integration"
          subcontent2={[
            "- Initially, I was apprehensive about using React.js, as my comfort zone had been in backend development. However, I quickly came to appreciate its versatility and component-based architecture.",
            "- Watching my vision come to life as I developed components and integrated them into the UI was a thrilling experience."
          ]}
          subheading3="Testing & Hosting"
          subcontent3={[
            "- The frontend was tested locally for UI/UX consistency, ensuring smooth user experience across different screen sizes.",
            "- Using Vitest, I validated that the contact form correctly communicated with the ASP.NET API before pushing to production.",
            "- For deployment, I opted for Vercel, which seamlessly integrates with GitHub to automatically deploy updates whenever new changes are pushed."
          ]}
          summary="Building this portfolio has been a rewarding journey, combining my backend knowledge with new frontend skills, resulting in a dynamic, full-stack portfolio that truly reflects my abilities as a developer."
          techStack={["JavaScript", "React.js", "HTML & CSS", "C#", "ASP.NET", "Vitest", "xUnit"]}
        />
      
        <ProjectCard 
          title="Executive Function Web App"
          image={groupProject}
          alt="Landing Page for ChakraX"
          legend="A support tool designed to assist neurodivergent users in managing daily tasks and building healthy habits."
          description="
          This project was a collaborative effort between myself and five colleagues, where we worked together to develop a support tool designed to help users manage daily tasks, build positive habits, and improve executive functioning skills.

          Our team followed Agile methodologies, using Trello as a project management tool and a Kanban board to track progress. 
          Through brainstorming sessions, research, and iteration, we built the foundation of an accessible and intuitive application aimed at neurodivergent users who benefit from structured support in their day-to-day activities.
          "
          subheading1="Key Features & Gamified Approach"
          subcontent1={[
            "- The application incorporates a gamified reward system, where users earn 'forks' for completing tasks and maintaining habits.",
            "- Users can track their to-do lists, habit-building progress, and journal entries.",
            "- An energy management page, inspired by the Spoon Theory, helps users allocate their energy throughout the day."
          ]}
          subheading2="Backend Development"
          subcontent2={[
            "- I developed the authentication API, implementing JWT-based authentication with encryption to secure user accounts.",
            "- We built RESTful APIs using Express.js to handle user data, including tasks, habits, and energy tracking.",
            "- User data was stored in a MySQL database, ensuring structured and efficient data management."
          ]}
          subheading3="Testing & Quality Assurance"
          subcontent3={[
            "- APIs were rigorously tested using Jest and Postman.",
            "End-to-end testing was conducted in a dedicated development environment to ensure smooth user interactions and functionality."
          ]}
          subheading4="Collaboration & Agile Workflow"
          subcontent4={[
            "- The team worked in sprints, conducting daily stand-ups and code reviews to maintain transparency and adaptability.",
            "- We implemented version control via Git & GitHub, with pull requests and branching strategies to manage feature development."
          ]}
          summary="This project was an exciting and valuable experience, combining technical problem-solving, collaborative teamwork, and user-centered design to create a tool that makes habit-building and task management more engaging and accessible."
          techStack={["JavaScript", "React.js", "HTML & CSS", "ChakraUI", "Node.js", "Express.js", "MySQL", "Jest"]}
        />

        <ProjectCard 
          title="Text-Based Adventure Game, (WIP)"
          image={gameImage}
          alt="landing page for text adventure game"
          legend="This simple text-based game allows the player to choose from 1 of 4adventures, 3 of which are complete. Inspired by WotC's D&D."
          description="
          As an avid Dungeons & Dragons (D&D) enthusiast, I was inspired to create a text-based adventure game while learning JavaScript through freeCodeCamp. 
          One of the projects involved building an interactive story game, and I saw this as the perfect opportunity to blend my love for storytelling, fantasy RPGs, and coding into a single project.
          "
          subheading1="Gameplay & Narrative Design"
          subcontent1={[
            "Players can chose between for distinct characters:",
              "- 🛡 Aasimar Paladin: A divine warrior bound by righteousness.",
              "- 🌿 Elven Druid: A nature-bound spellcaster with deep wisdom.",
              "- 🎵 Halfling Bard – A charismatic trickster with a silver tongue.",
              "- 🗡 Tiefling Rogue – A cunning strategist with a shadowy past.",
            "Each character has a unique storyline, with decisions that influence that narrative and unlock different paths, creating a branching adventure experience."
          ]}
          subheading2="Technical Implementation & Future Plans"
          subcontent2={[
            "The game is built entirely with JavaScript, HTML & CSS, allowing for dynamic decision-making and text-based interactions.",
            "Moving forward, I aim to expand the mechanics by incorporating:",
              "- Animations & UI Enhancments to bring the adventure to life.",
              "- Randomized story elements to create a more replayable experience.",
              "- Expanded choices & consequences, adding more depth to character interactions."
          ]}
          summary="This project has been a fantastic blend of creativity and coding, and I look forward to evolving it into a more immersive RPG experience."
          techStack={["JavaScript", "HTML & CSS"]}
        />
      </div>
    </section>
  );
};

export default Projects;
