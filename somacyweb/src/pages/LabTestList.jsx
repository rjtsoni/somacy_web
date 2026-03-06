import React, { useState, useMemo } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
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
import Bestseller from "../Component/Bestseller";
import Pagination from "../Component/Pagination";
import { CATEGORY_TESTS } from "../data/labTests";
import { BESTSELLERS } from "../data/bestsellers";

const toSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const TestCard = ({ test, onDetail, onAdd }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col hover:shadow-md transition relative h-full">
        {test.popular && (
            <span className="absolute top-6 right-4 -translate-y-1/2 text-[10px] font-bold bg-[#ff7a00] text-white px-2 py-0.5 rounded shadow-sm uppercase tracking-wide z-10">Popular</span>
        )}

        <div className="mb-3">
            <h2 className="font-bold text-gray-900 text-base leading-tight mb-2 pr-6 line-clamp-2 min-h-[40px] tracking-tight">{test.name}</h2>
            <div className="flex items-center justify-between">
                <span className="bg-gray-100 text-gray-600 text-[11px] font-bold px-2 py-1 rounded-md lowercase tracking-tight">
                    {test.parameters} Parameter{test.parameters > 1 ? "s" : ""}
                </span>
                <button onClick={onDetail} className="text-[13px] text-blue-700 hover:text-blue-800 font-bold flex items-center gap-1 transition">
                    View Details <span>→</span>
                </button>
            </div>
        </div>

        <div className="flex items-center gap-2 mb-4 mt-auto bg-[#f8f9fa] p-2 rounded-lg border border-gray-100">
            <div className="w-8 h-8 bg-white shadow-sm rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                <ShieldCheck size={16} />
            </div>
            <div className="ml-1 min-w-0 flex-1">
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Lab Partner</p>
                <p className="text-sm font-bold text-gray-900 truncate">{test.partner}</p>
            </div>
            <div className="flex items-center gap-1 bg-green-100 text-green-700 text-[11px] px-1.5 py-0.5 rounded font-bold flex-shrink-0">
                {test.rating} <Star size={10} fill="currentColor" />
            </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 mb-3">
            <Clock size={14} className="text-gray-400 flex-shrink-0" />
            <span className="truncate">Report within <span className="text-gray-900 font-bold">{test.reportTime}</span></span>
        </div>

        {test.rghsCashless && (
            <div className="flex items-center gap-2 bg-[#e8f5e9] border border-[#c8e6c9] rounded-lg px-2.5 py-1.5 mb-3">
                <div className="bg-[#2e7d32] text-white p-0.5 rounded-sm flex-shrink-0"><ShieldCheck size={12} /></div>
                <span className="text-[11px] font-bold text-[#2e7d32] uppercase">RGHS Cashless</span>
                <span className="ml-auto text-sm font-bold text-[#2e7d32]">₹0</span>
            </div>
        )}

        <div className="mt-auto">
            <div className="flex items-center justify-between mb-3">
                <div>
                    <span className="text-[11px] text-gray-400 font-bold block leading-none mb-0.5 uppercase tracking-wide">Retail Price</span>
                    <span className="text-sm text-gray-500 font-medium line-through">₹{test.retailPrice}</span>
                </div>
                {!test.rghsCashless && (
                    <span className="text-[11px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100 uppercase tracking-wide">
                        {test.discount}% OFF
                    </span>
                )}
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2.5 rounded-lg transition active:scale-[0.98] shadow-sm uppercase tracking-wide">Add to Cart</button>
        </div>
    </div>
);

export default function LabTestList() {
    const { category } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const normalizedCategory = category ? category.toLowerCase() : "";
    const isListCategory = ['lab', 'health', 'bestsellers'].includes(normalizedCategory);


    const allLabTests = Object.values(CATEGORY_TESTS).flat();
    let tests = [];
    if (normalizedCategory === 'lab') {
        tests = allLabTests;
    } else if (normalizedCategory === 'health') {
        tests = allLabTests;
    } else if (normalizedCategory === 'bestsellers') {
        tests = BESTSELLERS.map((b) => {
            return {
                id: "bestseller-" + b.id,
                name: b.name,
                parameters: 1,
                partner: b.manufacturer,
                rating: 4.8,
                reportTime: "2-3 Days",
                rghsCashless: b.isRghsVerified,
                retailPrice: parseFloat(b.price.toString().replace(/,/g, '')),
                discount: b.discount ? parseInt(b.discount) : 0,
                popular: true
            };
        });
    } else {
        tests = CATEGORY_TESTS[normalizedCategory] || [];
    }

    // 3. DECIDE WHICH CATEGORY COMPONENT TO SHOW ON TOP
    let showLab = false;
    let showHealth = false;
    let showBestsellers = false;

    if (normalizedCategory === 'lab') {
        showLab = true;
    } else if (normalizedCategory === 'health') {
        showHealth = true;
    } else if (normalizedCategory === 'bestsellers') {
        showBestsellers = true;
    } else if (!isListCategory) {
        const fromState = location.state ? location.state.from : "";
        if (fromState === 'health') {
            showHealth = true;
        } else if (fromState === 'lab') {
            showLab = true;
        } else if (fromState === 'bestsellers') {
            showBestsellers = true;
        } else if (['heart', 'diabetes', 'liver', 'kidney', 'thyroid', 'bones'].includes(normalizedCategory)) {
            showLab = true;
        } else if (['cardiac', 'vitamins', 'ayurvedic', 'personal', 'women'].includes(normalizedCategory)) {
            showHealth = true;
        } else {
            showLab = true;
        }
    }
    let config = {
        label: "Lab Tests",
        path: "/lab-test/lab",
        listLabel: "Tests",
        empty: "No tests found"
    };
    if (showHealth) {
        config = {
            label: "Health",
            path: "/lab-test/health",
            listLabel: "Packages",
            empty: "No packages found"
        };
    } else if (showBestsellers) {
        config = {
            label: "Bestsellers",
            path: "/lab-test/bestsellers",
            listLabel: "Products",
            empty: "No products found"
        };
    }

    // 5. SET DISPLAY NAME FOR THE TITLE
    let displayName = "Tests";
    if (!category) {
        displayName = "";
    } else if (normalizedCategory === 'lab' || normalizedCategory === 'health' || normalizedCategory === 'bestsellers') {
        displayName = "All";
    } else {
        // Capitalize first letter (e.g., 'heart' -> 'Heart')
        displayName = category.charAt(0).toUpperCase() + category.slice(1);
    }

    const filtered = tests.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));
    const currentItems = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="bg-[#f8f9fa] min-h-screen pb-12">
            <div className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-40">
                <div className="w-full flex items-center justify-center">
                    <div className="flex w-full max-w-3xl bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border-r border-gray-300 cursor-pointer hover:bg-gray-100 transition whitespace-nowrap">
                            <MapPin size={16} className="text-gray-500" />
                            <span className="text-sm font-bold text-gray-700">Jaipur</span>
                            <ChevronDown size={14} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                            placeholder="Search for tests, packages or products..."
                            className="flex-1 px-4 py-2 outline-none text-sm text-gray-700"
                        />
                        <div className="flex items-center px-4 text-gray-400"><Search size={18} /></div>
                    </div>
                </div>
            </div>

            <div className="w-full px-6 pt-8 text-center">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-8 tracking-wider uppercase justify-center">
                    <span className="cursor-pointer hover:text-blue-600 transition" onClick={() => navigate("/")}>Home</span>
                    <ChevronRight size={12} strokeWidth={3} />
                    {isListCategory ? (
                        <span className="text-gray-900">{displayName}</span>
                    ) : (
                        <>
                            <span className="cursor-pointer hover:text-blue-600 transition" onClick={() => navigate(config.path)}>{config.label}</span>
                            <ChevronRight size={12} strokeWidth={3} />
                            <span className="text-gray-900">{displayName}</span>
                        </>
                    )}
                </div>

                {showLab && <Lab />}
                {showHealth && <Healthcategory />}
                {showBestsellers && <Bestseller />}

                <div className="mt-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
                        {displayName} {config.listLabel}
                        <span className="text-blue-600/40 font-bold ml-3 italic">in Jaipur</span>
                    </h1>

                    {filtered.length === 0 ? (
                        <div className="bg-white rounded-3xl border border-dashed border-gray-200 py-24 shadow-sm">
                            <Search size={48} className="mx-auto text-gray-200 mb-4" />
                            <p className="text-xl font-bold text-gray-400">{config.empty}</p>
                        </div>
                    ) : (
                        <>
                            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 text-left">
                                {currentItems.map((test) => (
                                    <TestCard
                                        key={test.id}
                                        test={test}
                                        onDetail={() => navigate(`/lab-test/${category}/${toSlug(test.name)}`, { state: { test, category } })}
                                    />
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

