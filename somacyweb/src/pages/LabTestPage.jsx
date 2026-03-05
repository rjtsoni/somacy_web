import { useNavigate, useParams } from "react-router-dom";
import {
  Search,
  ShieldCheck,
  Truck,
  Clock,
  Home,
  Droplet,
  Clock11,
  WineOff,
} from "lucide-react";
import { Activity } from "react";
import HelpDest from "../Component/HelpDesk";
import HelpDesk from "../Component/HelpDesk";

export default function LabTestPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          Home › Lab Tests ›
          <span className="text-blue-600 capitalize ml-1">
            {category} Checkup
          </span>
        </div>

        {/* Top Section */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-sm flex gap-6">
              <img
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b"
                className="w-40 h-32 rounded-lg object-cover"
              />

              <div className="flex-1">
                <div className="flex gap-2 mb-2">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    RGHS VERIFIED
                  </span>

                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    MOST POPULAR
                  </span>
                </div>

                <h2 className="text-xl font-semibold capitalize">
                  {category} Checkup
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                  A complete health screening covering essential organs.
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-blue-600">₹0</span>

                  <button
                    onClick={() => navigate(`/lab-test/${category}/slot`)}
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Test Prerequisites */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-sm mt-6">
              <h3 className="font-semibold mb-4 text-gray-800">
                Test Prerequisites
              </h3>

              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Clock11 className="text-blue-600 w-5 h-5" />
                  <span>10-12 hours fasting required</span>
                </div>

                <div className="flex items-center gap-2">
                  <Droplet className="text-blue-600 w-5 h-5" />
                  <span>Water intake allowed</span>
                </div>

                <div className="flex items-center gap-2">
                  <WineOff className="text-blue-600 w-5 h-5" />
                  <span>Avoid alcohol 24 hours prior</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">
                  Included Parameters (60+)
                </h3>

                <div className="flex items-center border rounded-lg px-3 py-2 text-sm text-gray-400">
                  <Search size={16} className="mr-2" />
                  Search parameters
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm mb-4">
                <div className="flex justify-between mb-3">
                  <h4 className="font-semibold">Kidney Function Test (KFT)</h4>

                  <span className="text-sm text-blue-600">5 Parameters</span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <p className="font-medium">Urea, Serum</p>
                    <p className="text-gray-400">
                      Measures waste produced from protein breakdown
                    </p>
                  </div>

                  <div>
                    <p className="font-medium">Creatinine, Serum</p>
                    <p className="text-gray-400">
                      Checks how well kidneys filter waste
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold mb-4">LAB PARTNER</h4>

              <p className="font-medium">Metro Diagnostic Center</p>

              <p className="text-green-600 text-sm">NABL Accredited Lab</p>

              <div className="mt-4 space-y-2 text-sm text-gray-500">
                <div className="flex gap-2">
                  <Truck size={16} /> Free Home Collection
                </div>

                <div className="flex gap-2">
                  <Clock size={16} /> Reports in 24 Hours
                </div>
              </div>
            </div>

            {/* RGHS Cashless */}
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex gap-2 items-center text-blue-600 font-semibold">
                <ShieldCheck size={18} />
                RGHS Cashless
              </div>

              <p className="text-sm text-gray-500 mt-2">
                Covered under Rajasthan Government Health Scheme.
              </p>
            </div>

            {/* Help Card */}
            <HelpDesk />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Why Choose Somacy Labs?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.05)] text-center">
            <div className="w-12 h-12 mx-auto flex items-center justify-center bg-blue-50 rounded-full text-blue-600">
              <ShieldCheck size={22} />
            </div>

            <h3 className="mt-4 font-semibold text-gray-800">
              NABL Accredited
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Highest accuracy standards for every report.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.05)] text-center">
            <div className="w-12 h-12 mx-auto flex items-center justify-center bg-blue-50 rounded-full text-blue-600">
              <Home size={22} />
            </div>

            <h3 className="mt-4 font-semibold text-gray-800">
              Home Collection
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Certified phlebotomists at your doorstep.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.05)] text-center">
            <div className="w-12 h-12 mx-auto flex items-center justify-center bg-blue-50 rounded-full text-blue-600">
              <Activity size={22} />
            </div>

            <h3 className="mt-4 font-semibold text-gray-800">Fast Reports</h3>

            <p className="text-sm text-gray-500 mt-1">
              Digital reports available within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
