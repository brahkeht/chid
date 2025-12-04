"use client";

import { Search } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
    {
        id: 1,
        title: "Case Study: $5 Million in Crypto Frozen After Coordinated Scam Detection",
        description: "A single report submitted through Chainabuse helped spark a significant disruption in a multi-victim crypto fraud network. By analyzing fund flows across victim cases, blockchain intelligence experts uncovered a consolidation wallet used to merge funds from various scams – a known tactic among organized fraud operations.",
    },
    {
        id: 2,
        title: "Case Study: Global Scam Network Exposed Through a Single Chainabuse Report",
        description: "In 2022, a single report submitted to Chainabuse helped expose a sprawling transnational scam operation. Using blockchain intelligence tools, investigators traced illicit fund flows across several countries and connected them to a pig butchering fraud network targeting global victims.",
    },
    {
        id: 3,
        title: "Case Study: Play-to-earn Scam Busted After Chainabuse Victim Reports Surge",
        description: "In early 2025, hundreds of reports submitted through Chainabuse flagged issues with a Web3 play-to-earn game suspected of running an exit scam. Withdrawals were blocked, accounts suspended, and victims cut off from their funds. The volume and consistency of complaints drew immediate attention.",
    },
    {
        id: 4,
        title: "Case Study: Blackmail Scam Traced to $2.78 Million in Illicit Funds",
        description: "A report submitted through Chainabuse by a victim of blackmail enabled investigators to uncover a laundering operation involving nearly USD 2.8 million in suspicious funds.",
    },
    {
        id: 5,
        title: "Case Study: $1.9 Million Scam Uncovered After Victim Report Triggers Investigation",
        description: "A report submitted through Chainabuse by a victim of an investment scam initiated a detailed blockchain investigation, which led to the identification of a high-risk wallet holding approximately USD 1.9 million in crypto assets.",
    }
];

export default function SuccessStoriesPage() {
    return (
        <div className="min-h-screen bg-[#020410] pt-32 pb-20">
            <div className="container-custom max-w-[1000px]">

                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <h1 className="text-3xl font-bold text-white">Success Stories</h1>
                    <div className="relative w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Check addresses, URLs, IPs, etc..."
                            className="w-full bg-[#0B0C15] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                    </div>
                </div>

                {/* Case Studies List */}
                <div className="space-y-6">
                    {caseStudies.map((study) => (
                        <div key={study.id} className="max-w-2xl mx-auto bg-[#0B0C15] border border-white/5 rounded-lg p-8 hover:border-white/10 transition-colors group">
                            <h3 className="text-lg font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                {study.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {study.description}
                            </p>
                            <Link href="#" className="text-xs font-bold text-blue-500 hover:text-blue-400 uppercase tracking-wide">
                                READ CASE
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <p className="text-gray-400 text-sm">
                        Want help on your case? <Link href="/report" className="text-blue-500 hover:text-blue-400 font-medium">Report a scam</Link> and opt-in to get personalized support.
                    </p>
                </div>

            </div>
        </div>
    );
}
