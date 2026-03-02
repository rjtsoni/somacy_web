import React from 'react';
import { ShieldCheck, Play, Facebook, Youtube, Instagram, Twitter, Apple, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#f5f7fa] pt-10 pb-2 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-12 pb-10 border-b border-slate-200">
                    <div className="flex flex-col space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-xl shadow-blue-100 shrink-0">
                                <ShieldCheck size={24} className="text-white" />
                            </div>
                            <div className="leading-tight">
                                <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                                    Somacy
                                </h1>
                            </div>
                        </div>
                        <p className="text-slate-700 text-[12px] font-bold leading-relaxed">
                            Rajasthan's premier RGHS-first healthcare ecosystem. We bridge the gap between quality medicine and cashless convenience for thousands of families.
                        </p>
                        <div className="flex flex-col space-y-2.5">
                            <a href="mailto:contact@somacy.com" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors group">
                                <Mail size={14} className="text-slate-400 group-hover:text-blue-600" />
                                <span className="text-[12px] font-semibold truncate">contact@somacy.com</span>
                            </a>
                            <a href="tel:+911234567890" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors group">
                                <Phone size={14} className="text-slate-400 group-hover:text-blue-600" />
                                <span className="text-[12px] font-semibold">+91 12345 67890</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-5">
                        <h3 className="text-[12px] font-bold text-slate-900 uppercase tracking-widest">Primary Services</h3>
                        <ul className="space-y-3">
                            {['Cashless RGHS Order', 'Retail Medicine Store', 'Diagnostic Lab Booking', 'Ayurvedic Essentials'].map((item) => (
                                <li key={item}><a href="#" className="text-[12px] font-bold text-slate-500 hover:text-blue-600 transition-all">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col space-y-5">
                        <h3 className="text-[12px] font-bold text-slate-900 uppercase tracking-widest">RGHS Resources</h3>
                        <ul className="space-y-3">
                            {['How RGHS Works?', 'View Wallet Balance', 'Approved Hospital List', 'Help & Support'].map((item) => (
                                <li key={item}><a href="#" className="text-[12px] font-bold text-slate-500 hover:text-blue-600 transition-all">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col space-y-5">
                        <h3 className="text-[12px] font-bold text-slate-900 uppercase tracking-widest">Our Company</h3>
                        <ul className="space-y-3">
                            {['About us', 'Contact us', 'Blog'].map((item) => (
                                <li key={item}><a href="#" className="text-[12px] font-bold text-slate-500 hover:text-blue-600 transition-all">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col space-y-5">
                        <h3 className="text-[12px] font-bold text-slate-900 uppercase tracking-widest">Policies</h3>
                        <ul className="space-y-3">
                            {['Privacy Policy', 'Terms of Service', 'License Agreement', 'FAQ'].map((item) => (
                                <li key={item}><a href="#" className="text-[12px] font-bold text-slate-500 hover:text-blue-600 transition-all">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col space-y-6">
                        <div>
                            <h3 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-4">Follow Us On</h3>
                            <div className="flex gap-2">
                                {[Facebook, Youtube, Instagram, Twitter].map((Icon, idx) => (
                                    <a key={idx} href="#" className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all">
                                        <Icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-2">Download App</h3>
                            <div className="flex flex-col gap-2">
                                <a href="#" className="bg-slate-900 text-white px-2.5 py-1.5 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-all shadow-md">
                                    <Apple size={14} fill="currentColor" />
                                    <div className="flex flex-col">
                                        <span className="text-[7px] uppercase leading-none mb-0.5">Download on</span>
                                        <span className="text-[9px] font-bold leading-none">App Store</span>
                                    </div>
                                </a>
                                <a href="#" className="bg-slate-900 text-white px-2.5 py-1.5 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-all shadow-md">
                                    <Play size={14} fill="currentColor" />
                                    <div className="flex flex-col">
                                        <span className="text-[7px] uppercase leading-none mb-0.5">Get it on</span>
                                        <span className="text-[9px] font-bold leading-none">Google Play</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <p className="text-slate-700 text-[9px] leading-relaxed font-semibold">
                            Fully integrated with Rajasthan State e-Governance framework.
                        </p>
                    </div>

                </div>

                <div className="flex justify-center py-4">
                    <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        © 2024 Somacy Healthcare Private Limited. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
