import {
  Check,
  Truck,
  User,
  MapPin,
  Phone,
  MessageCircle,
  Download,
  FileText,
} from "lucide-react";

import { useParams } from "react-router-dom";
import HelpDesk from "../Component/HelpDesk";

export default function TrackOrder() {
  const { orderId } = useParams();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-full mx-auto px-6 py-8">
        {/* TOP HEADER */}

        <div className="flex justify-between items-center mb-6">
          <h2 className="font-semibold text-lg">TRACK ORDER #{orderId}</h2>

          <button className="flex items-center gap-2 text-blue-600 font-medium">
            <Download size={18} />
            Download Invoice
          </button>
        </div>

        {/* PROGRESS BAR */}

        <div className="bg-white rounded-xl border p-6 mb-8">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-4 left-0 w-full h-[3px] bg-gray-200"></div>

            {/* step */}

            {[
              "Order Confirmed",
              "Prescription Verified",
              "Packed",
              "Shipped",
              "Out for Delivery",
              "Delivered",
            ].map((step, i) => {
              const active = i <= 3;

              return (
                <div key={i} className="relative text-center z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center 
${active ? "bg-green-500 text-white" : "bg-gray-200"}`}
                  >
                    {active ? <Check size={16} /> : <Truck size={16} />}
                  </div>

                  <p className="text-xs mt-2 font-medium">{step}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* LEFT SIDE */}

          <div className="lg:col-span-2 space-y-6">
            {/* DELIVERY PARTNER */}

            <div className="bg-white rounded-xl border p-6">
              <p className="text-xs text-gray-400 mb-2">
                ASSIGNED DELIVERY PARTNER
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="w-14 h-14 rounded-lg"
                  />

                  <div>
                    <h3 className="font-semibold text-lg">Rohan Sharma</h3>

                    <p className="text-sm text-gray-500">
                      Silver Badge Delivery Expert · 2400+ deliveries
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <Phone size={16} />
                    Call
                  </button>

                  <button className="bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2">
                    <MessageCircle size={16} />
                    Chat
                  </button>
                </div>
              </div>
            </div>

            {/* ORDER JOURNEY */}

            <div className="bg-white rounded-xl border p-6">
              <div className="flex justify-between mb-4">
                <h3 className="font-semibold">Order Journey</h3>

                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  LIVE UPDATES
                </span>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Out for delivery",
                    desc: "Order is with delivery partner",
                    time: "Just now",
                  },
                  {
                    title: "Reached Jaipur Facility",
                    desc: "Processed through hub",
                    time: "10:45 AM",
                  },
                  {
                    title: "In Transit from Hub",
                    desc: "Order on the way",
                    time: "08:15 AM",
                  },
                  {
                    title: "Order Packed",
                    desc: "Packed by pharmacy",
                    time: "Yesterday",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-3 h-3 rounded-full ${i === 0 ? "bg-blue-600" : "bg-gray-300"}`}
                      ></div>

                      {i !== 3 && (
                        <div className="w-[2px] h-10 bg-gray-200"></div>
                      )}
                    </div>

                    <div>
                      <p className="font-medium">{item.title}</p>

                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>

                    <div className="ml-auto text-xs text-gray-400">
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-6">
            {/* ORDER SUMMARY */}

            <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b bg-gray-50">
                <h3 className="font-semibold text-gray-800">Order Summary</h3>
              </div>

              <div className="p-6 space-y-6">
                {/* ADDRESS */}

                <div className="flex gap-3">
                  <MapPin className="text-gray-400" size={18} />
                  <div>
                    <p className="text-xs text-gray-400 uppercase">
                      Delivery Address
                    </p>
                    <p className="font-medium text-gray-800">
                      B-45, Sector 62, Noida, Uttar Pradesh - 201301
                    </p>
                  </div>
                </div>

                {/* BENEFICIARY */}

                <div className="flex gap-3">
                  <User className="text-gray-400" size={18} />
                  <div>
                    <p className="text-xs text-gray-400 uppercase">
                      Beneficiary
                    </p>
                    <p className="font-medium text-gray-800">
                      Ramesh Kumar (Self)
                    </p>
                  </div>
                </div>

                <hr />

                {/* ITEMS */}

                <div className="space-y-5">
                  <p className="text-xs text-gray-400 uppercase">Items (3)</p>

                  {/* ITEM */}

                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Augmentin 625 Duo Tablet</p>

                      <p className="text-sm text-gray-500">
                        Strip of 10 tablets
                      </p>

                      <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mt-1">
                        RGHS CASHLESS
                      </span>
                    </div>

                    <p className="font-medium">x2</p>
                  </div>

                  {/* ITEM */}

                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Pan-D Capsule</p>

                      <p className="text-sm text-gray-500">
                        Strip of 15 capsules
                      </p>

                      <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mt-1">
                        RGHS CASHLESS
                      </span>
                    </div>

                    <p className="font-medium">x1</p>
                  </div>
                </div>

                {/* PRICE BOX */}

                <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Total MRP</span>
                    <span>₹2,845</span>
                  </div>

                  <div className="flex justify-between text-green-600 text-sm">
                    <span>RGHS Benefit Applied</span>
                    <span>-₹2,845</span>
                  </div>

                  <hr />

                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total Amount Payable</span>
                    <span className="text-blue-600">₹0</span>
                  </div>
                </div>

                {/* DOWNLOAD INVOICE */}

                <button className="w-full border-2 border-blue-500 text-blue-600 py-3 rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-blue-50 transition">
                  <FileText size={18} />
                  Download Full Invoice
                </button>
              </div>
            </div>

            {/* HELP CARD */}
            <HelpDesk />
          </div>
        </div>
      </div>
    </div>
  );
}
