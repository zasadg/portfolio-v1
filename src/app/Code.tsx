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
            <section className="relative min-h-dvh max-w-full flex flex-col justify-center items-left lg:px-16 xl:px-40 py-16  px-16 bg-red-500">
                <div className="">
                    <div className="">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Code</h1>
                        <p className="text-lg text-gray-700 pb-16">
                            Your text content goes here. This is the left side of the layout.
                        </p>

                        {/* Card Section 1*/}
                        <div className="relative">
                            <div className="bg-[#4B51BF] rounded-lg flex flex-col md:flex-row items-stretch p-8 md:pr-[28rem] relative overflow-visible min-h-[260px]">
                                {/* Text Section */}
                                <div className="flex-1 flex flex-col justify-center text-white z-10 max-w-lg">
                            <h1 className="text-xl md:text-3xl font-bold pb-4">Card 1</h1>
                                    <div className="text-xl md:text-xl pb-4">
                                        Rebuilding the documentation product for e-commerce operators in the VTEX platform.
                                    </div>
                                    <a href="#" className="underline text-white font-semibold text-xl hover:text-purple-200 transition-colors">See more →</a>
                                </div>
                                {/* Image Section */}
                                <div className="hidden md:block">
                                    <img
                                        src="/projects_images/Other_thumbnail_1.png"
                                        alt="code screenshot"
                                        className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/8 w-[420px] max-w-none drop-shadow-2xl rounded-lg z-20"
                                        style={{ boxShadow: '0 8px 32px rgba(124,35,182,0.25)' }}
                                    />
                                </div>
                                {/* Mobile Image */}
                                <div className="block md:hidden mt-8">
                                    <img
                                        src="/projects_images/Other_thumbnail_1.png"
                                        alt="code screenshot"
                                        className="w-full rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Card Section 2*/}
                        <div className="relative pt-16">
                            <div className="bg-[#7c23b6] rounded-lg flex flex-col md:flex-row items-stretch p-8 md:pr-[28rem] relative overflow-visible min-h-[260px]">
                                {/* Text Section */}
                                <div className="flex-1 flex flex-col justify-center text-white z-10 max-w-lg">
                            <h1 className="text-xl md:text-3xl font-bold pb-4">Card 2</h1>
                                    <div className="text-xl md:text-xl pb-4">
                                        Rebuilding the documentation product for e-commerce operators in the VTEX platform.
                                    </div>
                                    <a href="#" className="underline text-white font-semibold text-xl hover:text-purple-200 transition-colors">See more →</a>
                                </div>
                                {/* Image Section */}
                                <div className="hidden md:block">
                                    <img
                                        src="/projects_images/Other_thumbnail_1.png"
                                        alt="code screenshot"
                                        className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/8 w-[420px] max-w-none drop-shadow-2xl rounded-lg z-20"
                                        style={{ boxShadow: '0 8px 32px rgba(124,35,182,0.25)' }}
                                    />
                                </div>
                                {/* Mobile Image */}
                                <div className="block md:hidden mt-8">
                                    <img
                                        src="/projects_images/Other_thumbnail_1.png"
                                        alt="code screenshot"
                                        className="w-full rounded-lg"
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