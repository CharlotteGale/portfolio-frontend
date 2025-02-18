import { motion } from 'framer-motion';
import React, { useState } from 'react';

const certifications = [
    {
        title: "Foundational C# with Microsoft",
        issuer: "freeCodeCamp",
        date: "February 2025",
        logo: "",
        link: ""
    },
    {
        title: "Intro to Cloud Computing",
        issuer: "Codecademy",
        date: "January 2025",
        logo: "",
        link: ""
    },
    {
        title: "Introduction to DevOps",
        issuer: "Codecademy",
        date: "January 2025",
        logo: "",
        link: ""
    },
    {
        title: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        date: "January 2025",
        logo: "",
        link: ""
    },
    {
        title: "Fullstack Developer",
        issuer: "Code First Girls",
        date: "December 2024",
        logo: "", // replace with actual logo
        link: "" // the certificate
    },
    {
        title: "TypeScript Fundamentals",
        issuer: "Codecademy",
        date: "December 2024",
        logo: "",
        link: ""
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
                <div className="absolute w-full h-full flex flex-col items-center justify-center bg-blue-500 text-white rounded-2xl backface-hidden">
                    <img src={cert.logo} alt={cert.title} className="w-16 h-16 mb-2" />
                    <h3 className='text-lg font-bold'>{cert.title}</h3>
                    <p className='text-sm'>{cert.issuer}</p>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full flex flex-col items-center justify-center bg-gray-800 text-white rounded-2xl backface-hidden transform rotateY-180">
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