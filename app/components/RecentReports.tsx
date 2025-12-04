import { ArrowUp, ArrowDown, CheckCircle2, Copy, ExternalLink, Bitcoin } from 'lucide-react';
import Link from 'next/link';

const reports = [
    {
        id: 1,
        title: "Blackmail Scams: Report and Learn on Chainabuse",
        verified: true,
        date: "03 Dec 2025 21:00:18 UTC",
        description: "scammer contacted us by e-mail impersonating us (sending from our own domain) with threatening content (e.g. blackmail, sextortion, ...) demanding payment to bitcoin address below\n\nMail originating from IP: 171.247.180.106 (abuse report also sent to: hm-changed@vnnic.vn)\n\nMail Subject: Sie haben eine ausstehende Zahlung.",
        submittedBy: "Anonymous",
        timeAgo: "48 minutes ago",
        address: "19nvbKWV15WKwTvahVHJhF5cE5X4dohTa3",
        coin: "Bitcoin"
    },
    {
        id: 2,
        title: "Rug Pull Scams: Report and Learn with Chainabuse",
        verified: false,
        date: "03 Dec 2025 20:15:00 UTC",
        description: "I lost $485,000 to this fake trading platform that kept demanding 20% deposits to unlock withdrawals. I was devastated. Thankfully, I found https://cutt.ly/therapyexpert they helped me get back my money. Highly recommended",
        submittedBy: "Anonymous",
        timeAgo: "54 minutes ago",
        address: "bc1q886luh2aq6kf9rjt64uwwfqns0fllwhj6yke3n",
        coin: "Bitcoin",
        domain: "https://gold-xaut.life/#/"
    }
];

export default function RecentReports() {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Recent Reports</h2>
                <div className="flex gap-3">
                    <Link href="#" className="btn-primary text-xs px-4 py-2 uppercase tracking-wide font-bold">Report a Scam</Link>
                    <Link href="#" className="btn-outline text-xs px-4 py-2 uppercase tracking-wide font-bold border-white/20 text-gray-300 hover:text-white">View All</Link>
                </div>
            </div>

            <div className="space-y-4">
                {reports.map((report) => (
                    <div key={report.id} className="bg-[#1E2330] rounded-lg p-6 border border-white/5">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-white text-lg">{report.title}</h3>
                                {report.verified && <CheckCircle2 className="h-5 w-5 text-blue-500 fill-blue-500/10" />}
                            </div>
                            <div className="flex items-center gap-2 text-gray-500">
                                <ArrowUp className="h-4 w-4 hover:text-white cursor-pointer" />
                                <span className="text-sm">1</span>
                                <ArrowDown className="h-4 w-4 hover:text-white cursor-pointer" />
                            </div>
                        </div>

                        <div className="text-xs text-gray-400 mb-4 font-mono">
                            {report.date}: {report.description.split('\n')[0].substring(0, 100)}...
                        </div>

                        <div className="text-sm text-gray-400 mb-6 whitespace-pre-line leading-relaxed">
                            {report.description}
                        </div>

                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6 border-b border-white/5 pb-6">
                            <span>Submitted by</span>
                            <span className="text-blue-400">{report.submittedBy}</span>
                            <span>{report.timeAgo}</span>
                        </div>

                        <div className="bg-[#161922] rounded p-3 flex items-center justify-between group">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                                    <Bitcoin className="h-4 w-4 text-white" />
                                </div>
                                <span className="text-gray-300 text-sm font-mono truncate">{report.address}</span>
                                <Copy className="h-3.5 w-3.5 text-gray-500 cursor-pointer hover:text-white transition-colors" />
                            </div>
                            <ExternalLink className="h-4 w-4 text-gray-500 cursor-pointer hover:text-white transition-colors" />
                        </div>

                        {report.domain && (
                            <div className="bg-[#161922] rounded p-3 flex items-center justify-between mt-2 group">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center shrink-0">
                                        <Globe className="h-3.5 w-3.5 text-white" />
                                    </div>
                                    <span className="text-gray-300 text-sm font-mono truncate">{report.domain}</span>
                                </div>
                                <ExternalLink className="h-4 w-4 text-gray-500 cursor-pointer hover:text-white transition-colors" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

import { Globe } from 'lucide-react';
