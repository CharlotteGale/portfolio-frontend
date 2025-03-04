import React from 'react';

const inProgressCerts = [
    { title: "Front End Development Libraries", progress: 43 },
    { title: "Learning Playwright", progress: 30 },
    { title: "Learn Bash Scripting", progress: 0 },
    { title: "Learn MongoDB", progress: 100 }
];

export default function ProgressTracker() {
    return (
        <div
            className='flex flex-wrap justify-center gap-6 mt-8'
        >
            {inProgressCerts.map((cert, index) => (
                <div key={index}
                    className='flex flex-col bg-white shadow-md rounded-lg'
                    style={{ flex: "1 1 200px", maxWidth: "200px", padding: "10px", backgroundColor: "var(--progress-card-color)" }}>
                    <p className='text-sm font-medium' style={{ color: 'var(--font-color)' }}>{cert.title}</p>
                    <div className='w-full rounded-full h-4 mt-2' style={{ backgroundColor: 'var(--background-color)' }}>
                        <div
                            className='h-4 rounded-full'
                            style={{ width: `${cert.progress}%`, backgroundColor: 'var(--accent-color)' }}
                        ></div>
                    </div>
                    <div className="flex w-full mt-1">
                        <p className='text-xs' style={{ color: 'var(--font-color)' }}>{cert.progress}% Complete</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
