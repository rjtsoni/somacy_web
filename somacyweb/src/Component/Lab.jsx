import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { LAB_CATEGORIES as CATEGORIES } from "../data/categories";

const Lab = () => {
  const navigate = useNavigate();
  const { category: activeCategory } = useParams();
  const location = useLocation();

  const pathRoute = location?.state?.from;

  return (
    <section className="py-6 bg-[#F8FAFC]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-4 sm:mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Lab Tests by Organ/Condition
            </h2>
            <p className="text-slate-500 mt-2 font-medium">
              Book tests specifically for your symptoms or health checks
            </p>
          </div>
          {!pathRoute && (
            <button
              onClick={() => navigate("/lab", { state: { from: "lab" } })}
              className="flex items-center text-[#3D7FFF] font-bold px-3 py-1.5 rounded-xl hover:bg-[#EEF4FF] transition-colors group shrink-0"
            >
              View All Tests
              <ChevronRight size={18} className="translate-y-[1px]" />
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {CATEGORIES.map((item) => {
            const isSelected =
              activeCategory?.toLowerCase() === item.name?.toLowerCase();
            return (
              <div
                key={item.id}
                onClick={() =>
                  navigate(`/${item.name?.toLowerCase()}`, {
                    state: { from: "lab" },
                  })
                }
                className={`bg-white rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.04)] p-6 flex flex-col items-center justify-center transition cursor-pointer border ${isSelected ? "border-blue-500 ring-2 ring-blue-100 shadow-md scale-[1.02]" : "border-transparent hover:shadow-md " + item.borderHover}`}
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full ${item.bgColor} ${item.iconColor}`}
                >
                  <item.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3
                  className={`mt-4 font-bold ${isSelected ? "text-blue-600" : "text-gray-800"}`}
                >
                  {item.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{item.count}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Lab;
