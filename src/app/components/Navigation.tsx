"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const [isHeroSection, setIsHeroSection] = useState(true);
    const [activeSection, setActiveSection] = useState('');
    const pathname = usePathname();

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
            const headerOffset = 64; // Height of the fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(targetId);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            // Get the scroll position
            const scrollPosition = window.scrollY;
            // Consider hero section when we're near the top (within 500px)
            setIsHeroSection(scrollPosition < 500);

            // Update active section based on scroll position
            const sections = ['#projects', '#code', '#others'];
            const headerOffset = 64;

            for (const section of sections) {
                const element = document.querySelector(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= headerOffset && rect.bottom >= headerOffset) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => {
        return activeSection === path;
    };

    const getTextColor = (isActive: boolean) => {
        console.log('Current hero section state:', isHeroSection);
        if (isHeroSection) {
            return isActive ? 'text-white' : 'text-gray-300 hover:text-white';
        } else {
            return isActive ? 'text-black' : 'text-gray-500 hover:text-black';
        }
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
                            <Image src="/logo.png" alt="cat logo" width={32} height={32} className="w-auto h-8 rounded-full" loading="lazy" />
                            <span>KnM</span>
                        </Link> 
                    </div>
                    
                    <div className="flex items-center space-x-8">
                        {pathname === '/about-me' ? (
                            <Link 
                                href="/"
                                className={`text-sm font-medium transition-colors duration-300 ${
                                    isHeroSection ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-black'
                                }`}
                            >
                                Return Home
                            </Link>
                        ) : (
                            <>
                                <Link 
                                    href="#projects" 
                                    onClick={(e) => handleSmoothScroll(e, '#projects')}
                                    className={`text-sm font-medium transition-colors duration-300 ${
                                        getTextColor(isActive('#projects'))
                                    }`}
                                >
                                    Projects
                                </Link>
                                <Link 
                                    href="#code" 
                                    onClick={(e) => handleSmoothScroll(e, '#code')}
                                    className={`text-sm font-medium transition-colors duration-300 ${
                                        getTextColor(isActive('#code'))
                                    }`}
                                >
                                    Code
                                </Link>
                                <Link 
                                    href="#others" 
                                    onClick={(e) => handleSmoothScroll(e, '#others')}
                                    className={`text-sm font-medium transition-colors duration-300 ${
                                        getTextColor(isActive('#others'))
                                    }`}
                                >
                                    Others
                                </Link>
                                <Link 
                                    href="/about-me"
                                    className={`text-sm font-medium transition-colors duration-300 ${
                                        getTextColor(pathname === '/about-me')
                                    }`}
                                >
                                    About
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
} 