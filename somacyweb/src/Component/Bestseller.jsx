import React from "react";
import { ChevronRight, Check, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { BESTSELLERS } from "../data/bestsellers";

const Bestseller = () => {
  const navigate = useNavigate();

  const handleMedicineClick = (name) => {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    navigate(`/drugs/${slug}`);
  };

  return (
    <section className="py-6 bg-[#F8FAFC]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Bestsellers in Rajasthan</h2>
          <button
            onClick={() => navigate("/lab-test/bestsellers", { state: { from: 'bestsellers' } })}
            className="flex items-center text-[#3D7FFF] font-bold px-3 py-1.5 rounded-xl hover:bg-[#EEF4FF] transition-colors group shrink-0"
          >
            View All Sellers
            <ChevronRight size={18} className="translate-y-[1px]" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
          {BESTSELLERS.map((product) => (
            <div
              key={product.id}
              onClick={() => handleMedicineClick(product.name)}
              className="bg-white rounded-[12px] sm:rounded-[16px] p-2 lg:p-3 shadow-sm border border-slate-100/50 flex flex-col hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className={`${product.imageBg} rounded-[8px] sm:rounded-[12px] h-20 sm:h-24 lg:h-28 relative mb-1.5 sm:mb-3 flex items-center justify-center overflow-hidden shrink-0`}>
                {product.isRghsVerified && (
                  <div className="absolute top-1 left-1 lg:top-2 lg:left-2 bg-[#B69156] text-white px-1 sm:px-1.5 py-0.5 rounded-[4px] sm:rounded-full flex items-center gap-0.5 sm:gap-1 shadow-sm z-10">
                    <div className="w-1.5 h-1.5 sm:w-2 lg:w-2.5 sm:h-2 lg:h-2.5 rounded-full border border-white/50 flex items-center justify-center">
                      <Check size={9} strokeWidth={4} className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] lg:w-[7px] lg:h-[7px]" />
                    </div>
                    <span className="text-[5px] sm:text-[6px] lg:text-[7px] font-bold uppercase tracking-wider hidden sm:inline">RGHS Verified</span>
                    <span className="text-[5px] font-bold uppercase tracking-wider sm:hidden">RGHS</span>
                  </div>
                )}
                <Image className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-slate-200 opacity-50" strokeWidth={1} />
              </div>

              <div className="flex-grow flex flex-col">
                <span className="text-[7px] sm:text-[8px] lg:text-[9px] font-bold text-slate-400 uppercase block mb-0.5 lg:mb-1 leading-tight truncate">
                  {product.manufacturer}
                </span>
                <h3 className="text-[10px] sm:text-[11px] lg:text-[12px] font-bold text-slate-900 leading-[1.2] mb-0.5 line-clamp-2 min-h-[2.4em]">
                  {product.name}
                </h3>
                {product.generic && (
                  <p className="text-[8px] sm:text-[9px] lg:text-[10px] font-medium text-slate-500 mb-1 lg:mb-1.5 truncate">
                    {product.generic}
                  </p>
                )}
              </div>

              <div className="flex flex-col xl:flex-row items-center justify-between mt-auto pt-1 lg:pt-2 gap-1.5 xl:gap-0 border-t border-slate-50/50">
                <div className="flex items-baseline gap-1 shrink-0 w-full xl:w-auto justify-between xl:justify-start">
                  <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-extrabold text-slate-900">₹{product.price}</span>
                  {product.discount && <span className="text-[7px] lg:text-[8px] font-bold text-emerald-500 uppercase">{product.discount}</span>}
                </div>
                <button className="bg-[#FF7A64] hover:bg-[#ff654d] text-white w-full xl:w-auto px-2 lg:px-4 py-1 lg:py-1 rounded-md lg:rounded-lg text-[9px] lg:text-[10px] font-bold shadow-sm transition-all active:scale-95 text-center">
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
