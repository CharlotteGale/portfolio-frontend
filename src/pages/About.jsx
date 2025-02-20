import React from 'react';
import '../assets/styles/pages/About.css';

const About = () => {
    return (
        <section id='about'>
            <h1>About Me</h1>
            <section className='about-section'>
                <p>
                    Hello! I am a passionate and dedicated Junior Web Developer with a strong foundation in fullstack development.
                    I recently completed a 16-week intensive coding bootcamp with Code First Girls, where I honed my skills in JavaScript, Node.js, and React.js, achieving a Merit.
                    My journey into web development has been driven by a love for problem-solving and a desire to create user-centric applications that make a difference.
                </p>
                <p>
                    During my time studying with CFG, I had the opportunity to work on an exciting group project.
                    Myself and 5 colleagues developed an executive function support tool designed to assist neurodivergent users in managing daily tasks and building healthy habits.
                    I personally built the authentication API for this project, enabling secure user login and data management through RESTful endpoints. 
                    This experience deepened my love for backend development and reinforced my commitment to creating secure and efficient applications.<br />
                    I picked up many skills during the bootcamp, learning Version Control with Git & GitHub, API testing with Postman, Test-Driven Development with Jest. UI/UX design with Figma.<br />
                    A lot of knowledge was crammed into those 16 weeks and it is an experience I was grateful to have.
                </p>
                <p>
                    After completing the bootcamp and taking a well-deserved but brief rest, I dove back into learning.<br />
                    I have recently passed the examination to claim my certification in Foundational C# with Microsoft, and now exploring Cloud Computing and DevOps through online learning platforms.
                    My ultimate goal is to become a Software Development Engineer in Test, combining my growing passion for automation with my development skills to ensure the highest quality software products.
                </p>
            </section>
        </section>
    )
}

export default About