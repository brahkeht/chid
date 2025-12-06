"use client";

import Link from 'next/link';
import { brandConfig } from '@/brand.config';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center relative overflow-hidden">

            {/* Network Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="network" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.5" fill="#3B82F6" opacity="0.5" />
                            <circle cx="100" cy="50" r="1" fill="#3B82F6" opacity="0.3" />
                            <circle cx="150" cy="100" r="1.5" fill="#3B82F6" opacity="0.4" />
                            <circle cx="50" cy="150" r="1" fill="#3B82F6" opacity="0.3" />
                            <circle cx="180" cy="180" r="1.5" fill="#3B82F6" opacity="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#network)" />
                    {/* Network lines */}
                    <line x1="0" y1="100" x2="300" y2="200" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2" />
                    <line x1="200" y1="0" x2="400" y2="300" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2" />
                    <line x1="500" y1="100" x2="800" y2="400" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2" />
                    <line x1="100" y1="300" x2="600" y2="500" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2" />
                    <line x1="700" y1="0" x2="900" y2="200" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2" />
                    <line x1="0" y1="400" x2="500" y2="600" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2" />
                    <line x1="800" y1="300" x2="1200" y2="500" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2" />
                    <line x1="300" y1="0" x2="600" y2="300" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2" />
                    <line x1="900" y1="100" x2="1100" y2="400" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2" />
                </svg>
            </div>

            {/* Login Card */}
            <div className="relative z-10 bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">

                {/* Logo */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold">
                        <span className="text-blue-500">{brandConfig.logo.prefix}</span>
                        <span className="text-gray-900">{brandConfig.logo.suffix}</span>
                    </h1>
                </div>

                {/* Welcome Text */}
                <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">Welcome</h2>
                <p className="text-blue-500 text-sm text-center mb-8">Login to {brandConfig.name}</p>

                {/* Login Form */}
                <form className="space-y-6">
                    <div>
                        <input
                            type="email"
                            placeholder="Email address*"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-md transition-colors"
                    >
                        Continue
                    </button>
                </form>

                {/* Sign Up Link */}
                <p className="text-center text-sm mt-4">
                    <span className="text-blue-500">Don't have an account?</span>{' '}
                    <Link href="/register" className="text-blue-600 font-semibold hover:underline">Sign up</Link>
                </p>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-1 border-t border-gray-200"></div>
                    <span className="px-4 text-xs text-gray-400">OR</span>
                    <div className="flex-1 border-t border-gray-200"></div>
                </div>

                {/* Social Login */}
                <div className="space-y-3">
                    <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-md py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        Continue with X
                    </button>

                    <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-md py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        <span className="text-xs font-mono bg-gray-100 px-1.5 py-0.5 rounded">ca</span>
                        Continue with Wallet
                    </button>
                </div>

            </div>
        </div>
    );
}
