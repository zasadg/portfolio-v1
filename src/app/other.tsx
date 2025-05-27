"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaDribbble, FaMedium } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { useState } from 'react';

export default function SpeakingWriting() {
    return (
        <section className="relative w-full lg:px-32 px-16 py-16 flex flex-col justify-center items-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4B51BF] mb-10">Other projects & reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">

                {/* Card 1 */}
                <div className="flex flex-col h-full">
                <div className="flex-[0.6] w-full">
                        <img
                            src="/projects_images/Other_2.png"
                            alt="Project image"
                            className="w-full h-auto"
                        />
                    <div className="pt-4">
                        <div className="font-semibold text-base text-[#181e2a] mb-1">How i works as a product designer</div>
                        <div className="text-gray-600 text-sm">About me and my work process</div>
                    </div>
                    </div>
                </div>
                
                {/* Card 2 */}
                <div className="flex flex-col h-full">
                <div className="flex-[0.6] w-full">
                        <img
                            src="/projects_images/Other_3.png"
                            alt="Project image"
                            className="w-full h-auto"
                        />
                    <div className="pt-4">
                        <div className="font-semibold text-base text-[#181e2a] mb-1">Interactive whiteboard and drawing</div>
                        <div className="text-gray-600 text-sm">My personal experience with interact.js and gpt</div>
                    </div>
                    </div>
                </div>
                
                {/* Card 3 */}
                <div className="flex flex-col h-full">
                <div className="flex-[0.6] w-full">
                        <img
                            src="/projects_images/Other_1.png"
                            alt="Project image"
                            className="w-full h-auto"
                        />
                    <div className="pt-4">
                        <div className="font-semibold text-base text-[#181e2a] mb-1">A place to leave project journal</div>
                        <div className="text-gray-600 text-sm">Projects details and notes in Obsidian</div>
                    </div>
                    </div>
                </div>
                
            </div>

            {/* published */}
            <div className="mt-8">
                <div className="text-[#4B51BF] font-semibold text-lg">Published</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-base">
                    <div>
                        Let's talk about design portfolios<br />
                        <span className="font-bold">uxdesign.cc</span>
                    </div>
                    <div>
                        The Designers Guide to Git<br />
                        <span className="font-bold">MarvelApp Blog</span>
                    </div>
                    <div>
                        A reading list for new designers<br />
                        <span className="font-bold">UX Planet</span>
                    </div>
                </div>
            </div>
        </section>
    );
}