import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { brandConfig } from '@/brand.config';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-40 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.15]"></div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl opacity-20"></div>

            <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-[64px] font-bold tracking-tight text-white mb-8 leading-[1.1]">
                        Report malicious <br />
                        <span className="text-gradient">crypto activity</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed font-light">
                        {brandConfig.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5">
                        <Link href={brandConfig.routes.report} className="btn-primary flex items-center justify-center gap-2 group text-[15px]">
                            Report Incident
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href={brandConfig.routes.about} className="btn-outline flex items-center justify-center text-[15px]">
                            Learn More
                        </Link>
                    </div>

                    <div className="mt-20 pt-8 border-t border-white/5">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">Trusted by industry leaders</p>
                        <div className="flex flex-wrap gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Placeholder logos - using simple shapes to mimic text logos */}
                            <div className="h-5 w-24 bg-white/30 rounded-sm"></div>
                            <div className="h-5 w-24 bg-white/30 rounded-sm"></div>
                            <div className="h-5 w-24 bg-white/30 rounded-sm"></div>
                            <div className="h-5 w-24 bg-white/30 rounded-sm"></div>
                        </div>
                    </div>
                </div>

                <div className="relative lg:h-[600px] flex items-center justify-center">
                    {/* Main Hero Image Placeholder - Abstract "Hand/Network" Graphic */}
                    <div className="relative w-full aspect-square max-w-[550px]">
                        {/* Central "Hand" Shape Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent rounded-full blur-2xl"></div>

                        <div className="relative z-10 w-full h-full border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-3xl p-8 overflow-hidden shadow-2xl ring-1 ring-white/10">
                            {/* Grid overlay inside the card */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                            {/* Abstract Network Graphic */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%]">
                                {/* Nodes and Lines */}
                                <div className="absolute top-[20%] left-[20%] w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)] animate-pulse"></div>
                                <div className="absolute top-[60%] right-[30%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                                <div className="absolute bottom-[20%] left-[40%] w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.8)]"></div>

                                {/* Connecting Lines (SVG) */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                                    <path d="M100 80 L250 200 L150 300" stroke="url(#line-gradient)" strokeWidth="1" fill="none" />
                                    <defs>
                                        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#60A5FA" />
                                            <stop offset="100%" stopColor="#C084FC" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Central "Hand" Graphic Placeholder */}
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full blur-xl"></div>
                                <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full border border-blue-500/20 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center animate-ping"></div>
                                </div>
                            </div>

                            {/* Floating UI Card */}
                            <div className="absolute top-10 left-10 bg-[#0B1021] border border-white/10 rounded-lg p-4 shadow-xl max-w-[200px] animate-[float_6s_ease-in-out_infinite]">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                        <div className="w-4 h-4 rounded-full bg-red-500"></div>
                                    </div>
                                    <div>
                                        <div className="h-2 w-16 bg-white/20 rounded mb-1"></div>
                                        <div className="h-2 w-10 bg-white/10 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
