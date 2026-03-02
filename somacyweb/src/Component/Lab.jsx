import React from "react";
import { Heart, BriefcaseMedical, GlassWater, Bone, Accessibility, Thermometer } from 'lucide-react';

const Lab = () => {
    const categories = [
        {
            id: 1,
            name: "Heart",
            icon: Heart,
        },
        {
            id: 2,
            name: "Liver",
            icon: BriefcaseMedical,
        },
        {
            id: 3,
            name: "Kidney",
            icon: GlassWater,
        },
        {
            id: 4,
            name: "Bone",
            icon: Bone,
        },
        {
            id: 5,
            name: "Full Body",
            icon: Accessibility,
        },
        {
            id: 6,
            name: "Fever Profile",
            icon: Thermometer,
        },
    ];

    return (
        <section className="py-6 bg-[#F8FAFC]">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="mb-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Lab Tests by Organ/Condition
                    </h2>
                    <p className="text-slate-500 mt-2 font-medium">
                        Book tests specifically for your symptoms or health checks
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                    {categories.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:border-blue-500 transition-all duration-300 mb-3 text-slate-400 group-hover:text-blue-500">
                                <item.icon
                                    size={28}
                                    strokeWidth={1.5}
                                    className="transition-colors w-6 h-6 sm:w-8 sm:h-8"
                                />
                            </div>
                            <h3 className="text-[15px] font-bold text-slate-700 tracking-tight text-center group-hover:text-blue-600 transition-colors">
                                {item.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Lab;
