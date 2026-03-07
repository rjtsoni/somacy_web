import { useParams } from "react-router-dom";

export default function BookingConfirmed() {
  const { category } = useParams();

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-white rounded-xl p-10 shadow-sm text-center">
          <div className="w-16 h-16 mx-auto bg-green-100 flex items-center justify-center rounded-full mb-4">
            <span className="text-green-600 text-2xl">✔</span>
          </div>

          <h1 className="text-2xl font-bold">Booking Confirmed!</h1>

          <p className="text-gray-500 mt-2">
            Your lab test booking has been successfully placed. A phlebotomist
            will arrive at your scheduled time.
          </p>

          <div className="mt-4 inline-flex gap-3 items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm">
            RGHS Verified Benefit Applied
            <span className="text-gray-400">|</span>
            Paid ₹0 (Cashless)
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* LEFT SECTION */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold mb-6">Tracking Timeline</h3>

              <div className="relative">
                <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-gray-200"></div>

                <div className="space-y-8">
                  <div className="flex gap-4 relative">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center z-10">
                      ✓
                    </div>

                    <div>
                      <p className="font-medium text-green-600">
                        Booking Confirmed
                      </p>
                      <p className="text-sm text-gray-500">
                        August 24, 2024 - 09:15 AM
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 relative">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center z-10">
                      👨‍⚕️
                    </div>

                    <div>
                      <p className="font-medium text-blue-600">
                        Phlebotomist Assigned
                      </p>
                      <p className="text-sm text-gray-500">
                        Agent Vikas Kumar is on the way
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 relative">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center z-10">
                      🧪
                    </div>

                    <div>
                      <p className="font-medium text-gray-500">
                        Sample Collection
                      </p>
                      <p className="text-sm text-gray-400">
                        Estimated: 08:15 AM today
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 relative">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center z-10">
                      🚚
                    </div>

                    <div>
                      <p className="font-medium text-gray-500">
                        In Transit to Lab
                      </p>
                      <p className="text-sm text-gray-400">
                        Pending collection
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 relative">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center z-10">
                      📄
                    </div>

                    <div>
                      <p className="font-medium text-gray-500">
                        Report Generation
                      </p>
                      <p className="text-sm text-gray-400">
                        Usually within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PHLEBOTOMIST CARD */}

            <div className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/60"
                  className="w-14 h-14 rounded-full"
                />

                <div>
                  <p className="text-xs text-blue-600 font-semibold">
                    ASSIGNED PHLEBOTOMIST
                  </p>

                  <h4 className="font-semibold">Vikas Kumar</h4>

                  <p className="text-sm text-gray-500">
                    ⭐ 4.8 (1200+ collections)
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                  Track Arrival
                </button>

                <button className="border px-4 py-3 rounded-lg">Call</button>
              </div>
            </div>

            {/* PREPARATION GUIDE */}

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Preparation Guide</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex gap-3">
                  <div className="text-blue-600 text-xl">🍽</div>
                  <div>
                    <p className="font-medium">10-12 Hrs Fasting</p>
                    <p className="text-sm text-gray-500">
                      Do not consume food except water.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-blue-600 text-xl">💧</div>
                  <div>
                    <p className="font-medium">Stay Hydrated</p>
                    <p className="text-sm text-gray-500">
                      Drinking water is encouraged.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-blue-600 text-xl">💊</div>
                  <div>
                    <p className="font-medium">Continue Meds</p>
                    <p className="text-sm text-gray-500">
                      Unless specified by doctor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* HEADER */}
            <div className="p-6 border-b">
              <h3 className="font-semibold text-lg">Order Summary</h3>
              <p className="text-sm text-gray-400">Booking ID: SOM-8291024</p>
            </div>

            <div className="p-6 space-y-6">
              {/* TEST INFO */}
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl">
                  ➕
                </div>

                <div>
                  <p className="font-semibold">Full Body Checkup</p>
                  <p className="text-sm text-gray-500">
                    Includes 72 parameters
                  </p>
                </div>
              </div>

              <div className="border-t"></div>

              <div className="flex gap-3 text-sm">
                <span className="text-gray-400 text-lg">👤</span>

                <div>
                  <p className="text-gray-400 text-xs font-semibold">PATIENT</p>
                  <p>Rajesh Kumar (M, 45y)</p>
                </div>
              </div>

              {/* TIME */}
              <div className="flex gap-3 text-sm">
                <span className="text-gray-400 text-lg">📅</span>

                <div>
                  <p className="text-gray-400 text-xs font-semibold">
                    SCHEDULED TIME
                  </p>
                  <p>Today, 24 Aug | 08:00 AM - 09:00 AM</p>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex gap-3 text-sm">
                <span className="text-gray-400 text-lg">📍</span>

                <div>
                  <p className="text-gray-400 text-xs font-semibold">
                    COLLECTION ADDRESS
                  </p>

                  <p>
                    402, Green Valley Apartments, Sector 45, Gurgaon, 122003
                  </p>
                </div>
              </div>

              <div className="border-t"></div>

              {/* PRICE */}

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Amount</span>
                  <span>₹2,999</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>RGHS Discount</span>
                  <span>-₹2,999</span>
                </div>
              </div>

              <div className="border-t pt-4 flex justify-between font-semibold">
                <span>Total Paid</span>
                <span className="text-green-600 text-xl">₹0</span>
              </div>

              <button className="w-full border rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50">
                ⬇ Download Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
