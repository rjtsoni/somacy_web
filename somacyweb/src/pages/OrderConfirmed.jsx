import {
  CheckCircle2,
  User,
  MapPin,
  Clock,
  FileText,
  ShieldCheck,
  Truck,
  Download,
  ArrowRight,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

export default function OrderConfirmed() {
  const navigate = useNavigate();
  const { orderId } = useParams();

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* SUCCESS HEADER */}

        <div className="text-center mb-10">
          <div className="relative flex justify-center mb-6">
            <div className="absolute w-28 h-28 bg-green-100 rounded-full animate-ping opacity-30"></div>

            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center relative z-10">
              <CheckCircle2 className="text-green-600" size={40} />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Thank You! Your Order is Confirmed
          </h1>

          <p className="text-gray-500 mt-2">
            Order #{orderId} placed successfully.
          </p>
        </div>

        {/* SAVINGS BANNER */}

        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl py-4 px-6 text-center font-medium shadow-md mb-10">
          🎉 Great News! You saved ₹2,450 today with RGHS benefits
        </div>

        {/* ORDER DETAILS */}

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-10">
          {/* HEADER */}
          <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-50">
            <h3 className="text-sm font-semibold tracking-wider text-gray-600">
              ORDER DETAILS
            </h3>

            <span className="flex items-center gap-1 bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-semibold">
              RGHS CASHLESS APPROVED
            </span>
          </div>

          {/* CONTENT */}
          <div className="grid md:grid-cols-2 gap-8 px-6 py-6">
            {/* ORDER ID */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide">
                Order ID
              </p>
              <p className="text-lg font-semibold text-gray-900">#{orderId}</p>
            </div>

            {/* BENEFICIARY */}
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-lg">
                <User size={18} className="text-gray-500" />
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Beneficiary Name
                </p>
                <p className="font-medium text-gray-900">Ramesh Kumar (Self)</p>
              </div>
            </div>

            {/* DELIVERY TIME */}
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-lg">
                <Clock size={18} className="text-gray-500" />
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Estimated Delivery / Collection
                </p>

                <p className="font-medium text-gray-900">
                  Thursday, 24th Oct | 10:00 AM - 02:00 PM
                </p>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-lg">
                <MapPin size={18} className="text-gray-500" />
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Delivery Address
                </p>

                <p className="font-medium text-gray-900">
                  B-45, Sector 62, Noida, Uttar Pradesh - 201301
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* NEXT STEPS */}

        <h3 className="text-center font-semibold text-gray-700 mb-8">
          Next Steps
        </h3>

        <div className="flex items-center justify-center gap-6 mb-12">
          {/* STEP 1 */}
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto shadow">
              <FileText size={20} />
            </div>

            <p className="font-semibold mt-2">Verification</p>
            <p className="text-blue-600 text-sm">Ongoing</p>
          </div>

          {/* LINE */}
          <div className="flex-1 h-[2px] bg-gray-200 max-w-[200px]"></div>

          {/* STEP 2 */}
          <div className="text-center opacity-60">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
              <ShieldCheck size={20} />
            </div>

            <p className="font-semibold mt-2">Approval</p>
            <p className="text-sm">Pending</p>
          </div>

          {/* LINE */}
          <div className="flex-1 h-[2px] bg-gray-200 max-w-[200px]"></div>

          {/* STEP 3 */}
          <div className="text-center opacity-60">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
              <Truck size={20} />
            </div>

            <p className="font-semibold mt-2">Dispatch</p>
            <p className="text-sm">Coming Up</p>
          </div>
        </div>

        {/* ACTION BUTTONS */}

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => navigate("/track-order")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-md transition"
          >
            <Truck size={18} />
            Track Order Status
          </button>

          <button className="border hover:bg-gray-50 px-6 py-3 rounded-lg flex items-center gap-2 transition">
            <Download size={18} />
            Download Invoice
          </button>

          <button
            onClick={() => navigate("/")}
            className="text-blue-600 font-semibold flex items-center gap-1"
          >
            Back to Home
            <ArrowRight size={16} />
          </button>
        </div>

        {/* REFERRAL CARD */}

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg">
          <div>
            <h3 className="text-lg font-semibold">Refer a Colleague</h3>

            <p className="text-sm opacity-90">
              Share the gift of health and earn ₹500 credits.
            </p>
          </div>

          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
            SHARE REFERRAL LINK
          </button>
        </div>
      </div>
    </div>
  );
}
