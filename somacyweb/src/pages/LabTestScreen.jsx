import { Bone, Droplet, Heart, Search, Shield } from "lucide-react";
import React, { Activity } from "react";
import { useNavigate } from "react-router-dom";

const LabTestScreen = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="bg-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Find Your Test or Health Package
        </h1>

        <p className="MT-4 text-gray-500 max-w-xl mx-auto">
          Search from 1000+ tests with specialized RGHS benefits for goverment
          employees.
        </p>

        <div className="mt-8 max-w-2xl mx-auto flex bg-white shadow-md rounded-xl overflow-hidden border">
          <div className="flex items-center px-4 text-gray-400">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search for tests(e.g.,CBC, Vitamin D, Liver Profile"
            className="flex-1 py-3 px-2 outline-none"
          />
          <button className="bg-blue-600 text-white px-6 hover:bg-blue-700 transition">
            Search
          </button>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          Popular:
          <span className="ml-2 text-blue-600 cursor-pointer">
            Full Body Checkup
          </span>
          <span className="ml-2 text-blue-600 cursor-pointer">
            Diabetes Screen
          </span>
          <span className="ml-2 text-blue-600 cursor-pointer">
            Thyroid Profile
          </span>
        </div>
      </section>

      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Search by Health Concern
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Curated test bundles for specific needs
            </p>
          </div>
          <button className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:underline">
            View All <span className="text-lg">→</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
          {[
            {
              name: "Heart",
              icon: <Heart className="w-6 h-6" />,
              count: "15 Tests",
              bgColor: "bg-red-50",
              iconColor: "text-red-500",
            },
            {
              name: "Diabetes",
              icon: <Droplet className="w-6 h-6" />,
              count: "10 Tests",
              bgColor: "bg-blue-50",
              iconColor: "text-blue-500",
            },
            {
              name: "Liver",
              icon: <Activity className="w-6 h-6" />,
              count: "12 Tests",
              bgColor: "bg-orange-50",
              iconColor: "text-orange-500",
            },
            {
              name: "Kidney",
              icon: <Shield className="w-6 h-6" />,
              count: "8 Tests",
              bgColor: "bg-green-50",
              iconColor: "text-green-500",
            },
            {
              name: "Thyroid",
              icon: <Activity className="w-6 h-6" />,
              count: "5 Tests",
              bgColor: "bg-purple-50",
              iconColor: "text-purple-500",
            },
            {
              name: "Bones",
              icon: <Bone className="w-6 h-6" />,
              count: "7 Tests",
              bgColor: "bg-yellow-50",
              iconColor: "text-yellow-600",
            },
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/lab-test/${item.name.toLowerCase()}`)}
              className="bg-white rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.04)] p-6 flex flex-col items-center justify-center hover:shadow-md transition cursor-pointer"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full ${item.bgColor} ${item.iconColor}`}
              >
                {item.icon}
              </div>
              <h3 className="mt-4 font-bold text-gray-800">{item.name}</h3>
              <p className="text-xs text-gray-400 mt-1">{item.count}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50 border-t border-b">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            EMPANELED LAB PARTNERS
          </h3>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              "DR. LAL PATH",
              "METROPOLIS",
              "THYROCARE",
              "SRL DIAG",
              "QUEST",
            ].map((lab, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gray-200/60 rounded text-gray-400 font-bold text-sm"
              >
                {lab}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800">
          Top Booked Tests & Packages
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div
            onClick={() => navigate("/lab-test/smart-full-body-checkup")}
            className="bg-white rounded-xl shadow-sm border p-6 flex flex-col"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs bg-green-50 text-green-600 font-semibold px-2 py-1 rounded flex items-center gap-1 border border-green-100">
                ✓ RGHS BENEFIT
              </span>
              <span className="text-xs text-gray-400 font-medium">
                By Dr. Lal PathLabs
              </span>
            </div>

            <h3
              className="mt-4 font-semibold text-gray-800 text-lg"
              onClick={() => navigate("/lab-test/smart-full-body-checkup")}
            >
              Smart Full Body Checkup
            </h3>
            <p className="text-sm text-gray-500 mt-2 flex-grow">
              Includes 85 parameters: Liver, Kidney, Lipid, Thyroid, Iron &
              more.
            </p>

            <div className="mt-4 flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-600">₹1,299</span>
              <span className="text-sm text-gray-400 line-through">₹3,500</span>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                62% OFF
              </span>
            </div>

            <button className="mt-4 w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>

            {/* <button className='mt-3 w-full bg-green-500 text-white font-medium py-2 rounded-lg hover:bg-green-600 transition flex items-center justify-center gap-2'>
                            🛒 Add to RGHS Cart
                        </button> */}

            <button className="mt-3 w-full text-gray-400 text-sm hover:text-gray-600 transition font-medium">
              View Details
            </button>
          </div>

          <div
            onClick={() => navigate("/lab-test/HbA1c-Diabetes-Test")}
            className="bg-white rounded-xl shadow-sm border p-6 flex flex-col"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs bg-blue-50 text-blue-600 font-semibold px-2 py-1 rounded border border-blue-100">
                BESTSELLER
              </span>
              <span className="text-xs text-gray-400 font-medium">
                By Metropolis
              </span>
            </div>

            <h3 className="mt-4 font-semibold text-gray-800 text-lg">
              HbA1c (Diabetes) Test
            </h3>
            <p className="text-sm text-gray-500 mt-2 flex-grow">
              Measures average blood sugar levels over the past 3 months.
            </p>

            <div className="mt-4 flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-600">₹499</span>
              <span className="text-sm text-gray-400 line-through">₹800</span>
            </div>

            <button className="mt-4 w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>

            {/* <button disabled className='mt-3 w-full bg-white border border-gray-100 text-gray-300 font-medium py-2 rounded-lg cursor-not-allowed'>
                            Not RGHS Eligible
                        </button> */}

            <button className="mt-3 w-full text-gray-400 text-sm hover:text-gray-600 transition font-medium">
              View Details
            </button>
          </div>

          <div
            onClick={() => navigate("/lab-test/advanced-vitamin-D-and-B12")}
            className="bg-white rounded-xl shadow-sm border p-6 flex flex-col"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs bg-green-50 text-green-600 font-semibold px-2 py-1 rounded flex items-center gap-1 border border-green-100">
                ✓ RGHS BENEFIT
              </span>
              <span className="text-xs text-gray-400 font-medium">
                By Thyrocare
              </span>
            </div>

            <h3 className="mt-4 font-semibold text-gray-800 text-lg">
              Advanced Vitamin D & B12
            </h3>
            <p className="text-sm text-gray-500 mt-2 flex-grow">
              Comprehensive check for nerve health and bone density.
            </p>

            <div className="mt-4 flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-600">₹850</span>
              <span className="text-sm text-gray-400 line-through">₹1,500</span>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                45% OFF
              </span>
            </div>

            <button className="mt-4 w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>

            {/* <button className='mt-3 w-full bg-green-500 text-white font-medium py-2 rounded-lg hover:bg-green-600 transition flex items-center justify-center gap-2'>
                            🛒 Add to RGHS Cart
                        </button> */}

            <button className="mt-3 w-full text-gray-400 text-sm hover:text-gray-600 transition font-medium">
              View Details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LabTestScreen;
