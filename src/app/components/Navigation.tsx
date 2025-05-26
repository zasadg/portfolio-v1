"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
    const pathname = usePathname();
    const [isHeroSection, setIsHeroSection] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                const rect = heroSection.getBoundingClientRect();
                setIsHeroSection(rect.bottom > 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xs border-b transition-colors duration-300 ${
            isHeroSection ? 'border-[#535353]' : 'border-[#d6d6d6]'
        }`}>
            <div className="max-w-full lg:px-32 px-16">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center justify-center h-1/2">
                        <Link href="/" className={`text-xl font-semibold transition-colors duration-300 flex items-center gap-2 ${
                            isHeroSection ? 'text-white' : 'text-black'
                        }`}>
                            <img src="/logo.png" alt="cat logo" className="w-auto h-8 rounded-full" />
                            <span>KnM</span>
                        </Link> 
                    </div>
                    
                    <div className="flex items-center space-x-8">
                        <Link 
                            href="/projects" 
                            className={`text-sm font-medium transition-colors duration-300 ${
                                isActive('/projects') 
                                    ? isHeroSection ? 'text-white' : 'text-black'
                                    : isHeroSection ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-black'
                            }`}
                        >
                            Projects
                        </Link>
                        <Link 
                            href="/development" 
                            className={`text-sm font-medium transition-colors duration-300 ${
                                isActive('/development') 
                                    ? isHeroSection ? 'text-white' : 'text-black'
                                    : isHeroSection ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-black'
                            }`}
                        >
                            Development
                        </Link>
                        <Link 
                            href="/journal" 
                            className={`text-sm font-medium transition-colors duration-300 ${
                                isActive('/journal') 
                                    ? isHeroSection ? 'text-white' : 'text-black'
                                    : isHeroSection ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-black'
                            }`}
                        >
                            Journal
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
} 