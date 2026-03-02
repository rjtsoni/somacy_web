import React from 'react';
import { Upload, CreditCard, Pill, Award, Truck, ArrowRight, Bookmark, ChevronRight, ShieldAlert } from 'lucide-react';

const Hero = () => {
    return (
        <section className="bg-[#f8fafc] pt-4 md:pt-6 font-sans">
            <div className="w-full px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 mb-6">

                    <div className="bg-[#0A1A2F] rounded-[2rem] p-4 md:p-6 relative overflow-hidden shadow-2xl">

                        <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
                            <ShieldAlert className="w-64 h-64 md:w-96 md:h-96" strokeWidth={1} />
                        </div>

                        <div className="relative z-10">

                            <div className="relative -mx-4 md:-mx-6 mb-5 cursor-pointer overflow-hidden group/partner">
                                <style>
                                    {`
                                        @keyframes sweep {
                                            0% { transform: translateX(-100%); }
                                            50% { transform: translateX(100%); }
                                            100% { transform: translateX(100%); }
                                        }
                                        .animate-sweep-gold {
                                            animation: sweep 4s infinite ease-in-out;
                                        }
                                    `}
                                </style>

                                <div className="absolute inset-y-0 left-0 w-full bg-[#0F243A]/60 backdrop-blur-sm border-y border-white/5 -z-0">
                                    <div className="absolute inset-0 animate-sweep-gold bg-gradient-to-r from-transparent via-[#CFB27F]/20 to-transparent"></div>
                                </div>

                                <div className="relative z-10 py-2.5 px-6">
                                    <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 group-hover/partner:border-[#CFB27F]/40 group-hover/partner:bg-[#CFB27F]/10">
                                        <span className="relative flex h-2 w-2 mr-3 text-[#CFB27F]">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-40"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-current shadow-[0_0_8px_currentColor]"></span>
                                        </span>
                                        <span className="text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] opacity-90 group-hover/partner:text-[#CFB27F]">
                                            Official Rajasthan Govt. Partner
                                        </span>
                                    </div>
                                </div>
                            </div>


                            <h1 className="text-2xl md:text-3xl font-black text-white leading-[1.1] mb-2 tracking-tight">
                                The Ultimate <br />
                                <span className="text-[#CFB27F]">RGHS Cashless</span> <br />
                                Gateway.
                            </h1>


                            <p className="text-white/70 text-xs mb-4 max-w-sm font-medium leading-relaxed">
                                Exclusively for Govt. employees & pensioners. Get 100% cashless medicines delivered at home with verified RGHS billing.
                            </p>


                            <div className="flex flex-col sm:flex-row gap-4 mb-5">
                                <button className="flex items-center justify-center gap-3 bg-white text-[#0A1A2F] hover:bg-[#CFB27F] hover:text-white px-6 py-2.5 rounded-full font-black text-xs tracking-wide shadow-xl">
                                    <Upload size={16} strokeWidth={2.5} />
                                    Upload Prescription
                                </button>
                                <button className="flex items-center justify-center gap-3 border-2 border-white/20 text-white px-6 py-2.5 rounded-full font-black text-xs tracking-wide hover:bg-white/10">
                                    <CreditCard size={16} strokeWidth={2.5} />
                                    Check Wallet Balance
                                </button>
                            </div>


                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    <div className="w-8 h-8 rounded-full border-2 border-[#0A1A2F] bg-[#93C5AD] flex items-center justify-center relative z-30">
                                        <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border-2 border-[#0A1A2F] bg-[#F1F5F9] flex items-center justify-center relative z-20">
                                        <div className="w-4 h-4 bg-[#64748B]/20 rounded-full"></div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border-2 border-[#0A1A2F] bg-[#93C5AD] flex items-center justify-center relative z-10">
                                        <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-[11px] font-bold tracking-tight">
                                    Trusted by <span className="text-white">50,000+</span> Rajasthan Govt. Beneficiaries
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="bg-[#EBF5FF] rounded-[2rem] flex flex-col relative overflow-hidden group shadow-xl">

                        <div className="p-5 md:p-6 flex flex-col items-center justify-center text-center flex-1">

                            <div className="absolute top-4 left-4">
                                <span className="bg-[#00D084] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                                    Featured Offer
                                </span>
                            </div>


                            <div className="w-12 h-12 bg-white rounded-2xl shadow-xl shadow-blue-200/50 flex items-center justify-center mb-3 transform transition-transform group-hover:rotate-6">
                                <Pill size={24} className="text-[#3D7FFF]" strokeWidth={1.5} />
                            </div>
                            <h2 className="text-xl font-black text-[#1E293B] mb-2 tracking-tight leading-tight">
                                Switch to <span className="text-[#3D7FFF]">Generic Medicines</span>
                            </h2>
                            <p className="text-slate-600 text-[11px] mb-3 max-w-[280px] font-medium leading-relaxed">
                                Save up to <span className="text-[#00B86B] font-black">80% on medical bills</span> with premium WHO-GMP certified generic alternatives.
                            </p>
                            <button className="bg-[#3D7FFF] hover:bg-[#2563EB] text-white px-6 py-2.5 rounded-full font-black text-[11px] tracking-wide shadow-lg shadow-blue-200">
                                Find Generics
                            </button>


                            <div className="flex gap-2 mt-4">
                                <span className="w-8 h-1.5 bg-[#3D7FFF] rounded-full"></span>
                                <span className="w-2 h-1.5 bg-blue-200 rounded-full"></span>
                                <span className="w-2 h-1.5 bg-blue-200 rounded-full"></span>
                            </div>
                        </div>


                        <div className="bg-white px-6 py-4 flex justify-between items-center border-t border-blue-100">
                            <div className="flex items-center gap-2 text-[10px] font-black text-[#1E293B] uppercase tracking-tight">
                                <Award size={14} className="text-orange-500" />
                                Quality Certified
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-black text-[#1E293B] uppercase tracking-tight">
                                <Truck size={14} className="text-[#3D7FFF]" />
                                Free Express Delivery
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-[#1A56DB] rounded-[2rem] px-6 py-4 md:py-3 text-white relative overflow-hidden group shadow-2xl">

                    <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#fff_1.2px,transparent_1.2px)] [background-size:12px_12px] pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-5">

                        <div className="flex items-center gap-5 w-full xl:w-auto">
                            <div className="w-14 h-14 bg-[#3B82F6]/30 backdrop-blur-md rounded-full flex items-center justify-center shrink-0 border border-white/20 shadow-lg">
                                <Bookmark size={28} className="text-white fill-white" />
                            </div>
                            <div className="flex flex-col gap-1.5 flex-1">
                                <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                                    RGHS Exclusive Benefits & Rewards
                                </h3>
                                <div className="flex items-center flex-wrap gap-2 text-white/90 text-[13px] font-medium leading-normal">
                                    Get an <span className="bg-[#B48E4D] text-white text-[9px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">EXTRA 10% OFF</span> on your first retail medicine order.
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-row flex-wrap sm:flex-nowrap items-center justify-between xl:justify-end gap-4 md:gap-6 w-full xl:w-auto mt-2 xl:mt-0">
                            <div className="flex flex-col md:items-end gap-1.5">
                                <span className="text-[9px] font-bold text-white/70 uppercase tracking-[0.2em] ml-1 md:ml-0">PROMO CODE</span>
                                <div className="bg-blue-900/40 border border-white/20 px-5 py-2 md:py-2 rounded-xl font-black text-base md:text-lg tracking-[0.1em] backdrop-blur-sm shadow-inner min-w-[150px] md:min-w-[180px] text-center">
                                    FIRSTRETAIL10
                                </div>
                            </div>
                            <button className="bg-white text-[#3D7FFF] hover:bg-[#CFB27F] hover:text-white px-6 py-2.5 md:py-3 rounded-full font-black text-[11px] tracking-widest flex items-center justify-center gap-2 shadow-xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap flex-1 sm:flex-none">
                                KNOW MORE
                                <ChevronRight size={16} strokeWidth={3} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Hero;
