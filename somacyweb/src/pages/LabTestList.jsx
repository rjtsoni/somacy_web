import React, { useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useRoutes,
} from "react-router-dom";
import {
  Search,
  ChevronRight,
  Star,
  Clock,
  ShieldCheck,
  MapPin,
  ChevronDown,
} from "lucide-react";

import Lab from "../Component/Lab";
import Healthcategory from "../Component/Healthcategory";
import Pagination from "../Component/Pagination";

import { CATEGORY_TESTS } from "../data/labTests";

const toSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const TestCard = ({ category, test, onDetail }) => {
  const navigate = useNavigate();
  const handleNavigate = (name) => {
    toSlug(name);
    if (category === "drugs") {
      navigate(`/drugs/${toSlug(name)}`);
    } else {
      navigate(`/${category}/${toSlug(name)}`);
    }
  };

  return (
    <div
      onClick={() => handleNavigate(test?.name)}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col hover:shadow-md transition relative h-full"
    >
      {test.popular && (
        <span className="absolute top-6 right-4 text-[10px] font-bold bg-[#ff7a00] text-white px-2 py-0.5 rounded uppercase">
          Popular
        </span>
      )}

      <div className="mb-3">
        <h2 className="font-bold text-gray-900 text-base mb-2 line-clamp-2">
          {test.name}
        </h2>

        <div className="flex items-center justify-between">
          <span className="bg-gray-100 text-gray-600 text-[11px] font-bold px-2 py-1 rounded-md">
            {test.parameters} Parameter{test.parameters > 1 ? "s" : ""}
          </span>

          <button
            onClick={onDetail}
            className="text-[13px] text-blue-700 font-bold flex items-center gap-1"
          >
            View Details →
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4 mt-auto bg-[#f8f9fa] p-2 rounded-lg border">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600">
          <ShieldCheck size={16} />
        </div>

        <div className="flex-1">
          <p className="text-[9px] text-gray-400 uppercase">Lab Partner</p>
          <p className="text-sm font-bold text-gray-900">{test.partner}</p>
        </div>

        <div className="flex items-center gap-1 bg-green-100 text-green-700 text-[11px] px-1.5 py-0.5 rounded font-bold">
          {test.rating}
          <Star size={10} fill="currentColor" />
        </div>
      </div>

      <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
        <Clock size={14} />
        <span>
          Report within <b>{test.reportTime}</b>
        </span>
      </div>

      {test.rghsCashless && (
        <div className="flex items-center gap-2 bg-[#e8f5e9] border rounded-lg px-2 py-1 mb-3">
          <ShieldCheck size={12} />
          <span className="text-[11px] font-bold text-[#2e7d32]">
            RGHS Cashless
          </span>
          <span className="ml-auto font-bold text-[#2e7d32]">₹0</span>
        </div>
      )}

      <div className="mt-auto">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-[11px] text-gray-400 block">
              Retail Price
            </span>
            <span className="text-sm line-through">₹{test.retailPrice}</span>
          </div>

          {!test.rghsCashless && (
            <span className="text-[11px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">
              {test.discount}% OFF
            </span>
          )}
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2.5 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default function LabTestList() {
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const pathRoute = location?.state?.from;
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const normalizedCategory = pathRoute?.toLowerCase();

  const allTests = Object.values(CATEGORY_TESTS).flat();

  const tests =
    normalizedCategory && CATEGORY_TESTS[normalizedCategory]
      ? CATEGORY_TESTS[normalizedCategory]
      : allTests;

  const configMap = {
    lab: { label: "Lab Tests", component: <Lab />, listLabel: "Tests" },
    health: {
      label: "Health",
      component: <Healthcategory />,
      listLabel: "Packages",
    },
  };

  const config = configMap[normalizedCategory] || [];
  const searchLower = search.toLowerCase();
  const filtered = tests.filter((t) =>
    t.name?.toLowerCase()?.includes(searchLower),
  );

  const start = (currentPage - 1) * itemsPerPage;
  const currentItems = filtered?.slice(start, start + itemsPerPage);

  const displayName = category
    ? category[0].toUpperCase() + category.slice(1)
    : "All";

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-12">
      {/* Search Bar */}
      <div className="bg-white border-b py-4 px-6 sticky top-0 z-40">
        <div className="flex justify-center">
          <div className="flex w-full max-w-3xl border rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 bg-gray-50 border-r">
              <MapPin size={16} />
              <span className="text-sm font-bold">Jaipur</span>
              <ChevronDown size={14} />
            </div>

            <input
              type="text"
              placeholder="Search for tests..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="flex-1 px-4 py-2 outline-none text-sm"
            />

            <div className="flex items-center px-4 text-gray-400">
              <Search size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-8 ">
        {/* Breadcrumb */}
        <div className="flex justify-center items-center gap-2 text-xs text-gray-400 mb-4 uppercase">
          <span onClick={() => navigate("/")} className="cursor-pointer">
            Home
          </span>
          <ChevronRight size={12} />
          <span className="text-gray-900">{displayName}</span>
        </div>

        {config.component}

        <div >
          <h1 className="text-3xl font-extrabold mb-4">
            {displayName} {config.listLabel}
          </h1>

          {filtered.length === 0 ? (
            <div className="bg-white rounded-3xl border border-dashed py-24">
              <Search size={48} className="mx-auto text-gray-200 mb-4" />
              <p className="text-xl font-bold text-gray-400">
                No results found
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 text-left">
                {currentItems.map((test) => (
                  <TestCard key={test.id} test={test} category={category} />
                ))}
              </div>

              {filtered.length > itemsPerPage && (
                <div className="mt-12 flex justify-center">
                  <Pagination
                    totalItems={filtered.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
