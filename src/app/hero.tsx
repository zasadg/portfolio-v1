"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaDribbble, FaMedium } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

export default function Hero() {
    return (
                <section className="min-h-screen relative w-full lg:px-40 px-16 py-16 flex flex-col justify-center items-left bg-teal-500">
                    <motion.div
                        className=""
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <section className="">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Khang Nguyen</h1>

                            <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                                I&apos;m a Senior Product Designer building tools that people use every
                                day to work, create, and collaborate on the internet.
                            </p>

                            <p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-800">
                                My job is to design & code to enable people to reach their goals.
                            </p>

                            <div className="mt-8 text-gray-900 space-y-1 text-base">
                                <div className="font-semibold">Currently</div>
                                <div className="flex items-center gap-2">
                                    🛠️
                                    <span>
                                        Building the AI data platform experience @{" "}
                                        <a
                                            href="https://endash.ai"
                                            className="underline hover:text-blue-600"
                                            target="_blank"
                                        >
                                            endash.ai
                                        </a>
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FiGlobe />
                                    <span>Living in Saigon</span>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-8 text-2xl">
                                <a href="https://www.linkedin.com/in/khang-nmt/" target="_blank">
                                    <FaLinkedin />
                                </a>
                                <a href="https://twitter.com" target="_blank">
                                    <FaTwitter />
                                </a>
                                <a href="https://dribbble.com" target="_blank">
                                    <FaDribbble />
                                </a>
                                <a href="https://github.com/zasadg" target="_blank">
                                    <FaGithub />
                                </a>
                            </div>
                        </section>
                    </motion.div>
                </section>

    );
}