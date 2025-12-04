"use client";

import { Search } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#020410] pt-32 pb-20">
            <div className="container-custom max-w-[1000px]">

                {/* Header */}
                <div className="flex items-center justify-between mb-16">
                    <h1 className="text-3xl font-bold text-white">About Chainabuse</h1>
                    <div className="relative w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Check addresses, URLs, IPs, etc..."
                            className="w-full bg-[#0B0C15] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                    </div>
                </div>

                {/* Hero Section */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Chainabuse is the leading reporting platform for malicious crypto activity worldwide. We are on a mission to make crypto safe and trusted for the next billion users.
                    </h2>
                    <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                        <p>
                            We empower anyone anywhere to report malicious crypto activity and to have their identity safe. We provide the largest victim-to-victim community.
                        </p>
                        <p>
                            We believe our "network-of-networks" approach is the best way to make the blockchain and crypto space safe for everyone and investigators.
                        </p>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {/* Goal Support Card */}
                    <div className="bg-[#0B0C15] border border-white/5 rounded-lg p-8 hover:border-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-white font-bold mb-3">Goal Support</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Receive free service to report now.
                        </p>
                    </div>

                    {/* Alert Card */}
                    <div className="bg-[#0B0C15] border border-white/5 rounded-lg p-8 hover:border-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </div>
                        <h3 className="text-white font-bold mb-3">Alert</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Be a life saver! Alert others to stay safe.
                        </p>
                    </div>

                    {/* Support Card */}
                    <div className="bg-[#0B0C15] border border-white/5 rounded-lg p-8 hover:border-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <h3 className="text-white font-bold mb-3">Support</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Bring more safety to your community.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mb-20">
                    <h3 className="text-xl font-bold text-white mb-6">Want to know more?</h3>
                    <Link href="/faq" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-8 py-3 rounded uppercase tracking-wide transition-colors">
                        GO TO CHAINABUSE FAQS
                    </Link>
                </div>

                {/* Partners Section */}
                <div className="mb-16">
                    <h3 className="text-center text-blue-500 font-bold text-sm mb-8 uppercase tracking-wide">Chainabuse Partners</h3>

                    {/* First Row of Partners */}
                    <div className="flex items-center justify-center gap-12 mb-8 flex-wrap">
                        <div className="text-gray-400 font-bold text-lg">SOLANA</div>
                        <div className="text-gray-400 font-bold text-lg">OpenSea</div>
                        <div className="text-gray-400 font-bold text-lg">BINANCE.US</div>
                        <div className="text-gray-400 font-bold text-lg">AAVE</div>
                    </div>

                    {/* Second Row of Partners */}
                    <div className="flex items-center justify-center gap-12 flex-wrap">
                        <div className="text-gray-400 font-bold text-lg">CIRCLE</div>
                        <div className="text-gray-400 font-bold text-lg">civic</div>
                        <div className="text-gray-400 font-bold text-lg">Hedera</div>
                        <div className="text-gray-400 font-bold text-lg">RANSOMWHERE</div>
                    </div>
                </div>

                {/* More Partners */}
                <div className="mb-16">
                    <div className="flex items-center justify-center gap-12 mb-8 flex-wrap">
                        <div className="text-gray-400 font-bold text-lg">Aleo</div>
                        <div className="text-gray-400 font-bold text-lg">LEDGER</div>
                        <div className="text-gray-400 font-bold text-lg">SafePal</div>
                    </div>
                    <div className="flex items-center justify-center gap-12 flex-wrap">
                        <div className="text-gray-400 font-bold text-lg">Magic</div>
                        <div className="text-gray-400 font-bold text-lg">SHIKROCK</div>
                        <div className="text-gray-400 font-bold text-lg">webacy</div>
                        <div className="text-gray-400 font-bold text-lg">BROKK</div>
                        <div className="text-gray-400 font-bold text-lg">Ø</div>
                    </div>
                </div>

                {/* Powered by TRM */}
                <div className="text-center mb-16">
                    <p className="text-gray-500 text-xs mb-2 uppercase tracking-wide">Powered by</p>
                    <div className="text-white font-bold text-2xl">TRM</div>
                </div>

                {/* Web3 Security Network */}
                <div className="bg-[#0B0C15] border border-white/5 rounded-lg p-12 mb-12">
                    <h3 className="text-center text-white font-bold text-lg mb-8">Web3 Security Network</h3>

                    {/* First Row */}
                    <div className="flex items-center justify-center gap-8 mb-6 flex-wrap">
                        <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center">
                            <span className="text-gray-400 text-xs">Logo</span>
                        </div>
                        <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center">
                            <span className="text-gray-400 text-xs">Logo</span>
                        </div>
                        <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center">
                            <span className="text-gray-400 text-xs">Logo</span>
                        </div>
                        <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center">
                            <span className="text-gray-400 text-xs">Logo</span>
                        </div>
                        <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center">
                            <span className="text-gray-400 text-xs">Logo</span>
                        </div>
                        <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center">
                            <span className="text-gray-400 text-xs">Logo</span>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="flex items-center justify-center gap-8 flex-wrap">
                        <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center">
                            <span className="text-gray-400 text-xs">Logo</span>
                        </div>
                        <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center">
                            <span className="text-gray-400 text-xs">Logo</span>
                        </div>
                        <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center">
                            <span className="text-gray-400 text-xs">Logo</span>
                        </div>
                        <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center">
                            <span className="text-gray-400 text-xs">Logo</span>
                        </div>
                        <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center">
                            <span className="text-gray-400 text-xs">Logo</span>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <Link href="#" className="inline-block border border-blue-500/30 text-blue-500 hover:bg-blue-500/10 hover:text-blue-400 font-bold text-xs px-8 py-3 rounded uppercase tracking-wide transition-colors">
                        BECOME A PARTNER
                    </Link>
                </div>

            </div>
        </div>
    );
}
