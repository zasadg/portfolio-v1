"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaDribbble, FaMedium } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { useState } from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#131313] w-full py-12 flex flex-col items-center justify-center">
            <img src="/logo.png" alt="cat logo" className="w-14 h-auto rounded-full mb-4" />
            <div className="text-white text-lg mb-2 text-center">
                Thanks for reading! Feel free to get in touch at
            </div>
            <a
                href="mailto:khangnmt1502@gmail.com"
                className="text-[#e5735c] underline text-xl font-medium text-center"
            >
                khangnmt1502@gmail.com
            </a>
        </footer>
    );
}