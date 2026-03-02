import React from 'react';
import { ChevronLeft, ChevronRight, Check, Image } from 'lucide-react';

const Bestseller = () => {
    const bestsellers = [
        {
            id: 1,
            manufacturer: "CIPLA LTD",
            name: "Dolo 650 MG Tablet 15'S",
            generic: "(Paracetamol)",
            price: "28.50",
            isRghsVerified: true,
            imageBg: "bg-slate-50"
        },
        {
            id: 2,
            manufacturer: "GSK PHARMA",
            name: "Amoxycillin & Clavulanic Acid 625mg",
            generic: "",
            price: "145.00",
            isRghsVerified: true,
            imageBg: "bg-slate-50"
        },
        {
            id: 3,
            manufacturer: "OMRON",
            name: "Automatic BP Monitor M2 Eco",
            generic: "",
            price: "1,999",
            discount: "20% OFF",
            isRghsVerified: false,
            imageBg: "bg-slate-50"
        },
        {
            id: 4,
            manufacturer: "ABBOTT",
            name: "Ensure Diabetes Care (Vanilla) 400g",
            generic: "",
            price: "720.00",
            isRghsVerified: true,
            imageBg: "bg-slate-50"
        },
        {
            id: 5,
            manufacturer: "BAIDYANATH",
            name: "Pure Himalayan Honey 500g",
            generic: "",
            price: "320.00",
            isRghsVerified: false,
            imageBg: "bg-slate-50"
        }
    ];

    return (
        <section className="py-6 bg-[#F8FAFC]">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Bestsellers in Rajasthan
                    </h2>
                    <div className="flex gap-3">
                        <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white hover:text-blue-600 hover:border-blue-100 transition-all shadow-sm">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white hover:text-blue-600 hover:border-blue-100 transition-all shadow-sm">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
                    {bestsellers.map((product) => (
                        <div key={product.id} className="bg-white rounded-[12px] sm:rounded-[16px] p-2 lg:p-3 shadow-sm border border-slate-100/50 flex flex-col hover:shadow-md transition-shadow">
                            <div className={`${product.imageBg} rounded-[8px] sm:rounded-[12px] h-20 sm:h-24 lg:h-28 relative mb-1.5 sm:mb-3 flex items-center justify-center overflow-hidden shrink-0`}>
                                {product.isRghsVerified && (
                                    <div className="absolute top-1 left-1 lg:top-2 lg:left-2 bg-[#B69156] text-white px-1 sm:px-1.5 py-0.5 rounded-[4px] sm:rounded-full flex items-center gap-0.5 sm:gap-1 shadow-sm">
                                        <div className="w-1.5 h-1.5 sm:w-2 lg:w-2.5 sm:h-2 lg:h-2.5 rounded-full border border-white/50 flex items-center justify-center">
                                            <Check size={9} strokeWidth={4} className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] lg:w-[7px] lg:h-[7px]" />
                                        </div>
                                        <span className="text-[5px] sm:text-[6px] lg:text-[7px] font-bold uppercase tracking-wider hidden sm:inline">RGHS Verified</span>
                                        <span className="text-[5px] font-bold uppercase tracking-wider sm:hidden">RGHS</span>
                                    </div>
                                )}

                                <div className="text-slate-200 opacity-50">
                                    <Image className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" strokeWidth={1} />
                                </div>
                            </div>

                            <div className="flex-grow flex flex-col justify-center">
                                <span className="text-[7px] sm:text-[8px] lg:text-[9px] font-bold text-slate-400 uppercase block mb-0.5 lg:mb-1 leading-tight truncate">
                                    {product.manufacturer}
                                </span>
                                <h3 className="text-[10px] sm:text-[11px] lg:text-[12px] font-bold text-slate-900 leading-[1.2] mb-0.5 line-clamp-2">
                                    {product.name}
                                </h3>
                                {product.generic && (
                                    <p className="text-[8px] sm:text-[9px] lg:text-[10px] font-medium text-slate-500 mb-1 lg:mb-1.5 truncate line-clamp-1">
                                        {product.generic}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col xl:flex-row items-center justify-between mt-auto pt-1 lg:pt-2 gap-1.5 xl:gap-0 border-t border-slate-50/50">
                                <div className="flex items-baseline gap-1 shrink-0 w-full xl:w-auto justify-between xl:justify-start">
                                    <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-extrabold text-slate-900">
                                        ₹{product.price}
                                    </span>
                                    {product.discount && (
                                        <span className="text-[7px] lg:text-[8px] font-bold text-emerald-500 uppercase">
                                            {product.discount}
                                        </span>
                                    )}
                                </div>
                                <button className="bg-[#FF7A64] hover:bg-[#ff654d] text-white w-full xl:w-auto px-2 lg:px-4 py-1 lg:py-1 rounded-md lg:rounded-lg text-[9px] lg:text-[10px] font-bold shadow-sm shadow-coral-100/50 transition-all active:scale-95 text-center">
                                    ADD
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Bestseller;
