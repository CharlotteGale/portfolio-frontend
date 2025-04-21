import React from 'react';
import '../assets/styles/pages/About.css';

const About = () => {
    return (
        <section id='about'>
            <h1>About Me</h1>
            <section className='about-section'>
                <p>
                    Hello! I’m a Junior Full‑Stack Developer who thrives on building end‑to‑end web applications and crafting robust, secure APIs. 
                    After earning a Merit at Code First Girls’ 16‑week intensive bootcamp, I’ve become fluent in JavaScript (Node.js, React), Python, and the essential tools—Git/GitHub, Postman, Jest and Figma—that keep my code clean, tested, and user‑friendly.
                </p>
                <br></br>
                <p><b><u>Key Highlights</u></b></p>
                <ul>
                    <li>
                        <b>Backend/API Development:</b> I have real passion for designing and implementing scalable RESTful services. 
                    At CFG I architected the authentication API for an Executive Function Support Tool—secure login, JWT, bcrypt, data validation—and loved every minute of it.
                    </li>
                    <li>
                        <b>Full‑Stack Projects:</b> I enjoy the full spectrum, from database schema to responsive UI. 
                        I’m currently developing a text‑based RPG using JavaScript and Python, putting my newly minted Python skills to work—and having fun along the way.
                    </li>
                    <li>
                        <b>Continuous Learning:</b> Beyond coding bootcamps, I’ve earned Microsoft’s Foundational C# certification and am diving into Cloud Computing & DevOps—containerization, CI/CD pipelines, Infrastructure as Code to round out my skill set.
                    </li>
                </ul>
                <br></br>
                <p>
                    My drive is solving real problems through software: building delightful user experiences, securing and optimizing backends, and automating the processes that keep applications running smoothly.
                </p>
                <p>
                    Let’s connect and build something impactful!
                </p>
            </section>
        </section>
    )
}

export default About