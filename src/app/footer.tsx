"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="elative w-full lg:px-32 px-16 pt-16 flex flex-col justify-center items-left pb-40">
            <Image src="/logo.png" alt="cat logo" width={56} height={56} className="w-14 h-auto rounded-full mb-4" loading="lazy" />
            <div className="text-white text-lg mb-4">
                Thanks for reading! Feel free to get in touch
            </div>
            <div className="flex gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/khang-nmt/" target="_blank" className="text-white">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/zasadg" target="_blank" className="text-white">
                    <FaGithub />
                </a>
                <a href="mailto:khangnmt1502@gmail.com" target="_blank" className="text-white">
                    <FaEnvelope />
                </a>
            </div>
        </footer>
    );
}