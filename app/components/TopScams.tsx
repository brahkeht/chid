import Link from 'next/link';

const categories = [
    {
        name: "Phishing Scams: Stay Protected on Chainabuse",
        description: "Phishing is a tactic used by criminals to trick individuals into providing personal information that typically is associated with login information.",
        count: "510984"
    },
    {
        name: "Rug Pull Scams: Report and Learn with Chainabuse",
        description: "A Rug Pull occurs when an individual or group deletes their online foot print after accepting investor funds. It is the same as an exit scam where the goal is to run off with investor funds.",
        count: "386993"
    },
    {
        name: "Blackmail Scams: Report and Learn on Chainabuse",
        description: "A blackmail scam (other) occurs when the scammer threatens to start targeting the victim (them or their systems) if they do not transfer crypto funds.",
        count: "96327"
    },
    {
        name: "Sextortion Scams: Learn and Report on Chainabuse",
        description: "Sextortion occurs when individuals claim to hold sensitive or revealing information on a target that they will threaten to release unless they receive payment in crypto.",
        count: "42156"
    },
];

export default function TopScams() {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Top Scam Categories</h2>
                <Link href="#" className="btn-outline text-xs px-4 py-2 uppercase tracking-wide font-bold border-white/20 text-gray-300 hover:text-white">View All</Link>
            </div>

            <div className="space-y-4">
                {categories.map((cat, idx) => (
                    <div key={idx} className="bg-[#1E2330] rounded-lg p-6 border border-white/5 hover:border-white/10 transition-colors group">
                        <h3 className="font-bold text-white mb-3 text-lg">{cat.name}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed mb-4">{cat.description}</p>
                        <Link href="#" className="text-xs font-bold text-blue-500 hover:text-blue-400 uppercase tracking-wide">
                            See {cat.count} Reports
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
