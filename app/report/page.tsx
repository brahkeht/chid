import { CheckCircle2, Circle, Upload, Link as LinkIcon, HelpCircle, ChevronDown } from 'lucide-react';

export default function ReportPage() {
    return (
        <div className="min-h-screen bg-[#020410] pt-32 pb-20">
            <div className="container-custom">
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-white mb-2">Report a Scam</h1>
                    <p className="text-gray-400 max-w-2xl">
                        Enter the details of your case and opt-in to receive support from Chainabuse.
                        The more information you provide, the better we can help you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Sidebar Steps */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-8">
                            <div className="flex items-center gap-3 text-blue-500">
                                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">1</div>
                                <span className="font-medium">Case Details</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500">
                                <div className="w-6 h-6 rounded-full border border-gray-700 flex items-center justify-center text-xs font-bold">2</div>
                                <span className="font-medium">Scammer Information</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500">
                                <div className="w-6 h-6 rounded-full border border-gray-700 flex items-center justify-center text-xs font-bold">3</div>
                                <span className="font-medium">Description</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500">
                                <div className="w-6 h-6 rounded-full border border-gray-700 flex items-center justify-center text-xs font-bold">4</div>
                                <span className="font-medium">Contact & Support (optional)</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Form */}
                    <div className="lg:col-span-3 space-y-12">

                        {/* What happened? */}
                        <section>
                            <label className="block text-white font-bold mb-2">What happened?<span className="text-blue-500">*</span></label>
                            <p className="text-sm text-gray-400 mb-4">Choose one of the below categories. See the <span className="text-blue-500 cursor-pointer">Scam Glossary</span> for full descriptions of each scam.</p>

                            <div className="relative mb-6">
                                <select className="w-full bg-[#0B0C15] border border-white/10 rounded-lg px-4 py-3 text-gray-400 appearance-none focus:outline-none focus:border-primary/50 transition-colors">
                                    <option>Select an option</option>
                                    <option>Phishing</option>
                                    <option>Rug Pull</option>
                                    <option>Investment Scam</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4 pointer-events-none" />
                            </div>

                            <div className="bg-[#0B0C15] border border-white/5 rounded-lg p-6 flex items-center justify-between">
                                <div>
                                    <h3 className="text-white font-bold mb-1">Not sure what to choose?</h3>
                                    <p className="text-sm text-gray-400">Take our Scam Quiz to help you find out.</p>
                                </div>
                                <button className="btn-outline text-xs px-4 py-2">TAKE QUIZ</button>
                            </div>

                            <div className="mt-6">
                                <label className="block text-sm text-gray-400 mb-2">If other, please specify</label>
                                <input type="text" placeholder="Type of scam" className="w-full bg-[#0B0C15] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors" />
                            </div>
                        </section>

                        {/* Evidence */}
                        <section>
                            <div className="flex items-center gap-2 mb-2">
                                <label className="text-white font-bold">Evidence</label>
                                <span className="text-gray-500 text-sm">- Optional</span>
                            </div>
                            <p className="text-sm text-gray-400 mb-4">
                                Upload any screenshots or images that provide evidence of this case. For your own safety, make sure you do not include or blur out any personal information.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input type="text" placeholder="Source or URL" className="bg-[#0B0C15] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors" />
                                <div className="bg-[#0B0C15] border border-white/10 border-dashed rounded-lg px-4 py-3 flex items-center justify-between cursor-pointer hover:border-primary/30 transition-colors">
                                    <span className="text-gray-500 text-sm">Drop image here</span>
                                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                                        <LinkIcon className="h-4 w-4" />
                                        <span>Select file</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                    <div className="w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center text-[10px]">+</div>
                                    Add Evidence
                                </button>
                                <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                    <Upload className="h-4 w-4" />
                                    Bulk Add
                                </button>
                            </div>
                        </section>

                        {/* Report Sharing */}
                        <section>
                            <h3 className="text-white font-bold mb-4">Report Sharing</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Post report on Chainabuse.com</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
                                            Most users choose to make their report public to alert the community. All personal information will remain private. Chainabuse will never share your personal details on the platform.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 opacity-50">
                                    <div className="mt-1 w-4 h-4 rounded-full border border-gray-600"></div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Submit report privately</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
                                            Private reports are not visible and shared with Law Enforcements Partners only. Choose this option for sensitive reports tied to active investigations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="flex justify-end pt-8 border-t border-white/5">
                            <button className="btn-outline px-12 py-3 text-sm">NEXT</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
