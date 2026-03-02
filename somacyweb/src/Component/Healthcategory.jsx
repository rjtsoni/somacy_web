import React from "react";
import {
    Droplet,
    HeartPulse,
    Citrus,
    Leaf,
    Sparkles,
    Venus
} from "lucide-react";

const categories = [
    {
        id: "diabetes",
        title: "Diabetes Care",
        icon: Droplet,
        colors: "bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white",
        hoverText: "group-hover:text-blue-600",
    },
    {
        id: "cardiac",
        title: "Cardiac Health",
        icon: HeartPulse,
        colors: "bg-rose-100 text-rose-700 group-hover:bg-rose-600 group-hover:text-white",
        hoverText: "group-hover:text-rose-600",
    },
    {
        id: "vitamins",
        title: "Vitamins & Nutrition",
        icon: Citrus,
        colors: "bg-orange-100 text-orange-700 group-hover:bg-orange-600 group-hover:text-white",
        hoverText: "group-hover:text-orange-600",
    },
    {
        id: "ayurvedic",
        title: "Ayurvedic Essentials",
        icon: Leaf,
        colors: "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white",
        hoverText: "group-hover:text-emerald-600",
    },
    {
        id: "personal",
        title: "Personal Care",
        icon: Sparkles,
        colors: "bg-purple-100 text-purple-700 group-hover:bg-purple-600 group-hover:text-white",
        hoverText: "group-hover:text-purple-600",
    },
    {
        id: "women",
        title: "Women's Health",
        icon: Venus,
        colors: "bg-pink-100 text-pink-700 group-hover:bg-pink-600 group-hover:text-white",
        hoverText: "group-hover:text-pink-600",
    },
];

const Healthcategory = () => {
    return (
        <section className="pt-4 pb-10 bg-[#F8FAFC]">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="mb-4 sm:mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Shop by Health Category
                    </h2>
                    <p className="text-slate-500 mt-2 font-medium">
                        Curated solutions for your specific health needs
                    </p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-10">
                    {categories.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            <div className={`w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-[16px] sm:rounded-[28px] flex items-center justify-center mb-2 sm:mb-3 transition-all duration-500 ease-out group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] ${item.colors}`}>
                                <item.icon strokeWidth={1.5} className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <span className={`text-[11px] sm:text-base font-bold text-slate-700 text-center leading-tight sm:leading-snug transition-colors duration-300 px-1 sm:px-2 ${item.hoverText}`}>
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Healthcategory;
