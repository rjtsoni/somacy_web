import { useParams, useNavigate } from "react-router-dom";
import {
  Truck,
  MapPin,
  Package,
  Phone,
  FileText,
  RotateCcw,
  XCircle,
} from "lucide-react";
import { useState } from "react";

export default function OrderDetails() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [openCancelModal, setOpenCancelModal] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const [otherReason, setOtherReason] = useState("");

  const handleReorder = () => {
    // const orderItems = [
    //   {
    //     id: 1,
    //     name: "Augmentin 625 Duo Tablet",
    //     qty: 2,
    //     price: 450,
    //   },
    //   {
    //     id: 2,
    //     name: "Pan-D Capsule",
    //     qty: 1,
    //     price: 120,
    //   },
    // ];

    // localStorage.setItem("reorderItems", JSON.stringify(orderItems));

    navigate("/cart");
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}

        <div className="bg-white rounded-xl border shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Order #{orderId}</h2>

              <p className="text-sm text-slate-500">
                Placed on Oct 25, 2023 • 5 Items
              </p>

              <p className="text-xs text-slate-400">Mode: RGHS Cashless</p>
            </div>

            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
              In Transit
            </span>
          </div>

          {/* PROGRESS */}

          <div className="mt-5">
            <div className="h-2 bg-slate-200 rounded-full">
              <div className="h-2 bg-blue-600 w-[70%]"></div>
            </div>

            <p className="flex items-center gap-2 text-sm text-slate-500 mt-3">
              <Truck size={16} />
              Expected Delivery Today 8:00 PM
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* LEFT SIDE */}

          <div className="lg:col-span-2 space-y-6">
            {/* DELIVERY PARTNER */}

            <div className="bg-white rounded-xl border shadow-sm p-6">
              <p className="text-xs text-slate-400 mb-3">
                ASSIGNED DELIVERY PARTNER
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <img
                    src="https://i.pravatar.cc/60"
                    className="w-14 h-14 rounded-full"
                  />

                  <div>
                    <h4 className="font-semibold">Rohan Sharma</h4>

                    <p className="text-sm text-slate-500">
                      Silver Delivery Expert • 2400+ deliveries
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <Phone size={16} />
                    Call
                  </button>

                  <button className="border px-4 py-2 rounded-lg">Chat</button>
                </div>
              </div>
            </div>

            {/* ITEMS */}

            <div className="bg-white rounded-xl border shadow-sm p-6">
              <h3 className="font-semibold mb-5">Items Ordered</h3>

              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="flex justify-between border-b pb-4 mb-4"
                >
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-slate-100 rounded-lg"></div>

                    <div>
                      <h4 className="font-medium">Augmentin 625 Duo Tablet</h4>

                      <p className="text-sm text-slate-500">
                        Strip of 10 tablets
                      </p>

                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded mt-1 inline-block">
                        RGHS Cashless
                      </span>
                    </div>
                  </div>

                  <p className="font-semibold">x2</p>
                </div>
              ))}

              {/* ACTIONS */}

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleReorder()}
                  className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm"
                >
                  <RotateCcw size={16} />
                  Reorder
                </button>

                <button
                  onClick={() => setOpenCancelModal(true)}
                  className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm text-red-500"
                >
                  <XCircle size={16} />
                  Cancel Order
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-6">
            {/* SUMMARY */}

            <div className="bg-white rounded-xl border shadow-sm p-6">
              <h3 className="font-semibold mb-4">Order Summary</h3>

              <p className="text-xs text-slate-400 mb-2">DELIVERY ADDRESS</p>

              <p className="text-sm">B-45 Sector 62, Noida</p>

              <p className="text-sm text-slate-500 mb-4">
                Uttar Pradesh - 201301
              </p>

              <p className="text-xs text-slate-400 mb-2">BENEFICIARY</p>

              <p className="text-sm font-medium mb-4">Ramesh Kumar (Self)</p>

              <hr className="mb-4" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total MRP</span>
                  <span>₹2,845</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>RGHS Benefit Applied</span>
                  <span>-₹2,845</span>
                </div>

                <div className="flex justify-between font-semibold text-lg">
                  <span>Total Payable</span>
                  <span className="text-blue-600">₹0</span>
                </div>
              </div>

              <button className="mt-5 w-full border py-3 rounded-lg flex items-center justify-center gap-2">
                <FileText size={16} />
                Download Invoice
              </button>
            </div>

            {/* HELP */}

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
              <h4 className="font-semibold mb-2">Need Help with your order?</h4>

              <p className="text-sm text-slate-500 mb-4">
                Our support team is available 24/7
              </p>

              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
                Chat with Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {openCancelModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Cancel Order</h3>

            <p className="text-sm text-slate-500 mb-4">
              Are you sure you want to cancel this order?
            </p>

            <select
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
              className="w-full border rounded-lg p-2 mb-4 text-sm"
            >
              <option value="">Select cancellation reason</option>
              <option value="mistake">Ordered by mistake</option>
              <option value="cheap">Found cheaper elsewhere</option>
              <option value="delay">Delivery taking too long</option>
              <option value="other">Other</option>
            </select>

            {/* Show textarea if Other */}

            {cancelReason === "other" && (
              <textarea
                placeholder="Please write your reason..."
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
                className="w-full border rounded-lg p-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpenCancelModal(false)}
                className="px-4 py-2 border rounded-lg text-sm"
              >
                Close
              </button>

              <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm">
                Confirm Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
