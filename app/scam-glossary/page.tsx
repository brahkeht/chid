"use client";

import { Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const tabs = [
    { id: 'blackmail', label: 'Blackmail' },
    { id: 'frauds', label: 'Frauds' },
    { id: 'hacks', label: 'Hacks' },
];

const glossaryData = {
    blackmail: {
        items: [
            'Sextortion scam',
            'Ransomware scam',
            'Other blackmail scams',
        ],
        content: [
            {
                title: 'Blackmail',
                description: `During a blackmail scam, the scammer demands payment from their victim for not revealing damaging information the scammer claims to have about them or to unblock something their victim needs. Blackmail scams differ in the information scammers leverage to threaten their victims.`,
            },
            {
                title: 'Sextortion scam',
                description: `A Sextortion scam occurs when the scammer pretends to hold sensitive or revealing information on a target they threaten to re-use unless they receive payment in crypto.`,
            },
            {
                title: 'Ransomware scam',
                description: `A Ransomware scam occurs when the scammer pretends to have locked up a computer system and demands payment to release it.`,
            },
            {
                title: 'Other blackmail scams',
                description: `A blackmail scam (other) occurs when the scammer threatens to start targeting the victim (them or their systems) if they do not transfer crypto funds.`,
            },
        ],
    },
    frauds: {
        items: [
            'Romance scam',
            'Pig butchering scam',
            'Impersonation scam',
            'Giveaway scam',
            'Phishing scam',
            'Investment scam',
            'NFT scam',
            'Rug pull scam',
            'Pump and dump',
            'Employment scam',
            'Marketplace scam',
            'Tech support scam',
            'Advance fee scam',
            'Charity scam',
        ],
        content: [
            {
                title: 'Frauds',
                description: `During a fraud, the scammer lies to the victim to get them to send crypto. Frauds differ in the lies scammers use to convince their victims to send crypto.`,
            },
            {
                title: 'Romance scam',
                description: `A Romance scam occurs when the scammer pretends to be romantically interested in the victim to get them to send crypto. For example, the scammer may claim they need money for an emergency or to visit the victim.`,
            },
            {
                title: 'Pig butchering scam',
                description: `A Pig butchering scam is a type of investment scam where the scammer builds trust with the victim over time (often through a fake romantic relationship) before convincing them to invest in a fraudulent cryptocurrency investment platform. The scammer typically shows fake profits to encourage larger investments before disappearing with all the funds.`,
            },
            {
                title: 'Impersonation scam',
                description: `An Impersonation scam occurs when the scammer pretends to be someone else to get the victim to send crypto. For example, the scammer may impersonate a celebrity, government official, or company representative.`,
            },
            {
                title: 'Giveaway scam',
                description: `A Giveaway scam occurs when the scammer promises to send the victim crypto if they send a smaller amount first. The scammer never sends the promised crypto.`,
            },
            {
                title: 'Phishing scam',
                description: `A Phishing scam occurs when the scammer tricks the victim into revealing sensitive information (like private keys or passwords) by pretending to be a legitimate service or website.`,
            },
            {
                title: 'Investment scam',
                description: `An Investment scam occurs when the scammer promises high returns on a crypto investment that doesn't exist or is worthless. The scammer may use fake testimonials, charts, or guarantees to appear legitimate.`,
            },
            {
                title: 'NFT scam',
                description: `An NFT scam involves fraudulent non-fungible token projects where scammers either sell fake NFTs, steal NFTs through phishing, or create projects they abandon after collecting funds.`,
            },
            {
                title: 'Rug pull scam',
                description: `A Rug pull scam occurs when developers create a new cryptocurrency or DeFi project, attract investors, and then suddenly withdraw all the funds and abandon the project.`,
            },
            {
                title: 'Pump and dump',
                description: `A Pump and dump scheme involves artificially inflating the price of a cryptocurrency through false or misleading statements, then selling off holdings at the inflated price, leaving other investors with worthless tokens.`,
            },
            {
                title: 'Employment scam',
                description: `An Employment scam occurs when scammers post fake job listings and ask applicants to pay fees in crypto for training, equipment, or background checks for jobs that don't exist.`,
            },
            {
                title: 'Marketplace scam',
                description: `A Marketplace scam occurs when scammers create fake listings on NFT or crypto marketplaces, either selling non-existent items or stealing funds without delivering promised goods.`,
            },
            {
                title: 'Tech support scam',
                description: `A Tech support scam occurs when scammers pretend to be technical support from a crypto wallet or exchange, claiming there's a problem with the victim's account and requesting access or payment to fix it.`,
            },
            {
                title: 'Advance fee scam',
                description: `An Advance fee scam occurs when scammers promise a large sum of crypto but require the victim to pay various fees upfront. The promised crypto never materializes.`,
            },
            {
                title: 'Charity scam',
                description: `A Charity scam occurs when scammers create fake charitable organizations or impersonate legitimate charities to solicit crypto donations that they keep for themselves.`,
            },
        ],
    },
    hacks: {
        items: [
            'Sim swaps',
            'Contract exploit',
            'Other hacks',
        ],
        content: [
            {
                title: 'Hacks',
                description: `During a hack, the 'hacker exploits a vulnerability' - in a smart contract, protocol, infrastructure, or software - steals information from their victims to get unauthorized use of their device and transfer funds directly or through fraud.`,
            },
            {
                title: 'Sim swaps',
                description: `A Sim Swap occurs when the hacker takes control of the victim's cell phone to gain transactions on their behalf.`,
            },
            {
                title: 'Contract exploit',
                description: `A Contract Exploit occurs when the contract exploits a vulnerability in a smart contract - such as steal funds from a wallet.`,
            },
            {
                title: 'Other hacks',
                description: `Other hacks can include, for example:

• A protocol attack: a "protocol attack" occurs when the scammer exploits a vulnerability in protocol - such as governance, to steal funds from them.
• A man-in-the-ops or infrastructure attack: A Man-in-middle attack occurs when the scammer exploits a vulnerability in a core piece of network to intercept information and access login information or private wallet keys. For example, during DNS hijacking, hackers manipulate DNS queries to redirect users to fake sites.`,
            },
        ],
    },
};

export default function ScamGlossaryPage() {
    const [activeTab, setActiveTab] = useState('hacks');

    return (
        <div className="min-h-screen bg-[#020410] pt-32 pb-20">

            {/* Header Section */}
            <div className="bg-[#0A0D1A] border-b border-white/5 py-8">
                <div className="container-custom">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-white">Scam Glossary</h1>
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

            {/* Tab Navigation */}
            <div className="bg-[#0A0D1A] border-b border-white/5">
                <div className="container-custom">
                    <div className="flex items-center gap-1 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-8 py-4 text-sm font-medium whitespace-nowrap transition-colors relative ${activeTab === tab.id
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="container-custom mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                    {/* Sidebar - Scam Type Links */}
                    <div className="lg:col-span-1">
                        <div className="space-y-4">
                            {glossaryData[activeTab as keyof typeof glossaryData].items.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={`#item-${idx}`}
                                    className="block text-sm text-blue-500 hover:text-blue-400 transition-colors leading-relaxed"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Main Content - Definitions */}
                    <div className="lg:col-span-3 space-y-10">
                        {glossaryData[activeTab as keyof typeof glossaryData].content.map((item, idx) => (
                            <div key={idx} id={`item-${idx}`} className="scroll-mt-32">
                                <h3 className="text-lg font-bold text-blue-500 mb-4">{item.title}</h3>
                                <div className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 text-center">
                    <p className="text-gray-400 text-sm mb-6">
                        If you have any feedback or additions to this list, please contact us at<br />
                        hello@chainabuse.com, or through the form available on the link below.
                    </p>
                    <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-8 py-3 rounded uppercase tracking-wide transition-colors">
                        CONTACT US
                    </Link>
                </div>
            </div>

        </div>
    );
}
