import React from 'react'

const inProgressCerts = [
    { title: "Front End Development Libraries", progress: 43 },
    { title: "Learning Playwright", progress: 30 },
    { title: "Learn MongoDB", progress: 100 }
]

export default function ProgressTracker() {
    return (
        <div className='max-w-md mx-auto mt-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                {inProgressCerts.map((cert, index) => (
                    <div key={index} className='project-card mb-4 flex flex-col h-full'>
                        <p className='text-sm font-medium'>{cert.title}</p>
                        <div className='w-full bg-gray-200 rounded-full h-4'>
                            <div
                                className='bg-blue-600 h-4 rounded-full'
                                style={{ width: `${cert.progress}%` }}
                            ></div>
                        </div>
                        <div className="flex w-full">
                            <p className='text-xs text-gray-500'>{cert.progress}% Complete</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};