import { motion } from 'framer-motion';
import React, { useState } from 'react';

import '../assets/styles/components/Certifications.css'

const certifications = [
    // C#
    {
        title: "Foundational C# with Microsoft",
        issuer: "freeCodeCamp",
        date: "February 2025",
        logo: "https://design-style-guide.freecodecamp.org/img/fcc_primary_small.svg",
        link: "https://freecodecamp.org/certification/fcc89e104bf-2b35-4b23-a9af-bd8d056821be/foundational-c-sharp-with-microsoft"
    },

    // Python

    // DevOps
    {
        title: "Intro to Cloud Computing",
        issuer: "Codecademy",
        date: "January 2025",
        logo: "/codecademy-logo.png",
        link: "https://www.codecademy.com/profiles/CharlotteMGale/certificates/1353857e7ad5c1d0d578073e0d5e31e4"
    },
    {
        title: "Introduction to DevOps",
        issuer: "Codecademy",
        date: "January 2025",
        logo: "/codecademy-logo.png",
        link: "https://www.codecademy.com/profiles/CharlotteMGale/certificates/735b5f3bb39d4b8bbe48ac00de0e7222"
    },
    {
        title: "Working with Containers",
        issuer: "Codecademy",
        date: "February 2025",
        logo: "/codecademy-logo.png",
        link: "https://www.codecademy.com/profiles/CharlotteMGale/certificates/e9df20fe45914876802069da07f6bfe4"
    },

    // JavaScript & JS libraries/frameworks
    {
        title: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        date: "January 2025",
        logo: "https://design-style-guide.freecodecamp.org/img/fcc_primary_small.svg",
        link: "https://www.freecodecamp.org/certification/fcc89e104bf-2b35-4b23-a9af-bd8d056821be/javascript-algorithms-and-data-structures-v8"
    },
    {
        title: "Fullstack Developer",
        issuer: "Code First Girls",
        date: "December 2024",
        logo: "https://codefirstgirls.com/wp-content/uploads/2021/04/White-Code-First-Girls-Logo-Transparent-1024x1024.png", // replace with actual logo
        link: "https://drive.google.com/file/d/1zJW3s-vHGKlLMnknr67fXfRZR7jZv7jS/view?usp=sharing" // the certificate
    },

    // TypeScript
    {
        title: "TypeScript Fundamentals",
        issuer: "Codecademy",
        date: "December 2024",
        logo: "/codecademy-logo.png",
        link: "https://www.codecademy.com/profiles/CharlotteMGale/certificates/d74421b4615249039756ea358748f532"
    },
    
    {
        title: "TypeScript Functions",
        issuer: "Codecademy",
        date: "February 2025",
        logo: "/codecademy-logo.png",
        link: "hhttps://www.codecademy.com/profiles/CharlotteMGale/certificates/4e7826b0c9a343178a5b998322d1616c"
    },
    {
        title: "TypeScript Complex Types",
        issuer: "Codecademy",
        date: "February 2025",
        logo: "/codecademy-logo.png",
        link: "https://www.codecademy.com/profiles/CharlotteMGale/certificates/034d7778456644ffb78ed5e774f33603"
    },

    // Data Science

    // QA

    // {
    //     title: "",
    //     issuer: "",
    //     date: "",
    //     logo: "",
    //     link: ""
    // },
]

const CertificationCard = ({ cert }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <motion.div
            className='card-container'
            onClick={() => setFlipped((prev) => !prev)}
        >
            <motion.div
                className='card'
                animate={{ rotateY: flipped ? 180 : 0 }}
            >
                {/* Front Side */}
                <div className='card-front'>
                    <img src={cert.logo} alt={cert.issuer} className='card-img' />
                    <h3 className='card-title'>{cert.title}</h3>
                    <p className='card-issuer'>{cert.issuer}</p>
                </div>

                {/* Back Side */}
                <div className='card-back'>
                    <p className='card-date'>Issued: {cert.date}</p>
                    <a
                    href={cert.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='card-link'
                    >
                        View Certificate
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default function Certifications() {

    return (
        <div className='flex flex-wrap gap-6 justify-center'>
            {certifications.map((cert, index) => (
                <CertificationCard key={index} cert={cert} />
            ))}
        </div>
    )
}