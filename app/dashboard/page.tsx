"use client";

import { useState } from 'react';
import Link from 'next/link';
import { LogOut, Upload, User } from 'lucide-react';

// Mock user data
const userData = {
    username: 'swiftsalamande',
    email: 'brahkeht@gmail.com',
    joinedDate: 'Dec 2025',
    reports: 0,
    upvotes: 0,
    socials: {
        twitter: '',
        discord: '',
        telegram: '',
        instagram: '',
    }
};

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState<'reports' | 'settings'>('reports');
    const [settingsSection, setSettingsSection] = useState<'personal' | 'apikey'>('personal');

    // Form state
    const [email, setEmail] = useState(userData.email);
    const [username, setUsername] = useState(userData.username);
    const [twitter, setTwitter] = useState(userData.socials.twitter);
    const [discord, setDiscord] = useState(userData.socials.discord);
    const [telegram, setTelegram] = useState(userData.socials.telegram);
    const [instagram, setInstagram] = useState(userData.socials.instagram);
    const [receiveUpdates, setReceiveUpdates] = useState(false);

    return (
        <div className="min-h-screen bg-[#020410] pt-32 pb-20">
            <div className="container-custom">

                {/* Profile Header */}
                <div className="flex items-center gap-6 mb-8">
                    {/* Avatar */}
                    <div className="w-24 h-24 rounded-full bg-[#1A2744] flex items-center justify-center border-2 border-[#2A3A5A]">
                        <User className="w-12 h-12 text-[#3B5998]" />
                    </div>

                    {/* User Info */}
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-white mb-1">{userData.username}</h1>
                        <p className="text-gray-500 text-sm">Joined {userData.joinedDate}</p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">{String(userData.reports).padStart(4, '0')}</div>
                            <div className="text-gray-500 text-sm">Reports</div>
                        </div>
                        <div className="w-px h-10 bg-white/10"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-500">{String(userData.upvotes).padStart(4, '0')}</div>
                            <div className="text-gray-500 text-sm">Upvotes</div>
                        </div>
                    </div>
                </div>

                {/* Tabs and Logout */}
                <div className="flex items-center justify-between border-b border-white/10 mb-8">
                    <div className="flex">
                        <button
                            onClick={() => setActiveTab('reports')}
                            className={`px-8 py-4 text-sm font-medium transition-colors relative ${activeTab === 'reports' ? 'text-white' : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Reports
                            {activeTab === 'reports' && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('settings')}
                            className={`px-8 py-4 text-sm font-medium transition-colors relative ${activeTab === 'settings' ? 'text-white' : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Settings
                            {activeTab === 'settings' && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                            )}
                        </button>
                    </div>

                    <button className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                        <LogOut className="w-4 h-4" />
                        Log out
                    </button>
                </div>

                {/* Reports Tab Content */}
                {activeTab === 'reports' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-white">No Reports</h2>
                                <button className="text-gray-500 text-sm flex items-center gap-1">
                                    SORT BY <span className="text-gray-600">▼</span>
                                </button>
                            </div>

                            <p className="text-gray-400 text-sm mb-8">
                                You haven't submitted any Scam Reports. If you suspect an address is being used in a scam, please report it.
                            </p>

                            <Link
                                href="/report"
                                className="inline-block border border-blue-500 text-blue-500 hover:bg-blue-500/10 font-medium text-xs px-8 py-3 rounded uppercase tracking-wide transition-colors"
                            >
                                FILE NEW REPORT
                            </Link>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <Link
                                href="/report"
                                className="block w-full bg-blue-500/10 border border-blue-500 text-blue-500 hover:bg-blue-500/20 font-medium text-xs px-8 py-3 rounded uppercase tracking-wide transition-colors text-center mb-8"
                            >
                                FILE NEW REPORT
                            </Link>

                            <h3 className="text-white font-bold mb-4">Reports by Category</h3>
                            <p className="text-gray-500 text-sm">No reports</p>
                        </div>
                    </div>
                )}

                {/* Settings Tab Content */}
                {activeTab === 'settings' && (
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Settings Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="space-y-2">
                                <button
                                    onClick={() => setSettingsSection('personal')}
                                    className={`block w-full text-left text-sm py-2 transition-colors ${settingsSection === 'personal' ? 'text-blue-500' : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    Personal Details
                                </button>
                                <div className="border-t border-white/10 pt-2">
                                    <button
                                        onClick={() => setSettingsSection('apikey')}
                                        className={`block w-full text-left text-sm py-2 transition-colors ${settingsSection === 'apikey' ? 'text-blue-500' : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        API Key
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Settings Content */}
                        <div className="lg:col-span-3">
                            {settingsSection === 'personal' && (
                                <div className="bg-[#0A0D1A] border border-white/10 rounded-lg p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {/* Form Fields */}
                                        <div className="md:col-span-2 space-y-6">
                                            {/* Email */}
                                            <div>
                                                <label className="block text-white text-sm font-medium mb-2">Enter your email</label>
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="w-full bg-[#0B0C15] border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                                                />
                                                <p className="text-gray-500 text-xs mt-2">
                                                    To reset your password, log out, log back in and click on "Forgot password?" after you enter your email.
                                                </p>
                                            </div>

                                            {/* Username */}
                                            <div>
                                                <label className="block text-white text-sm font-medium mb-2">Enter a username</label>
                                                <input
                                                    type="text"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    className="w-full bg-[#0B0C15] border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                                                />
                                            </div>

                                            {/* Social Links */}
                                            <div>
                                                <label className="block text-white text-sm font-medium mb-4">Get Social</label>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-3">
                                                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                        </svg>
                                                        <input
                                                            type="text"
                                                            placeholder="@username"
                                                            value={twitter}
                                                            onChange={(e) => setTwitter(e.target.value)}
                                                            className="flex-1 bg-[#0B0C15] border border-white/10 rounded px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                                                        />
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
                                                        </svg>
                                                        <input
                                                            type="text"
                                                            placeholder="@username"
                                                            value={discord}
                                                            onChange={(e) => setDiscord(e.target.value)}
                                                            className="flex-1 bg-[#0B0C15] border border-white/10 rounded px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                                                        />
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                                        </svg>
                                                        <input
                                                            type="text"
                                                            placeholder="@username"
                                                            value={telegram}
                                                            onChange={(e) => setTelegram(e.target.value)}
                                                            className="flex-1 bg-[#0B0C15] border border-white/10 rounded px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                                                        />
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.757-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                                        </svg>
                                                        <input
                                                            type="text"
                                                            placeholder="@username"
                                                            value={instagram}
                                                            onChange={(e) => setInstagram(e.target.value)}
                                                            className="flex-1 bg-[#0B0C15] border border-white/10 rounded px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Email Updates */}
                                            <div className="flex items-start gap-2">
                                                <input
                                                    type="checkbox"
                                                    id="updates"
                                                    checked={receiveUpdates}
                                                    onChange={(e) => setReceiveUpdates(e.target.checked)}
                                                    className="mt-1 w-4 h-4 text-blue-500 border-gray-600 rounded bg-transparent focus:ring-blue-500"
                                                />
                                                <label htmlFor="updates" className="text-sm text-gray-400">
                                                    I want to receive product updates and announcements via email.
                                                </label>
                                            </div>

                                            {/* Save Button */}
                                            <button className="w-full border border-white/20 text-gray-400 hover:text-white hover:border-white/40 font-medium text-xs px-8 py-3 rounded uppercase tracking-wide transition-colors">
                                                SAVE CHANGES
                                            </button>
                                        </div>

                                        {/* Profile Picture */}
                                        <div className="md:col-span-1">
                                            <label className="block text-white text-sm font-medium mb-4">Profile Picture</label>
                                            <div className="w-32 h-32 rounded-lg bg-[#1A2744] flex items-center justify-center border border-white/10 mx-auto mb-4">
                                                <User className="w-16 h-16 text-[#3B5998]" />
                                            </div>
                                            <button className="flex items-center justify-center gap-2 text-blue-500 text-sm mx-auto hover:text-blue-400 transition-colors">
                                                <Upload className="w-4 h-4" />
                                                Upload new
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {settingsSection === 'apikey' && (
                                <div className="bg-[#0A0D1A] border border-white/10 rounded-lg p-8">
                                    <p className="text-gray-400 text-sm mb-4">
                                        In order to issue your api key you need to confirm your email address.
                                        Please click on the link sent to <span className="text-white">{email}</span>
                                    </p>
                                    <p className="text-sm">
                                        <span className="text-gray-500">Not getting the email? </span>
                                        <button className="text-blue-500 hover:text-blue-400 transition-colors">Resend the email</button>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
