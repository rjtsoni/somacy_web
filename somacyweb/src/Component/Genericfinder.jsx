import React from "react";
import { BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Genericfinder = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/medicine-search");
  };
  return (
    <section className="py-2 md:py-4 bg-slate-50 flex justify-center items-center font-sans">
      <div className="max-w-7.5xl w-full bg-white rounded-[40px] shadow-xl shadow-slate-200/50 flex flex-col lg:flex-row gap-6 p-6 md:p-8 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-300/50">
        <div className="flex-[1.4] flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Generic Medicine Finder
          </h1>
          <p className="text-base text-slate-600 leading-relaxed mb-6 max-w-xl font-medium">
            Search your prescribed medicine and find high-quality generic
            equivalents that are{" "}
            <span className="text-blue-600 font-bold">
              equally effective but much more affordable.
            </span>
          </p>

          <div className="relative flex items-center mb-6 max-w-lg group">
            <input
              type="text"
              className="w-full py-3.5 px-6 pr-32 rounded-full border-2 border-slate-100 bg-slate-50 text-slate-800 text-sm outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 placeholder:text-slate-400 group-hover:border-slate-200"
              placeholder="Type medicine name (e.g. Augmentin)"
            />
            <button
              onClick={() => handleClick()}
              className="absolute right-2 px-6 py-2 bg-blue-600 text-white rounded-full font-bold text-xs tracking-wide hover:bg-blue-700 shadow-lg shadow-blue-200"
            >
              Compare
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
            <div className="flex-1 p-4 md:p-5 rounded-2xl bg-slate-100 border border-transparent transition-all duration-300 hover:bg-slate-200/80">
              <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                Branded Avg.
              </span>
              <div className="text-2xl font-black text-slate-800 tracking-tighter">
                ₹450.00
              </div>
            </div>

            <div className="flex-1 p-4 md:p-5 rounded-2xl bg-emerald-50 border border-transparent transition-all duration-300 hover:bg-emerald-100">
              <span className="block text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-1">
                Somacy Generic
              </span>
              <div className="text-2xl font-black text-emerald-900 tracking-tighter">
                ₹85.00
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="h-full bg-[#FFFBF1] p-6 rounded-[30px] text-center flex flex-col items-center justify-center border border-amber-100 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>

            <div className="mb-4 p-3 bg-white rounded-full shadow-md text-amber-600">
              <BadgeCheck size={40} strokeWidth={1.5} />
            </div>

            <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">
              Quality & Savings Guaranteed
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-[260px] font-medium">
              Our generic medicines are sourced only from WHO-GMP certified
              facilities.
            </p>

            <a
              href="#"
              className="px-6 py-2.5 bg-white text-amber-700 border border-amber-200/50 rounded-full font-bold text-xs transition-all duration-300 hover:bg-amber-600 hover:text-white"
            >
              Learn More About Generics
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Genericfinder;
