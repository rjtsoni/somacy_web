import {
  CheckCircle,
  Truck,
  FileText,
  MapPin,
  User,
  Pill,
  Wallet,
  MessageSquare,
} from "lucide-react";
import { useParams } from "react-router-dom";
import HelpDest from "../Component/HelpDesk";
import HelpDesk from "../Component/HelpDesk";

export default function OrderSuccess() {
  const { orderId } = useParams();
  const medicines = [
    {
      name: "Atorvastatin 10mg Tablets",
      desc: "Strip of 15 tablets | Mfr: Sun Pharma",
      price: "₹245.00",
    },
    {
      name: "Glycomet-GP 2 Tablet PR",
      desc: "Strip of 10 tablets | Mfr: USV Ltd",
      price: "₹182.00",
    },
    {
      name: "Voglibose 0.3mg Tablets",
      desc: "Strip of 15 tablets | Mfr: Biocon",
      price: "₹158.00",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* SUCCESS HEADER */}

        <div className="bg-white rounded-xl p-10 text-center shadow-sm">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="text-green-600" />
          </div>

          <h1 className="text-2xl font-bold">Order Placed Successfully!</h1>

          <p className="text-gray-500 mt-2">
            Your RGHS cashless order has been received and is being processed
            for authorization.
          </p>

          <div className="flex justify-center gap-3 mt-6">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
              Download Invoice
            </button>

            <button className="border px-5 py-2 rounded-lg">
              Order Summary
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-4">
            RGHS Order ID : {orderId}
          </p>
        </div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* LEFT */}

          <div className="lg:col-span-2 space-y-6">
            {/* ORDER TRACKING */}

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold mb-6 flex items-center gap-2">
                <Truck size={18} /> Order Tracking
              </h3>

              <div className="relative pl-6 border-l">
                <div className="mb-6">
                  <div className="absolute -left-3 w-6 h-6 bg-blue-600 rounded-full"></div>

                  <p className="font-medium">Order Placed</p>
                  <p className="text-sm text-gray-500">
                    Oct 24, 10:00 AM - Successfully received
                  </p>
                </div>

                <div className="mb-6">
                  <div className="absolute -left-3 w-6 h-6 bg-blue-600 rounded-full"></div>

                  <p className="font-medium text-blue-600">
                    Prescription Verified
                  </p>

                  <p className="text-sm text-gray-500">
                    Oct 24, 11:30 AM - Verified by pharmacist
                  </p>
                </div>

                <div className="mb-6 opacity-40">
                  <div className="absolute -left-3 w-6 h-6 bg-gray-300 rounded-full"></div>

                  <p className="font-medium">Pharmacist Dispatched</p>

                  <p className="text-sm">Pending authorization</p>
                </div>

                <div className="opacity-40">
                  <div className="absolute -left-3 w-6 h-6 bg-gray-300 rounded-full"></div>

                  <p className="font-medium">Out for Delivery</p>
                </div>
              </div>
            </div>

            {/* AUTHORIZATION */}

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <p className="font-semibold text-yellow-700">
                RGHS Authorization Status
              </p>

              <p className="text-sm text-yellow-600 mt-2">
                Your order is awaiting final authorization from RGHS department.
              </p>
            </div>

            {/* MEDICINES */}

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Header */}

              <div className="flex justify-between items-center px-6 py-4 border-b">
                <h3 className="font-semibold text-gray-800">
                  Medicines (3 Items)
                </h3>

                <button className="text-blue-600 text-sm flex items-center gap-1 hover:underline">
                  👁 View Prescription
                </button>
              </div>

              {/* Medicine List */}

              <div>
                {medicines.map((med, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-6 py-5 border-b last:border-none"
                  >
                    {/* LEFT */}

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Pill className="text-gray-500" size={20} />
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-800">
                          {med.name}
                        </h4>

                        <p className="text-sm text-gray-500">{med.desc}</p>
                      </div>
                    </div>

                    {/* RIGHT */}

                    <div className="text-right">
                      <p className="text-sm text-gray-400 line-through">
                        {med.price}
                      </p>

                      <p className="text-green-600 font-semibold">
                        ₹0 (Cashless)
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* TOTAL */}

              <div className="flex justify-between items-center px-6 py-5 bg-gray-50">
                <div>
                  <p className="font-medium text-gray-700">
                    Total Payable Amount
                  </p>

                  <p className="text-xs text-green-600">100% CASHLESS ORDER</p>
                </div>

                <p className="text-xl font-bold text-blue-600">₹0.00</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="space-y-6">
            {/* Beneficiary Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="flex items-center gap-2 font-semibold text-gray-800">
                <User size={18} className="text-blue-600" />
                Beneficiary Info
              </h3>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="text-gray-400 uppercase text-xs">
                    Patient Name
                  </p>
                  <p className="font-medium text-gray-800">
                    Rajesh Kumar Sharma
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 uppercase text-xs">RGHS ID</p>
                  <p className="font-medium text-gray-800">
                    RJ - 2023 - 99 - 4421 - XX
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 uppercase text-xs">Category</p>
                  <p className="font-medium text-gray-800">
                    Pensioner (Post-2004)
                  </p>
                </div>
              </div>

              <span className="inline-block mt-4 text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded">
                VERIFIED MEMBER
              </span>
            </div>

            {/* Wallet Impact */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="flex items-center gap-2 font-semibold text-gray-800">
                <Wallet size={18} className="text-blue-600" />
                Wallet Impact
              </h3>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Order Value</span>
                  <span>₹585.00</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">RGHS Subsidy</span>
                  <span className="text-green-600">-₹585.00</span>
                </div>

                <div className="flex justify-between font-semibold pt-2">
                  <span className="text-gray-500">
                    Amount Blocked from Annual Limit
                  </span>
                  <span className="text-blue-600">₹585.00</span>
                </div>
              </div>

              <div className="mt-4 bg-blue-50 text-blue-600 text-xs p-3 rounded-lg">
                Your remaining annual limit for medicine is ₹14,415.00 after
                this order.
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="flex items-center gap-2 font-semibold text-gray-800">
                <MapPin size={18} className="text-blue-600" />
                Delivery Address
              </h3>

              <div className="text-sm text-gray-600 mt-3 leading-relaxed">
                <p className="font-medium text-gray-800">Rajesh Kumar Sharma</p>

                <p>
                  H-42, Sector 5, Malviya Nagar,
                  <br />
                  Jaipur, Rajasthan-302017
                </p>

                <p className="mt-1">Contact: +91 98XXXXXX42</p>
              </div>
            </div>

            {/* Support */}
            <HelpDesk />
          </div>
        </div>
      </div>
    </div>
  );
}
