"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
    return (
                <section className="hero min-h-screen relative max-w-5xl lg:px-32 px-16 py-16 flex flex-col justify-center items-left text-white">
                    <motion.div
                        className=""
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <section className="">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Khang Nguyen</h1>

                            <p className="text-lg leading-relaxed">
                                I&apos;m a Product Designer crafting meaningful experiences for future products.
                            </p>

                            <p className="mt-4 text-lg leading-relaxed">
                            While being a designer, empathizing with ux outcome is not just my goal but the balance between business goals and development feasible is already baked into my mental model.
                            </p>

                            <div className="mt-8 space-y-1 text-base">
                                <div className="font-bold">Currently</div>
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
                                {/* <div className="flex items-center gap-2">
                                    <FiGlobe />
                                    <span>Living in Saigon</span>
                                </div> */}
                            </div>

                            <div className="flex gap-4 mt-8 text-2xl">
                                <a href="https://www.linkedin.com/in/khang-nmt/" target="_blank">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/zasadg" target="_blank">
                                    <FaGithub />
                                </a>
                                <a href="mailto:khangnmt1502@gmail.com" target="_blank">
                                    <FaEnvelope />
                                </a>
                            </div>
                        </section>
                    </motion.div>
                </section>

    );
}