import { Search } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Lab from "../Component/Lab";
import { TOP_TESTS } from "../data/labTests";

const LabTestScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Find Your Test or Health Package
        </h1>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Search from 1000+ tests with specialized RGHS benefits for government
          employees.
        </p>

        <div className="mt-8 max-w-2xl mx-auto flex bg-white shadow-md rounded-xl overflow-hidden border">
          <div className="flex items-center px-4 text-gray-400">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search for tests (e.g., CBC, Vitamin D, Liver Profile)"
            className="flex-1 py-3 px-2 outline-none"
          />
          <button className="bg-blue-600 text-white px-6 hover:bg-blue-700 transition font-medium">
            Search
          </button>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          Popular:
          {["Full Body Checkup", "Diabetes Screen", "Thyroid Profile"].map(
            (item) => (
              <span
                key={item}
                className="ml-2 text-blue-600 cursor-pointer hover:underline"
              >
                {item}
              </span>
            ),
          )}
        </div>
      </section>

      <section className="py-12 px-6 w-full border-t">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Search by Health Concern
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Curated test bundles for specific needs
            </p>
          </div>
          <button
            onClick={() => navigate("/lab-test/lab")}
            className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:underline"
          >
            View All →
          </button>
        </div>
        <Lab />
      </section>

      <section className="py-12 px-6 bg-gray-50 border-t border-b">
        <div className="w-full text-center">
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
            ].map((lab) => (
              <div
                key={lab}
                className="px-6 py-3 bg-gray-200/60 rounded text-gray-400 font-bold text-sm tracking-wide"
              >
                {lab}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Top Booked Tests & Packages
        </h2>
        <button
          onClick={() => navigate("/lab")}
          className="mt-6 w-full bg-blue-600 text-white font-bold py-2.5 rounded-lg hover:bg-blue-700 transition active:scale-[0.98]"
        >
          view all
        </button>

        <div className="grid md:grid-cols-3 gap-6">
          {TOP_TESTS.map((test) => (
            <div
              key={test.id}
              onClick={() => navigate(`/lab-test/${test.id}`)}
              className="bg-white rounded-xl shadow-sm border p-6 flex flex-col hover:shadow-md transition cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <span
                  className={`text-[10px] font-bold px-2 py-1 rounded border uppercase tracking-wide ${test.benefitType === "green" ? "bg-green-50 text-green-600 border-green-100" : "bg-blue-50 text-blue-600 border-blue-100"}`}
                >
                  {test.benefitType === "green"
                    ? `✓ ${test.benefit}`
                    : test.benefit}
                </span>
                <span className="text-xs text-gray-400 font-medium italic">
                  By {test.lab}
                </span>
              </div>

              <h3 className="mt-4 font-bold text-gray-900 text-lg leading-tight">
                {test.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2 flex-grow leading-relaxed">
                {test.parameters}
              </p>

              <div className="mt-5 flex items-center gap-2">
                <span className="text-2xl font-bold text-blue-600">
                  ₹{test.price}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ₹{test.originalPrice}
                </span>
                {test.discount && (
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded ml-auto">
                    {test.discount}
                  </span>
                )}
              </div>

              <button className="mt-6 w-full bg-blue-600 text-white font-bold py-2.5 rounded-lg hover:bg-blue-700 transition active:scale-[0.98]">
                Add to Cart
              </button>
              <button className="mt-3 w-full text-gray-400 text-sm hover:text-gray-600 transition font-bold uppercase tracking-wide">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LabTestScreen;
