"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaDribbble, FaMedium } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

export default function Hero() {
    return (
 
                        <section className="relative min-h-screen max-w-full px-16 py-16 flex flex-col justify-center items-center">
                            <div className="flex  gap-16">
                                <div className="flex-4">
                                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Hi</h1>
                                    <p className="text-lg text-gray-700 mb-4">
                                        Your text content goes here. This is the left side of the layout.
                                    </p>
                                </div>
                                <div className="flex-6">
                                    <img 
                                        src="/projects_images/project_1.png" 
                                        alt="Project image"
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                        </section>


    );
}