"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaDribbble, FaMedium } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { useState } from 'react';

export default function Hero() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <section className="relative w-full lg:px-40 px-16 py-16 flex flex-col justify-center items-left bg-blue-500">
                <div className="flex gap-16">
                    <div className="flex-[0.4]">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Project 2</h1>
                        <p className="text-lg text-gray-700 mb-4">
                            Your text content goes here. This is the left side of the layout.
                        </p>

                        <div className="flex gap-3 mb-8">
                            <span className="px-2 py-1.5 rounded-md bg-blue-100 text-black text-sm font-medium border border-blue-200">Design</span>
                            <span className="px-2 py-1.5 rounded-md bg-purple-100 text-black text-sm font-medium border border-purple-200">Development</span>
                            <span className="px-2 py-1.5 rounded-md bg-green-100 text-black text-sm font-medium border border-green-200">Product</span>
                            <span className="px-2 py-1.5 rounded-md bg-orange-100 text-black text-sm font-medium border border-orange-200">Strategy</span>
                        </div>

                        <blockquote className="mb-8">
                            Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.
                            <span>Steve Jobs</span>
                        </blockquote>

                        <button 
                            onClick={() => {
                                setIsExpanded(!isExpanded);
                                if (!isExpanded) {
                                    setTimeout(() => {
                                        const element = document.getElementById('project-2-details');
                                        if (element) {
                                            const offset = element.getBoundingClientRect().top + window.pageYOffset;
                                            window.scrollTo({
                                                top: offset,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }, 100);
                                }
                            }}
                            className="button"
                        >
                            {isExpanded ? 'Show Less' : 'Read More'}
                        </button>
                    </div>
                    <div className="flex-[0.6]">
                        <img
                            src="/projects_images/project_1.png"
                            alt="Project image"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {isExpanded && (
                <section className="max-w-full lg:px-40 px-16 py-16 relative bg-green-500" id="project-2-details">
                    <div className="">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6">Project Details</h2>

                            <h6 className="project-role">Role</h6>
                            <p className="project-tag">UX • Interface Design • Code</p>
    
                            <p className="project-description">
                                Detailed description of your project goes here. You can add multiple paragraphs
                                and sections to explain your work in depth.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <img 
                                    src="/projects_images/project_1.png" 
                                    alt="Project detail 1"
                                    className="w-full h-auto"
                                />
                                <p className="text-gray-600">Caption for image 1</p>
                            </div>
                            <div className="space-y-4">
                                <img 
                                    src="/projects_images/project_1.png" 
                                    alt="Project detail 2"
                                    className="w-full h-auto"
                                />
                                <p className="text-gray-600">Caption for image 2</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}