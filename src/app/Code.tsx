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
            <section className="relative min-h-dvh max-w-full flex flex-col justify-center items-left lg:px-16 xl:px-40 py-16 bg-red-500">
                <div className="">
                    <div className="">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Code</h1>
                        <p className="text-lg text-gray-700 mb-4">
                            Your text content goes here. This is the left side of the layout.
                        </p>
                        <div className="flex gap-3 mb-8">
                            <span className="px-2 py-1.5 rounded-md bg-blue-100 text-black text-sm font-medium border border-blue-200">Design</span>
                            <span className="px-2 py-1.5 rounded-md bg-purple-100 text-black text-sm font-medium border border-purple-200">Development</span>
                            <span className="px-2 py-1.5 rounded-md bg-green-100 text-black text-sm font-medium border border-green-200">Product</span>
                            <span className="px-2 py-1.5 rounded-md bg-orange-100 text-black text-sm font-medium border border-orange-200">Strategy</span>
                        </div>

                        {/* Card Section 1 */}
                        <div className="relative mb-32">
                            <div className="horizontal-card max-w-none relative overflow-visible">
                                <div className="flex-1 text-white pr-8 z-10">
                                    <div className="text-lg mb-4">
                                        Rebuilding the documentation product for e-commerce operators in the VTEX platform.
                                    </div>
                                    <a href="#" className="underline text-white font-semibold hover:text-purple-200 transition-colors">See more →</a>
                                </div>
                                <div className="flex justify-end items-center">
                                    <img 
                                        src="/projects_images/project_1.png" 
                                        alt="code screenshot" 
                                        className="w-60 md:w-72 lg:w-1/2 xl:w-[600px] 2xl:w-[720px] h-auto relative z-20"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Card Section 2 */}
                        <div className="relative mb-32">
                            <div className="horizontal-card max-w-none relative overflow-visible">
                                <div className="flex-1 text-white pr-8 z-10">
                                    <div className="text-lg mb-4">
                                        Rebuilding the documentation product for e-commerce operators in the VTEX platform.
                                    </div>
                                    <a href="#" className="underline text-white font-semibold hover:text-purple-200 transition-colors">See more →</a>
                                </div>
                                <div className="flex justify-end items-center">
                                    <img 
                                        src="/projects_images/project_1.png" 
                                        alt="code screenshot" 
                                        className="w-60 md:w-72 lg:w-1/2 xl:w-[600px] 2xl:w-[720px] h-auto relative z-20"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>
                       
            </section>
        </>
    );
}