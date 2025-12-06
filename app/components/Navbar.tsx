"use client";

import Link from 'next/link';
import { Search, X, ChevronDown, Menu } from 'lucide-react';
import { useState } from 'react';
import { brandConfig } from '@/brand.config';

export default function Navbar() {
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col font-sans">
            {/* Top Bar - Hidden on mobile */}
            <div className="hidden md:flex bg-[#161922] border-b border-white/5 py-2.5 px-6 items-center justify-between text-[11px] font-medium tracking-wide">
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
                <div className="w-full text-center text-[10px] md:text-xs">
                    {brandConfig.alerts.security}
                </div>
                <button className="absolute right-4 md:right-6 text-[#5A2D22]/70 hover:text-[#5A2D22] transition-colors">
                    <X className="h-4 w-4" />
                </button>
            </div>

            {/* Main Navbar */}
            <nav className="bg-[#0B0C15] border-b border-white/5 h-[72px] flex items-center px-4 md:px-6 justify-between">
                {/* Logo */}
                <Link href={brandConfig.routes.home} className="flex items-center gap-2 group">
                    <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
                        <span className="text-blue-500">{brandConfig.logo.prefix}</span>{brandConfig.logo.suffix}
                    </span>
                </Link>

                {/* Center Links - Desktop */}
                <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-400">
                    <Link href={brandConfig.routes.report} className="hover:text-white transition-colors">Report a Scam</Link>
                    <Link href={brandConfig.routes.leaderboard} className="hover:text-white transition-colors">Top Contributors</Link>
                    <Link href={brandConfig.routes.reports} className="hover:text-white transition-colors">View Reports</Link>
                    <Link href={brandConfig.routes.successStories} className="hover:text-white transition-colors">Success Stories</Link>

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
                                <Link href={brandConfig.routes.about} className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                                    About Us
                                </Link>
                                <Link href={brandConfig.routes.faq} className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                                    FAQ
                                </Link>
                                <Link href={brandConfig.routes.glossary} className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                                    Scam Glossary
                                </Link>
                                <Link href={brandConfig.routes.contact} className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                                    Contact
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3 md:gap-4">
                    <button className="hidden md:flex items-center gap-2 text-xs font-bold bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                        English <ChevronDown className="h-3 w-3" />
                    </button>
                    <Link href={brandConfig.routes.login} className="hidden md:block btn-outline text-xs px-6 md:px-8 py-2.5 border-blue-500/30 text-blue-500 hover:bg-blue-500/10 hover:text-blue-400 font-bold tracking-wide">
                        LOGIN
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-[#0B0C15] border-b border-white/5 px-4 py-4">
                    <div className="flex flex-col space-y-1">
                        <Link
                            href={brandConfig.routes.report}
                            className="px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Report a Scam
                        </Link>
                        <Link
                            href={brandConfig.routes.leaderboard}
                            className="px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Top Contributors
                        </Link>
                        <Link
                            href={brandConfig.routes.reports}
                            className="px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            View Reports
                        </Link>
                        <Link
                            href={brandConfig.routes.successStories}
                            className="px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Success Stories
                        </Link>

                        {/* About Section */}
                        <div className="border-t border-white/5 pt-2 mt-2">
                            <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">About</p>
                            <Link
                                href={brandConfig.routes.about}
                                className="px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors block"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link
                                href={brandConfig.routes.faq}
                                className="px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors block"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                FAQ
                            </Link>
                            <Link
                                href={brandConfig.routes.glossary}
                                className="px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors block"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Scam Glossary
                            </Link>
                            <Link
                                href={brandConfig.routes.contact}
                                className="px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors block"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>

                        {/* Mobile Actions */}
                        <div className="border-t border-white/5 pt-4 mt-2 space-y-3">
                            <Link
                                href={brandConfig.routes.login}
                                className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm px-6 py-3 rounded transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                LOGIN
                            </Link>
                            <button className="w-full flex items-center justify-center gap-2 text-xs font-bold bg-white text-black px-4 py-2.5 rounded hover:bg-gray-200 transition-colors">
                                English <ChevronDown className="h-3 w-3" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
