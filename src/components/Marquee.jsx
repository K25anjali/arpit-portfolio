// components/Marquee.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
    // Tech stack with associated background colors
    const techStack = [
        { name: 'AWS', bg: 'bg-orange-500' },
        { name: 'Docker', bg: 'bg-blue-500' },
        { name: 'Kubernetes', bg: 'bg-blue-600' },
        { name: 'Terraform', bg: 'bg-purple-600' },
        { name: 'React', bg: 'bg-cyan-500' },
        { name: 'Node.js', bg: 'bg-green-500' },
        { name: 'Python', bg: 'bg-yellow-500' },
        { name: 'CI/CD', bg: 'bg-red-500' },
        { name: 'Serverless', bg: 'bg-indigo-500' },
        { name: 'Git', bg: 'bg-red-600' },
        { name: 'Jenkins', bg: 'bg-red-700' },
        { name: 'Ansible', bg: 'bg-gray-700' }
    ];

    // Double the items for seamless looping
    const duplicatedItems = [...techStack, ...techStack];

    return (
        <div className="space-y-4 py-8 bg-gray-900/50">
            {/* Left-moving marquee */}
            <div className="overflow-hidden">
                <motion.div
                    className="flex whitespace-nowrap items-center"
                    animate={{
                        x: ['0%', '-100%']
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                >
                    {duplicatedItems.map(({ name, bg }, index) => (
                        <div
                            key={`left-${index}`}
                            className={`flex items-center mx-2 text-lg font-medium rounded text-gray-200 px-4 py-1 ${bg} rounded`}
                        >
                            {/* <div className={`flex items-center justify-center w-12 h-12 rounded-full ${bg} text-white font-bold`}>
                                {name.charAt(0)}
                            </div> */}
                            {/* <span className="ml-3 text-lg font-medium text-gray-200"> */}
                            {name}
                            {/* </span> */}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Right-moving marquee */}
            <div className="overflow-hidden">
                <motion.div
                    className="flex whitespace-nowrap items-center"
                    animate={{
                        x: ['-100%', '0%']
                    }}
                    transition={{
                        duration: 45,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                >
                    {duplicatedItems.reverse().map(({ name, bg }, index) => (
                        <div
                            key={`right-${index}`}
                            className="flex items-center mx-4"
                        >
                            <div className={`flex items-center justify-center w-12 h-12 rounded-full ${bg} text-white font-bold`}>
                                {name.charAt(0)}
                            </div>
                            <span className="ml-3 text-lg font-medium text-gray-200">
                                {name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;