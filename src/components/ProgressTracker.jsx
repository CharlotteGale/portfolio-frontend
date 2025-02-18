import React from 'react'

const inProgressCerts = [
    { title: "Front End Development Libraries", progress: 0 }
]

export default function ProgressTracker() {
    return (
        <div className='max-w-md mx-auto mt-8'>
            <h2 className='text-xl font-bold mb-4'>In Progress Certifications</h2>
            {inProgressCerts.map((cert, index) => (
                <div key={index} className='mb-4'>
                    <p className='text-sm font-medium'>{cert.title}</p>
                    <div className='w-full bg-gray-200 rounded-full h-4'>
                        <div 
                            className='bg-blue-600 h-4 rounded-full'
                            style={{ width: `${cert.progress}%` }}
                        ></div>
                    </div>
                    <p className='text-xs text-gray-500 mt-1'>{cert.progress}% Complete</p>
                </div>
            ))}
        </div>
    );
};