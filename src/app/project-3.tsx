"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaDribbble, FaMedium } from "react-icons/fa";
import { FiGlobe, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { useState } from 'react';

export default function Project3() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <section className="relative w-full lg:px-32 px-16 py-16 flex flex-col justify-center items-left">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="flex-[0.4] w-full">
                        <p className="text-black text-lg font-medium">
                            <a href="https://rentnobee.com" className="flex items-center gap-2 text-black hover:opacity-80" target="_blank" rel="noopener noreferrer">
                                ucars.sg
                                <FiExternalLink className="w-4 h-4" />
                            </a>
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#175C6B]">Vehicle trading system</h1>
                        <p className="text-md mb-4">
                            This project introduces a multi-agent workflow system designed to improve task execution by orchestrating multiple specialized agents such as web search, planning, document retrieval, and web crawling. The interface clearly separates the workflow steps and their outputs, making complex processes transparent and manageable.
                        </p>


                        <button
                            onClick={() => {
                                setIsExpanded(!isExpanded);
                                if (!isExpanded) {
                                    setTimeout(() => {
                                        const element = document.getElementById('project-details-2');
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
                    <div className="flex-[0.6] w-full">
                        <img
                            src="/projects_images/project-3_thumbnail.png"
                            alt="Project image"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {isExpanded && (
                <section className="details max-w-full lg:px-32 px-16 py-16 relative" id="project-details-2">
                    <div className="">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-[#4B51BF]">Solving agent workflow problems</h2>

                            <p className="project-description">
                                Developed a system that consolidates data from multiple e-commerce channels, addressing issues of data fragmentation and accessibility.
                            </p>
                            <h6 className="project-role">Role</h6>
                            <p className="project-tag">UX • Interface Design • Code</p>
                        </div>
                        {/*Images grid */}
                        {/* <h1 className="text-gray-600 text-lg font-medium">Dashboard with templates to kick start</h1> */}
                        <img
                            src="/projects_images/details-3-1-2.png"
                            alt="Project detail 1"
                            className="w-full h-auto py-8"
                        />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <img
                                    src="/projects_images/details-3-1-8.png"
                                    alt="Project detail 1"
                                    className="w-full h-auto"
                                />
                                <img
                                    src="/projects_images/details-3-1-6.png"
                                    alt="Project detail 1"
                                    className="w-full h-auto"
                                />
                            </div>

                            <div className="space-y-4">
                                <img
                                    src="/projects_images/details-3-1-3.png"
                                    alt="Project detail 2"
                                    className="w-full h-auto"
                                />
                                <img
                                    src="/projects_images/details-3-1-4.png"
                                    alt="Project detail 2"
                                    className="w-full h-auto"
                                />
                                <img
                                    src="/projects_images/details-3-1-1-1.png"
                                    alt="Project detail 7"
                                    className="w-full h-auto"
                                />
                                {/* <img
                                    src="/projects_images/details-2-1-6.png"
                                    alt="Project detail 2"
                                    className="w-full h-auto"
                                /> */}
                            </div>
                        </div>




                    </div>


                    <div className="pt-24">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-[#4B51BF]">Experience of property manager relationship</h2>
                            <p className="project-description">
                                Comprehensive documentation of data workflows and processes, making it easier for teams to understand and maintain the data pipeline.
                            </p>
                            <h6 className="project-role">Role</h6>
                            <p className="project-tag">Documentation • Process Design • Technical Writing</p>
                        </div>
                        {/*Images grid */}
                        <img
                                    src="/projects_images/details-3-1-5.png"
                                    alt="Project detail 7"
                                    className="w-full h-auto"
                                />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
                            <div className="space-y-4">
                                <img
                                    src="/projects_images/details-3-1-9.png"
                                    alt="Project detail 7"
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                                    <img
                                        src="/projects_images/details-3-1-10.png"
                                        alt="Project detail 7"
                                        className="w-full h-auto"
                                    />
                                
                                </div>
                            </div>

                        </div>
                    </div>


                </section>
            )}
        </>
    );
}