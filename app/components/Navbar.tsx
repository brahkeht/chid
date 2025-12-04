"use client";

import Link from 'next/link';
import { Search, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { brandConfig } from '@/brand.config';

export default function Navbar() {
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col font-sans">
            {/* Top Bar */}
            <div className="bg-[#161922] border-b border-white/5 py-2.5 px-6 flex items-center justify-between text-[11px] font-medium tracking-wide">
                <div className="flex items-center gap-2 text-gray-500 w-64">
                    <Search className="h-3.5 w-3.5" />
                    <input
                        type="text"
                        placeholder="Search addresses, URLs, IPs..."
                        className="bg-transparent border-none outline-none text-gray-300 placeholder:text-gray-600 w-full"
                    />
                </div>
                <div className="flex items-center gap-6 text-gray-400">
                    <Link href="#" className="hover:text-white transition-colors">Got Scammed?</Link>
                    <Link href="#" className="hover:text-white transition-colors">Safety Support Center</Link>
                    <Link href="#" className="hover:text-white transition-colors">API Docs</Link>
                    <Link href="#" className="hover:text-white transition-colors">Become a Partner</Link>
                </div>
            </div>

            {/* Alert Bar */}
            <div className="bg-[#FADCD3] text-[#5A2D22] px-6 py-2.5 flex items-center justify-between text-xs font-medium relative">
                <div className="w-full text-center">
                    {brandConfig.alerts.security}
                </div>
                <button className="absolute right-6 text-[#5A2D22]/70 hover:text-[#5A2D22] transition-colors">
                    <X className="h-4 w-4" />
                </button>
            </div>

            {/* Main Navbar */}
            <nav className="bg-[#0B0C15] border-b border-white/5 h-[72px] flex items-center px-6 justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-2xl font-bold tracking-tight text-white">
                        <span className="text-blue-500">{brandConfig.logo.prefix}</span>{brandConfig.logo.suffix}
                    </span>
                </Link>

                {/* Center Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                    <Link href="/report" className="hover:text-white transition-colors">Report a Scam</Link>
                    <Link href="/leaderboard" className="hover:text-white transition-colors">Top Contributors</Link>
                    <Link href="/reports" className="hover:text-white transition-colors">View Reports</Link>
                    <Link href="/success-stories" className="hover:text-white transition-colors">Success Stories</Link>

                    {/* About Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsAboutOpen(true)}
                        onMouseLeave={() => setIsAboutOpen(false)}
                    >
                        <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                            About <ChevronDown className="h-3.5 w-3.5" />
                        </div>

                        {isAboutOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-[#0B0C15] border border-white/10 rounded-lg shadow-xl py-2 z-50">
                                <Link href="/about" className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                                    About Us
                                </Link>
                                <Link href="/faq" className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                                    FAQ
                                </Link>
                                <Link href="/scam-glossary" className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                                    Scam Glossary
                                </Link>
                                <Link href="/contact" className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                                    Contact
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-xs font-bold bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                        English <ChevronDown className="h-3 w-3" />
                    </button>
                    <Link href="#" className="btn-outline text-xs px-8 py-2.5 border-blue-500/30 text-blue-500 hover:bg-blue-500/10 hover:text-blue-400 font-bold tracking-wide">
                        LOGIN
                    </Link>
                </div>
            </nav>
        </div>
    );
}
