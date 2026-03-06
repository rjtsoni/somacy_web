import { ChevronRight } from "lucide-react";
import { HEALTH_CATEGORIES as CATEGORIES } from "../data/categories";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Healthcategory = () => {
  const navigate = useNavigate();
  const { category: activeCategory } = useParams();
  const location = useLocation();

  const pathRoute = location?.state?.from;
  return (
    <section className="pt-4 pb-10 bg-[#F8FAFC]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-4 sm:mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Shop by Health Category
            </h2>
            <p className="text-slate-500 mt-2 font-medium">
              Curated solutions for your specific health needs
            </p>
          </div>

          {!pathRoute && (
            <button
              onClick={() => navigate("/health", { state: { from: "health" } })}
              className="flex items-center text-[#3D7FFF] font-bold px-3 py-1.5 rounded-xl hover:bg-[#EEF4FF] transition-colors group shrink-0"
            >
              View All Categories
              <ChevronRight size={18} className="translate-y-[1px]" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-10">
          {CATEGORIES.map((item) => {
            const isSelected =
              activeCategory?.toLowerCase() === item.id?.toLowerCase();
            const parsedColors = item.colors.split(" ");
            const hoverBgClass =
              parsedColors
                .find((c) => c?.startsWith("group-hover:bg-"))
                ?.replace("group-hover:", "") || "";
            const hoverTextClass =
              parsedColors
                .find((c) => c?.startsWith("group-hover:text-"))
                ?.replace("group-hover:", "") || "";

            return (
              <div
                key={item.id}
                onClick={() =>
                  navigate(`/${item.id}`, {
                    state: { from: "health" },
                  })
                }
                className="flex flex-col items-center group cursor-pointer"
              >
                <div
                  className={`w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-[16px] sm:rounded-[28px] flex items-center justify-center mb-2 sm:mb-3 transition-all duration-500 ease-out group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] ${isSelected ? `${hoverBgClass} ${hoverTextClass} shadow-md scale-105` : item.colors}`}
                >
                  <item.icon
                    strokeWidth={1.5}
                    className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <span
                  className={`text-[11px] sm:text-base font-bold text-center leading-tight sm:leading-snug transition-colors duration-300 px-1 sm:px-2 ${isSelected ? hoverBgClass.replace("bg-", "text-") : "text-slate-700 " + item.hoverText}`}
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Healthcategory;
