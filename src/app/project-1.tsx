"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaDribbble, FaMedium } from "react-icons/fa";
import { FiGlobe, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { useState } from 'react';

export default function Project1() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <section className="relative w-full lg:px-32 px-16 py-16 flex flex-col justify-center items-left">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="flex-[0.4] w-full">
                        <p className="text-black text-lg font-medium">
                            <a href="https://endash.ai" className="flex items-center gap-2 text-black hover:opacity-80" target="_blank" rel="noopener noreferrer">
                                endash.ai
                                <FiExternalLink className="w-4 h-4" />
                            </a>
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#4B51BF]">Data analytics platform</h1>
                        <p className="text-md mb-4">
                            Endash.AI is a platform designed to simplify complex data workflows, enabling teams to focus on analyzing insights rather than managing fragmented data. The project aimed to assist small to mid-sized e-commerce businesses in transforming raw, unstructured data into real-time, actionable insights without requiring deep technical expertise.
                        </p>

                        {/* <div className="flex gap-3 mb-8">
                            <span className="px-2 py-1.5 rounded-md bg-blue-100 text-black text-sm font-medium border border-blue-200">Design</span>
                            <span className="px-2 py-1.5 rounded-md bg-purple-100 text-black text-sm font-medium border border-purple-200">Development</span>
                            <span className="px-2 py-1.5 rounded-md bg-green-100 text-black text-sm font-medium border border-green-200">Product</span>
                            <span className="px-2 py-1.5 rounded-md bg-orange-100 text-black text-sm font-medium border border-orange-200">Strategy</span>
                        </div> */}

                        <blockquote className="mb-8">
                            Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. 
                            <span>Steve Jobs</span>
                        </blockquote>

                        <button
                            onClick={() => {
                                setIsExpanded(!isExpanded);
                                if (!isExpanded) {
                                    setTimeout(() => {
                                        const element = document.getElementById('project-details');
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
                            src="/projects_images/project-1_thumbnail.png"
                            alt="Project image"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {isExpanded && (
                <section className="details max-w-full lg:px-32 px-16 py-16 relative" id="project-details">
                    <div className="">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-[#4B51BF]">Transforming analytics experiences</h2>

                            <p className="project-description">
                                Developed a system that consolidates data from multiple e-commerce channels, addressing issues of data fragmentation and accessibility.
                            </p>
                            <h6 className="project-role">Role</h6>
                            <p className="project-tag">UX • Interface Design • Code</p>
                        </div>
                        {/*Images grid */}
                        {/* <h1 className="text-gray-600 text-lg font-medium">Dashboard with templates to kick start</h1> */}
                        <img
                            src="/projects_images/details-1-1.png"
                            alt="Project detail 1"
                            className="w-full h-auto py-8"
                        />
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="space-y-4 lg:col-span-2">
                                <img
                                    src="/projects_images/details-1-1-2.png"
                                    alt="Project detail 1"
                                    className="w-full h-auto"
                                />
                                <img
                                    src="/projects_images/details-1-1-4.png"
                                    alt="Project detail 1"
                                    className="w-full h-auto"
                                />
                            </div>

                            <div className="space-y-4">
                                <img
                                    src="/projects_images/details-1-1-8.png"
                                    alt="Project detail 2"
                                    className="w-full h-auto"
                                />
                                <img
                                    src="/projects_images/details-1-1-5.png"
                                    alt="Project detail 2"
                                    className="w-full h-auto"
                                />
                                <img
                                    src="/projects_images/details-1-1-12.png"
                                    alt="Project detail 2"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>




                    </div>

                    <div className="pt-24">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-[#4B51BF]">UX Research and design</h2>
                            <p className="project-description">
                                Conducted extensive user research with e-commerce retailers, marketers, and sales teams to identify pain points. Designed intuitive workflows and dashboards that cater to both technical and non-technical users, reducing cognitive load and enhancing user engagement.
                            </p>
                            <h6 className="project-role">Role</h6>
                            <p className="project-tag">UX research • User interveiw • Insight findings</p>


                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="space-y-4">
                                <img
                                    src="/projects_images/details-1-3.png"
                                    alt="Project detail 3"
                                    className="w-full h-auto"
                                />
                                <p className="text-gray-600">Dashboard with templates to kick start</p>
                            </div>
                            <div className="space-y-4">
                                <img
                                    src="/projects_images/details-1-4.png"
                                    alt="Project detail 4"
                                    className="w-full h-auto"
                                />
                                <p className="text-gray-600">Data pipeline to extract insights</p>
                            </div>
                            <div className="space-y-4">
                                <img
                                    src="/projects_images/details-1-5.png"
                                    alt="Project detail 5"
                                    className="w-full h-auto"
                                />
                                <p className="text-gray-600">Dashboard with templates to kick start</p>
                            </div>
                            <div className="space-y-4">
                                <img
                                    src="/projects_images/details-1-6.png"
                                    alt="Project detail 6"
                                    className="w-full h-auto"
                                />
                                <p className="text-gray-600">Dashboard with templates to kick start</p>
                            </div>
                        </div>

                    </div>

                    <div className="pt-24">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-[#4B51BF]">Extract data insights</h2>
                            <p className="project-description">
                                Created a landing page that clearly communicates the value proposition of Endash.AI, guiding users through the benefits and functionalities of the platform
                            </p>
                            <h6 className="project-role">Role</h6>
                            <p className="project-tag">UX research • User interveiw • Insight findings</p>


                        </div>
                        {/*Images grid */}
                        {/* <h1 className="text-gray-600 text-lg font-medium">Dashboard with templates to kick start</h1> */}
                        <img
                            src="/projects_images/details-1-2.png"
                            alt="Project detail 1"
                            className="w-full h-auto"
                        />
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="space-y-4 lg:col-span-2">
                                <img
                                    src="/projects_images/details-1-1-9.png"
                                    alt="Project detail 7"
                                    className="w-full h-auto"
                                />
                                <img
                                    src="/projects_images/details-1-1-10.png"
                                    alt="Project detail 7"
                                    className="w-full h-auto"
                                />
                                <p className="text-gray-600">Dashboard with templates to kick start</p>
                            </div>
                            <div className="space-y-4">
                                <img
                                    src="/projects_images/details-1-1-11.png"
                                    alt="Project detail 8"
                                    className="w-full h-auto"
                                />
                                <p className="text-gray-600">Data pipeline to extract insights</p>
                            </div>
                        </div>

                    </div>

                    <div className="pt-24">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-[#4B51BF]">Data workflow documentation</h2>
                            <p className="project-description">
                                Comprehensive documentation of data workflows and processes, making it easier for teams to understand and maintain the data pipeline.
                            </p>
                            <h6 className="project-role">Role</h6>
                            <p className="project-tag">Documentation • Process Design • Technical Writing</p>
                        </div>
                        {/*Images grid */}
                
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <img
                                    src="/projects_images/details-1-1-13.png"
                                    alt="Project detail 7"
                                    className="w-full h-auto"
                                />
                                <img
                                    src="/projects_images/details-1-1-14.png"
                                    alt="Project detail 8"
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* <div className="space-y-4">
                                <img
                                    src="/projects_images/details-1-1-15.png"
                                    alt="Project detail 8"
                                    className="w-full h-auto"
                                />
                                <img
                                    src="/projects_images/details-1-1-16.png"
                                    alt="Project detail 7"
                                    className="w-full h-auto"
                                />
                            </div> */}
                            <div className="space-y-4">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <img
                                    src="/projects_images/details-1-1-15.png"
                                    alt="Project detail 7"
                                    className="w-full h-auto"
                                />
                                <img
                                    src="/projects_images/details-1-1-17.png"
                                    alt="Project detail 7"
                                    className="w-full h-auto"
                                />
                                <img
                                    src="/projects_images/details-1-1-18.png"
                                    alt="Project detail 7"
                                    className="w-full h-auto"
                                />
                                <img
                                    src="/projects_images/details-1-1-19.png"
                                    alt="Project detail 7"
                                    className="w-full h-auto"
                                />
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="pt-24">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-[#4B51BF]">Project Walkthrough</h2>
                            <p className="project-description">
                                Watch a detailed walkthrough of the project implementation and key features.
                            </p>
                        </div>
                        <div className="aspect-video w-full">
                            <iframe
                                src="https://www.loom.com/embed/485ed363194a47f3ab628780611122fb?sid=a590cd35-8510-4f0b-823a-a4456deb7d66"
                                allowFullScreen
                                className="w-full h-full rounded-lg shadow-lg"
                            ></iframe>
                        </div>
                    </div>

                </section>
            )}
        </>
    );
}
