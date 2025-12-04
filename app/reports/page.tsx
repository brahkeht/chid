"use client";

import { Search, ChevronLeft, ChevronRight, Copy, ExternalLink, ThumbsUp, ShieldAlert, CheckCircle2, Filter, ChevronDown, ArrowUp, ArrowDown, Globe } from 'lucide-react';
import Link from 'next/link';

const reports = [
    {
        id: 1,
        title: "Fake Airdrop Site",
        verified: true,
        date: "2 mins ago",
        description: "Website claims to be official airdrop for new token but drains wallet upon connection.",
        reporter: "0x123...abc",
        upvotes: 12,
        chain: "Ethereum",
        category: "Phishing",
        address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
    },
    {
        id: 2,
        title: "Impersonation of Support",
        verified: false,
        date: "15 mins ago",
        description: "User on Telegram posed as support agent and asked for private keys.",
        reporter: "CryptoFan",
        upvotes: 5,
        chain: "Binance Smart Chain",
        category: "Impersonation",
        address: "0x829...912"
    },
    {
        id: 3,
        title: "Honey Pot Token",
        verified: true,
        date: "1 hour ago",
        description: "Token allows buying but prevents selling. Code contains hidden blacklist function.",
        reporter: "AuditBot",
        upvotes: 45,
        chain: "Ethereum",
        category: "Honey Pot",
        address: "0x1a2...3b4"
    },
    {
        id: 4,
        title: "Fake NFT Mint",
        verified: true,
        date: "3 hours ago",
        description: "Site mimics popular NFT collection mint page. Drains all ETH from wallet.",
        reporter: "NFT_Collector",
        upvotes: 8,
        chain: "Solana",
        category: "Phishing",
        address: "Sol...Address"
    },
    {
        id: 5,
        title: "Investment Scam",
        verified: false,
        date: "5 hours ago",
        description: "Promised 100% daily returns. Website is now offline and funds are gone.",
        reporter: "SadInvestor",
        upvotes: 2,
        chain: "Bitcoin",
        category: "Investment Scam",
        address: "bc1...xyz"
    },
    {
        id: 6,
        title: "Romance Scam",
        verified: false,
        date: "1 day ago",
        description: "Met on dating app, convinced me to invest in fake crypto exchange.",
        reporter: "Anon",
        upvotes: 1,
        chain: "USDT (TRC20)",
        category: "Romance Scam",
        address: "T9y...z12"
    }
];

const chains = [
    { name: "Bitcoin", count: "4,520", color: "bg-orange-500" },
    { name: "Ethereum", count: "3,210", color: "bg-blue-500" },
    { name: "Binance Smart Chain", count: "2,100", color: "bg-yellow-500" },
    { name: "Solana", count: "1,800", color: "bg-purple-500" },
    { name: "Polygon", count: "1,200", color: "bg-purple-600" },
    { name: "Tron", count: "950", color: "bg-red-500" },
    { name: "Avalanche", count: "800", color: "bg-red-600" },
    { name: "Arbitrum", count: "650", color: "bg-blue-400" },
    { name: "Optimism", count: "500", color: "bg-red-400" },
    { name: "Base", count: "400", color: "bg-blue-600" },
];

const categories = [
    { name: "Phishing", count: "1,205" },
    { name: "Rug Pull", count: "850" },
    { name: "Investment Scam", count: "720" },
    { name: "Impersonation", count: "600" },
    { name: "Honey Pot", count: "450" },
    { name: "Ransomware", count: "300" },
    { name: "Fake Exchange", count: "250" },
    { name: "Romance Scam", count: "150" },
    { name: "Blackmail", count: "100" },
    { name: "Other", count: "50" },
];

export default function ReportsPage() {
    return (
        <div className="min-h-screen bg-[#020410] pt-32 pb-20">
            <div className="container-custom">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-bold text-white">Scam Reports</h1>
                    <div className="relative w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Check addresses, URLs, IPs, etc..."
                            className="w-full bg-[#0B0C15] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                    </div>
                </div>

                {/* Sub-header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-white">1.1+ Million Scam Reports</h2>
                    <button className="flex items-center gap-2 text-xs font-bold text-blue-500 uppercase tracking-wide">
                        SORT BY <ChevronDown className="h-3 w-3" />
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Main Content - Reports List (Left - 3 cols) */}
                    <div className="lg:col-span-3 space-y-4">
                        {reports.map((report) => (
                            <div key={report.id} className="bg-[#0B0C15] border border-white/5 rounded-lg overflow-hidden hover:border-white/10 transition-colors group">
                                {/* Top Section: Title, Desc, Votes */}
                                <div className="p-6 grid grid-cols-12 gap-6">
                                    {/* Title */}
                                    <div className="col-span-3">
                                        <h3 className="font-bold text-white text-base leading-tight mb-2">{report.title}</h3>
                                        {report.verified && <CheckCircle2 className="h-4 w-4 text-blue-500 fill-blue-500/10 inline-block" />}
                                    </div>

                                    {/* Description & Meta */}
                                    <div className="col-span-8">
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                            {report.description}
                                        </p>
                                        <div className="text-xs text-gray-500">
                                            Submitted by <span className="text-blue-500">{report.reporter}</span> • {report.date}
                                        </div>
                                    </div>

                                    {/* Votes */}
                                    <div className="col-span-1 flex flex-col items-center justify-center gap-1 text-gray-500">
                                        <ArrowUp className="h-4 w-4 hover:text-white cursor-pointer" />
                                        <span className="text-sm font-bold text-white">{report.upvotes}</span>
                                        <ArrowDown className="h-4 w-4 hover:text-white cursor-pointer" />
                                    </div>
                                </div>

                                {/* Bottom Section: Address/Domain */}
                                <div className="bg-[#161922] px-6 py-4 border-t border-white/5 space-y-3">
                                    <div className="grid grid-cols-12 gap-4 items-center">
                                        <div className="col-span-3 text-xs text-gray-500 font-medium">Reported Address</div>
                                        <div className="col-span-9 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-gray-300 font-mono">
                                                <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-[10px] text-white font-bold">B</div>
                                                {report.address}
                                            </div>
                                            <ExternalLink className="h-3.5 w-3.5 text-gray-600 hover:text-white cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 gap-4 items-center">
                                        <div className="col-span-3 text-xs text-gray-500 font-medium">Reported Domain</div>
                                        <div className="col-span-9 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                                <Globe className="h-4 w-4 text-gray-500" />
                                                https://gold-xaut.life/
                                            </div>
                                            <ExternalLink className="h-3.5 w-3.5 text-gray-600 hover:text-white cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Pagination */}
                        <div className="flex justify-center pt-8 gap-2">
                            <button className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button className="w-8 h-8 rounded bg-blue-600 text-white font-bold flex items-center justify-center text-xs">1</button>
                            <button className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 hover:text-white transition-colors text-xs">2</button>
                            <button className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 hover:text-white transition-colors text-xs">3</button>
                            <span className="w-8 h-8 flex items-center justify-center text-gray-500 text-xs">...</span>
                            <button className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 hover:text-white transition-colors text-xs">12</button>
                            <button className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Sidebar - Filters (Right - 1 col) */}
                    <div className="lg:col-span-1 space-y-6">

                        <button className="w-full btn-outline py-3 text-xs font-bold tracking-wide border-blue-500/30 text-blue-500 hover:bg-blue-500/10 hover:text-blue-400">
                            FILE NEW REPORT
                        </button>

                        {/* Reports by Chain */}
                        <div>
                            <h3 className="text-white font-bold mb-4 text-sm">Reports by Chain</h3>
                            <div className="space-y-2">
                                {chains.map((chain, idx) => (
                                    <div key={idx} className="bg-[#0B0C15] border border-white/5 rounded p-3 flex items-center justify-between group cursor-pointer hover:border-white/10 transition-colors">
                                        <span className="text-gray-400 text-sm group-hover:text-white transition-colors">{chain.name}</span>
                                        <div className="flex items-center gap-3">
                                            <span className="text-gray-600 font-mono text-xs bg-[#161922] px-1.5 py-0.5 rounded">{chain.count}</span>
                                            <div className={`w-6 h-6 rounded flex items-center justify-center text-white text-[10px] font-bold ${chain.color}`}>
                                                {chain.name[0]}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
