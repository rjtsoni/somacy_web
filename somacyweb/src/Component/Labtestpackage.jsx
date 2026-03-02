import React from 'react';
import { ShoppingCart, ChevronRight } from 'lucide-react';

const Labtestpackage = () => {
    const packages = [
        {
            id: 1,
            title: "Premium Full Body Checkup",
            parameters: "60+ PARAMETERS",
            tags: ["RGHS COVERED"],
            description: "Liver, Kidney, Thyroid, CBC & 56 vital markers for deep health insight.",
            oldPrice: "2,999",
            newPrice: "999",
            badgeType: "parameters"
        },
        {
            id: 2,
            title: "Advanced Vitamin Profile",
            parameters: "VITAMIN DEFICIENCY",
            description: "Includes Vitamin D, Vitamin B12, Iron Studies & Folate levels check.",
            oldPrice: "1,500",
            newPrice: "749",
            badgeType: "vitamin"
        },
        {
            id: 3,
            title: "HbA1c Monitoring Profile",
            parameters: "DIABETES CARE",
            tags: ["RGHS COVERED"],
            description: "Essential for long-term monitoring of blood sugar levels with fasting glucose.",
            oldPrice: "800",
            newPrice: "499",
            badgeType: "diabetes"
        },
        {
            id: 4,
            title: "Complete Thyroid Profile",
            parameters: "THYROID HEALTH",
            description: "Detailed screening for T3, T4, and TSH for hormonal balance assessment.",
            oldPrice: "600",
            newPrice: "299",
            badgeType: "thyroid"
        }
    ];

    const getBadgeStyles = (type) => {
        switch (type) {
            case 'parameters':
                return 'bg-[#F0FAF5] text-[#2D8A5B]';
            case 'vitamin':
                return 'bg-[#F0F5FF] text-[#3D7FFF]';
            case 'diabetes':
                return 'bg-[#FFF0F9] text-[#CB2280]';
            case 'thyroid':
                return 'bg-[#FFF7EF] text-[#D8832B]';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        <div className="bg-[#F8FAFC] py-6 font-sans overflow-hidden">
            <div className="w-full px-4 sm:px-6 lg:px-8">
               
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Popular Lab Test Packages</h2>
                        <p className="text-slate-500 mt-2 font-medium">
                            Free home sample collection <span className="mx-1 text-[#3D7FFF]">•</span> 100% Secure & Accurate Reports
                        </p>
                    </div>
                    <a href="#" className="flex items-center text-[#3D7FFF] font-bold px-3 py-1.5 rounded-xl hover:bg-[#EEF4FF] transition-colors group shrink-0">
                        View All Tests
                        <ChevronRight size={18} className="translate-y-[1px]" />
                    </a>
                </div>

               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className="bg-white border border-gray-100 rounded-[1.25rem] p-4 transition-all duration-300 flex flex-col h-full group">
                            <div className="mb-6">
                               
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${getBadgeStyles(pkg.badgeType)}`}>
                                        {pkg.parameters}
                                    </span>
                                    {pkg.tags && pkg.tags.map((tag, idx) => (
                                        <span key={idx} className="bg-[#D9C496]/20 text-[#8C6D1F] text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center border border-[#D9C496]/30">
                                            <span className="w-2.5 h-2.5 mr-1.5 rounded-full bg-[#8C6D1F] text-white flex items-center justify-center text-[6px] font-black">✓</span>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                               
                                <h3 className="text-lg font-bold text-[#1E293B] mb-1.5 leading-tight group-hover:text-[#3D7FFF] transition-colors duration-300">
                                    {pkg.title}
                                </h3>

                               
                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                    {pkg.description}
                                </p>
                            </div>

                            <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-50">
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-[12px] font-medium line-through">₹{pkg.oldPrice}</span>
                                    <span className="text-xl font-black text-[#1E293B] tracking-tight -mt-1">₹{pkg.newPrice}</span>
                                </div>

                                <button className="bg-[#EEF4FF] p-2.5 rounded-xl text-[#3D7FFF] group-hover:bg-[#3D7FFF] group-hover:text-white transition-all transform active:scale-95 shadow-sm">
                                    <ShoppingCart size={18} strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Labtestpackage;
