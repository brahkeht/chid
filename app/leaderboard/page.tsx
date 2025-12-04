"use client";

import { useState } from 'react';
import { CheckCircle2, User } from 'lucide-react';

const tabs = ["Last 7 Days", "Last 30 Days", "All Time"];

const mockData = {
    "Last 7 Days": [
        { rank: 1, name: "PhishFort", verified: true, joined: "Nov 2022", upvotes: "1,615", reports: "1,615" },
        { rank: 2, name: "AustrianSimon", verified: true, joined: "Mar 2023", upvotes: "419", reports: "419" },
        { rank: 3, name: "dev_pf", verified: false, joined: "Nov 2022", upvotes: "38", reports: "38" },
        { rank: 4, name: "APVA", verified: true, joined: "Mar 2023", upvotes: "13", reports: "13" },
        { rank: 5, name: "CCP_CH", verified: true, joined: "Mar 2023", upvotes: "4", reports: "4" },
        { rank: 6, name: "ludangovini", verified: false, joined: "May 2025", upvotes: "2", reports: "2" },
        { rank: 7, name: "kim", verified: true, joined: "Mar 2023", upvotes: "2", reports: "2" },
        { rank: 8, name: "josejose", verified: false, joined: "Jul 2025", upvotes: "2", reports: "2" },
        { rank: 9, name: "Devil 666_1", verified: false, joined: "Oct 2025", upvotes: "2", reports: "2" },
        { rank: 10, name: "CryptoLawyer", verified: false, joined: "Nov 2025", upvotes: "2", reports: "2" },
    ],
    "Last 30 Days": [
        { rank: 1, name: "PhishFort", verified: true, joined: "Nov 2022", upvotes: "5,230", reports: "5,230" },
        { rank: 2, name: "AustrianSimon", verified: true, joined: "Mar 2023", upvotes: "1,100", reports: "1,100" },
        { rank: 3, name: "ChainSleuth", verified: true, joined: "Jan 2023", upvotes: "850", reports: "850" },
        { rank: 4, name: "dev_pf", verified: false, joined: "Nov 2022", upvotes: "120", reports: "120" },
        { rank: 5, name: "APVA", verified: true, joined: "Mar 2023", upvotes: "95", reports: "95" },
    ],
    "All Time": [
        { rank: 1, name: "PhishFort", verified: true, joined: "Nov 2022", upvotes: "45,615", reports: "45,615" },
        { rank: 2, name: "AustrianSimon", verified: true, joined: "Mar 2023", upvotes: "12,419", reports: "12,419" },
        { rank: 3, name: "CryptoDefender", verified: true, joined: "Aug 2021", upvotes: "8,900", reports: "8,900" },
        { rank: 4, name: "dev_pf", verified: false, joined: "Nov 2022", upvotes: "5,038", reports: "5,038" },
        { rank: 5, name: "APVA", verified: true, joined: "Mar 2023", upvotes: "3,213", reports: "3,213" },
    ]
};

export default function LeaderboardPage() {
    const [activeTab, setActiveTab] = useState("Last 7 Days");

    const getRankColor = (rank: number) => {
        if (rank === 1) return "bg-yellow-500 text-black";
        if (rank === 2) return "bg-gray-300 text-black";
        if (rank === 3) return "bg-orange-600 text-white";
        return "bg-[#1E2330] text-gray-400";
    };

    return (
        <div className="min-h-screen bg-[#020410] pt-32 pb-20">
            <div className="container-custom">
                <div className="flex items-center justify-between mb-12">
                    <h1 className="text-3xl font-bold text-white">Leaderboard</h1>
                    <p className="text-gray-400 text-sm">Top contributors making web3 safer for all</p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center border-b border-white/10 mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-4 text-sm font-medium transition-all relative ${activeTab === tab ? "text-blue-500" : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                    <div className="col-span-6 md:col-span-4">Username</div>
                    <div className="col-span-3 md:col-span-4 text-center">Upvotes</div>
                    <div className="col-span-3 md:col-span-4 text-left pl-8">Reports</div>
                </div>

                {/* List */}
                <div className="space-y-2">
                    {mockData[activeTab as keyof typeof mockData].map((user) => (
                        <div key={user.rank} className="bg-[#0B0C15] border border-white/5 rounded-lg p-4 flex items-center hover:border-white/10 transition-colors group">
                            <div className="grid grid-cols-12 gap-4 w-full items-center">

                                {/* User Info */}
                                <div className="col-span-6 md:col-span-4 flex items-center gap-4">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${getRankColor(user.rank)}`}>
                                        {user.rank}
                                    </div>
                                    <div className="w-10 h-10 rounded-lg bg-[#1E2330] flex items-center justify-center text-gray-400 shrink-0">
                                        <User className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-blue-500 font-bold text-sm">{user.name}</span>
                                            {user.verified && <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 fill-blue-500/10" />}
                                        </div>
                                        <div className="text-xs text-gray-500">Joined {user.joined}</div>
                                    </div>
                                </div>

                                {/* Upvotes */}
                                <div className="col-span-3 md:col-span-4 text-center text-white font-medium">
                                    {user.upvotes}
                                </div>

                                {/* Reports */}
                                <div className="col-span-3 md:col-span-4 text-left pl-8 text-white font-medium">
                                    {user.reports}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
