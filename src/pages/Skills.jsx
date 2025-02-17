import React from 'react';
import Technologies from '../components/Technologies.jsx';
import Tools from '../components/Tools.jsx';

import '../assets/styles/pages/Skills.css'

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills & Technologies</h2>
            <p>Since beginning my transition into tech, I have learned the following skills and technologies via self-learning and CFGs Fullstack Developer Bootcamp.</p>
            <Technologies />
            <Tools />
        </section>
    )
}

export default Skills