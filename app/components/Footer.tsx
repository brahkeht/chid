import Link from 'next/link';
import { Twitter, Linkedin, Github, Shield } from 'lucide-react';
import { brandConfig } from '@/brand.config';

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#020410] pt-24 pb-12">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
                    <div className="col-span-2 lg:col-span-2 pr-8">
                        <Link href="/" className="flex items-center gap-2.5 mb-6 group">
                            <div className="relative flex items-center justify-center">
                                <Shield className="h-6 w-6 text-white" fill="currentColor" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">{brandConfig.nameFormatted}</span>
                        </Link>
                        <p className="text-gray-400 text-sm mb-8 max-w-xs leading-relaxed">
                            {brandConfig.description}
                        </p>
                        <div className="flex items-center gap-5">
                            <Link href={brandConfig.social.twitter} className="text-gray-500 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href={brandConfig.social.linkedin} className="text-gray-500 hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href={brandConfig.social.github} className="text-gray-500 hover:text-white transition-colors">
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Platform</h3>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Report Scam</Link></li>
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Check Address</Link></li>
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">API Access</Link></li>
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Enterprise</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Resources</h3>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Research</Link></li>
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Support</Link></li>
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Legal</Link></li>
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-gray-500">
                        {brandConfig.legal.copyright(new Date().getFullYear())}
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
