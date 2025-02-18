import { motion } from 'framer-motion';
import React, { useState } from 'react';

const certifications = [
    {
        title: "Foundational C# with Microsoft",
        issuer: "freeCodeCamp",
        date: "February 2025",
        logo: "https://design-style-guide.freecodecamp.org/img/fcc_primary_small.svg",
        link: "https://freecodecamp.org/certification/fcc89e104bf-2b35-4b23-a9af-bd8d056821be/foundational-c-sharp-with-microsoft"
    },
    {
        title: "Intro to Cloud Computing",
        issuer: "Codecademy",
        date: "January 2025",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Codecademy_logo.svg",
        link: "https://www.codecademy.com/profiles/CharlotteMGale/certificates/1353857e7ad5c1d0d578073e0d5e31e4"
    },
    {
        title: "Introduction to DevOps",
        issuer: "Codecademy",
        date: "January 2025",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Codecademy_logo.svg",
        link: "https://www.codecademy.com/profiles/CharlotteMGale/certificates/735b5f3bb39d4b8bbe48ac00de0e7222"
    },
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
    {
        title: "TypeScript Fundamentals",
        issuer: "Codecademy",
        date: "December 2024",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Codecademy_logo.svg",
        link: "https://www.codecademy.com/profiles/CharlotteMGale/certificates/d74421b4615249039756ea358748f532"
    },
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
            className='relative w-64 h-40 cursor-pointer perspective'
            onClick={() => setFlipped(!flipped)}
        >
            <motion.div
                className='absolute w-full h-full rounded-2xl shadow-lg transition-transform duration-500'
                animate={{ rotateY: flipped ? 180 : 0 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Side */}
                <div className="absolute w-full h-full flex flex-col items-center justify-center bg-blue-500 text-white rounded-2xl backface-hidden z-10">
                    <img src={cert.logo} alt={cert.title} className="w-16 h-16 mb-2" />
                    <h3 className='text-lg font-bold'>{cert.title}</h3>
                    <p className='text-sm'>{cert.issuer}</p>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full flex flex-col items-center justify-center bg-gray-800 text-white rounded-2xl backface-visible transform rotateY-180 z-0">
                    <p className='text-sm'>Issued: {cert.date}</p>
                    <a
                    href={cert.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-2 text-blue-300 underline'
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