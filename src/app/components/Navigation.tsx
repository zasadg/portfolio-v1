"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xs border-b border-gray-200">
            <div className="max-w-full mx-auto px-16">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-semibold">
                            KN
                        </Link>
                    </div>
                    
                    <div className="flex items-center space-x-8">
                        <Link 
                            href="/projects" 
                            className={`text-sm font-medium transition-colors ${
                                isActive('/projects') 
                                    ? 'text-black' 
                                    : 'text-gray-500 hover:text-black'
                            }`}
                        >
                            Projects
                        </Link>
                        <Link 
                            href="/development" 
                            className={`text-sm font-medium transition-colors ${
                                isActive('/development') 
                                    ? 'text-black' 
                                    : 'text-gray-500 hover:text-black'
                            }`}
                        >
                            Development
                        </Link>
                        <Link 
                            href="/journal" 
                            className={`text-sm font-medium transition-colors ${
                                isActive('/journal') 
                                    ? 'text-black' 
                                    : 'text-gray-500 hover:text-black'
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