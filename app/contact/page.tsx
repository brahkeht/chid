"use client";

import { Search } from 'lucide-react';
import Link from 'next/link';
import { brandConfig } from '@/brand.config';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#020410] pt-32 pb-20">

            {/* Header Section */}
            <div className="bg-[#0A0D1A] border-b border-white/5 py-8">
                <div className="container-custom">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-white">Connect with us</h1>
                        <div className="relative w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Check addresses, URLs, IPs, etc..."
                                className="w-full bg-[#0B0C15] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="container-custom mt-16">
                <div className="max-w-2xl mx-auto">

                    {/* Intro Text */}
                    <div className="mb-10">
                        <h2 className="text-xl font-bold text-white mb-6">
                            Please reach out and we will get back to you shortly.
                        </h2>
                        <div className="text-gray-400 text-sm leading-relaxed space-y-4">
                            <p>
                                You can report scams <Link href="/report" className="text-blue-500 hover:text-blue-400 underline">here</Link>. If you're a victim seeking support, please report your case <Link href="/report" className="text-blue-500 hover:text-blue-400 underline">here</Link> and opt-in at the form's bottom for quicker help. No need to contact us.
                            </p>
                            <p>
                                For existing report inquiries, please email <a href={`mailto:${brandConfig.contact.email.support}`} className="text-blue-500 hover:text-blue-400 underline">{brandConfig.contact.email.support}</a>.<br />
                                Our <Link href="/faq" className="text-blue-500 hover:text-blue-400 underline">FAQs</Link> covers most questions. Thank you.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Full name"
                                className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                            />
                        </div>
                        <textarea
                            placeholder="Inquiry"
                            rows={5}
                            className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                        />
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="border border-white/20 text-gray-400 hover:text-white hover:border-white/40 font-medium text-xs px-6 py-2.5 rounded uppercase tracking-wide transition-colors"
                            >
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
}
