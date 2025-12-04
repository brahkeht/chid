import { Building2, Globe2, Shield, Users } from 'lucide-react';

const stats = [
    { label: "Reports", value: "1197k", icon: Shield },
    { label: "Companies", value: "21", icon: Building2 },
    { label: "Supported Chains", value: "46", icon: Globe2 },
    { label: "Addresses", value: "769k", icon: Users },
    { label: "Recovered", value: "725k", icon: Shield },
];

const contributors = [
    "Binance", "Circle", "Civic", "Hedera", "TRM Labs", "Solana", "Polygon", "Avalanche", "Optimism", "Arbitrum"
];

export default function Stats() {
    return (
        <section className="py-32 bg-[#020410] border-t border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]"></div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-40">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center group">
                            <div className="flex justify-center mb-6 opacity-30 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                                <stat.icon className="h-10 w-10 text-white" strokeWidth={1.5} />
                            </div>
                            <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tighter">{stat.value}</div>
                            <div className="text-sm text-gray-500 uppercase tracking-widest font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="text-center max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-3">Top Contributors</h2>
                    <p className="text-gray-400 text-sm mb-10">Working together to make crypto safer</p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {contributors.map((name, idx) => (
                            <div key={idx} className="px-6 py-2.5 bg-white/[0.03] border border-white/5 rounded-full text-sm font-medium text-gray-400 hover:bg-white/[0.08] hover:text-white hover:border-white/10 transition-all cursor-default flex items-center gap-2.5 group">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-colors"></div>
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
