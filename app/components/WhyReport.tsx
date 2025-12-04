import { LifeBuoy, Zap, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

export default function WhyReport() {
    return (
        <section className="py-32 bg-[#020410]">
            <div className="container-custom">
                <div className="mb-20">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why report to Chainabuse?</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {/* Card 1 */}
                    <div className="glass-card rounded-2xl p-10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1">
                        <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-emerald-500/20">
                            <LifeBuoy className="h-8 w-8 text-emerald-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Get free support in a few clicks</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Our team works around the clock to provide support and guidance to victims of crypto scams.
                        </p>
                        <Link href="#" className="text-emerald-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all text-sm">
                            Talk to an expert <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    {/* Card 2 */}
                    <div className="glass-card rounded-2xl p-10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                            <Zap className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Improve recovery chances</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Reporting immediately significantly increases the likelihood of freezing stolen funds and recovery.
                        </p>
                        <Link href="#" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all text-sm">
                            Learn more <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    {/* Card 3 */}
                    <div className="glass-card rounded-2xl p-10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1">
                        <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                            <ShieldCheck className="h-8 w-8 text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Make the space safer</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Your report helps warn others and contributes to a safer crypto ecosystem for everyone.
                        </p>
                        <Link href="#" className="text-purple-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all text-sm">
                            See our impact <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Your privacy and safety, <br />
                            guaranteed.
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="mt-1 bg-primary/10 p-1.5 rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors">
                                    <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                                </div>
                                <p className="text-lg text-gray-300">We never share your personal details without your permission.</p>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="mt-1 bg-primary/10 p-1.5 rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors">
                                    <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                                </div>
                                <p className="text-lg text-gray-300">Anonymous reporting options available for your safety.</p>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="mt-1 bg-primary/10 p-1.5 rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors">
                                    <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                                </div>
                                <p className="text-lg text-gray-300">Secure data encryption and strict access controls.</p>
                            </div>
                        </div>
                    </div>

                    {/* Visual for Privacy Section */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-20"></div>
                        <div className="relative bg-card border border-white/5 rounded-3xl p-8 shadow-2xl">
                            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-xs text-gray-500 font-mono">Encrypted Connection</div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-4 bg-white/5 rounded w-3/4 animate-pulse"></div>
                                <div className="h-4 bg-white/5 rounded w-1/2 animate-pulse delay-75"></div>
                                <div className="h-4 bg-white/5 rounded w-5/6 animate-pulse delay-150"></div>
                            </div>
                            <div className="mt-8 flex justify-center">
                                <div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-green-500/20 flex items-center gap-2">
                                    <ShieldCheck className="h-4 w-4" />
                                    Secure & Private
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
