import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function SlotBooking() {
  const { category } = useParams();

  const [date, setDate] = useState(new Date());
  const [slot, setSlot] = useState("");
  const [address, setAddress] = useState("home");

  const morningSlots = [
    "07:00 - 08:00 AM",
    "08:00 - 09:00 AM",
    "09:00 - 10:00 AM",
    "10:00 - 11:00 AM",
  ];

  const eveningSlots = ["05:00 - 06:00 PM", "06:00 - 07:00 PM"];
  const currentStep = 2; // change dynamically

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* STEP BAR */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center w-full">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full
        ${currentStep > 1 ? "bg-green-500 text-white" : "bg-gray-200"}`}
              >
                ✓
              </div>

              <span className="text-sm mt-2 text-green-600">Select Test</span>
            </div>

            <div className="flex-1 h-[2px] bg-gray-200 mx-4"></div>
          </div>

          <div className="flex items-center w-full">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full
        ${
          currentStep === 2
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-500"
        }`}
              >
                2
              </div>

              <span
                className={`text-sm mt-2 ${
                  currentStep === 2 ? "text-blue-600" : "text-gray-400"
                }`}
              >
                Schedule
              </span>
            </div>

            <div className="flex-1 h-[2px] bg-gray-200 mx-4"></div>
          </div>

          <div className="flex items-center w-full">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-gray-200 text-gray-500 flex items-center justify-center rounded-full">
                3
              </div>

              <span className="text-sm mt-2 text-gray-400">Address</span>
            </div>

            <div className="flex-1 h-[2px] bg-gray-200 mx-4"></div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-gray-200 text-gray-500 flex items-center justify-center rounded-full">
              4
            </div>

            <span className="text-sm mt-2 text-gray-400">Confirmation</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Select Date & Time</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border rounded-xl p-3">
                  <Calendar
                    onChange={setDate}
                    value={date}
                    minDate={new Date()}
                    className="border-none w-full"
                  />
                </div>

                {/* SLOTS */}
                <div>
                  <p className="text-xs text-gray-500 font-semibold mb-2">
                    MORNING SLOTS
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {morningSlots.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSlot(s)}
                        className={`border rounded-lg py-2 text-sm
                        ${
                          slot === s
                            ? "border-blue-600 bg-blue-50 text-blue-600"
                            : "hover:border-blue-400"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>

                  <p className="text-xs text-gray-500 font-semibold mb-2">
                    EVENING SLOTS
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {eveningSlots.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSlot(s)}
                        className={`border rounded-lg py-2 text-sm
                        ${
                          slot === s
                            ? "border-blue-600 bg-blue-50 text-blue-600"
                            : "hover:border-blue-400"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between mb-4">
                <h3 className="font-semibold flex items-center gap-2">
                  Collection Address
                </h3>

                <button className="text-blue-600 text-sm">
                  + Add New Address
                </button>
              </div>

              <label className="flex items-start gap-3 border-2 border-blue-600 rounded-xl p-4 mb-3 cursor-pointer">
                <input
                  type="radio"
                  name="address"
                  checked={address === "home"}
                  onChange={() => setAddress("home")}
                  className="mt-1"
                />

                <div>
                  <p className="font-semibold">Home</p>

                  <p className="text-sm text-gray-500">
                    Sector 14, Huda Market Road, Behind SBI Bank, Gurgaon
                  </p>
                </div>
              </label>

              <label className="flex items-start gap-3 border rounded-xl p-4 cursor-pointer">
                <input
                  type="radio"
                  name="address"
                  checked={address === "office"}
                  onChange={() => setAddress("office")}
                  className="mt-1"
                />

                <div>
                  <p className="font-semibold">Office</p>

                  <p className="text-sm text-gray-500">
                    Cyber City, Building 10C, Gurgaon
                  </p>
                </div>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            {/* ORDER SUMMARY */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-sm font-semibold text-blue-700 tracking-wider mb-4">
                ORDER SUMMARY
              </h3>

              <div className="flex gap-3 mb-4">
                <img
                  src="/lab.png"
                  alt=""
                  className="w-14 h-14 rounded-lg object-cover"
                />

                <div>
                  <p className="font-semibold text-gray-800">
                    Comprehensive Full Body Checkup
                  </p>

                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded flex items-center gap-1 w-fit mt-1">
                    ✔ RGHS VERIFIED
                  </span>
                </div>
              </div>

              <div className="text-sm text-gray-600 space-y-2">
                <div className="flex justify-between">
                  <span>Test Price</span>
                  <span className="line-through text-gray-400">₹4,999</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>RGHS Subsidy</span>
                  <span>-₹4,999</span>
                </div>

                <div className="flex justify-between">
                  <span>Collection Charges</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>
              </div>

              <div className="border-t border-dashed mt-4 pt-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-800">Amount Payable</p>
                </div>

                <div className="text-right">
                  <p className="text-blue-600 text-2xl font-bold">₹0</p>
                  <p className="text-xs text-gray-400">Cashless Booking</p>
                </div>
              </div>

              {/* SELECTED SLOT */}
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-4">
                <p className="text-xs text-blue-600 font-semibold mb-1">
                  SELECTED SLOT
                </p>

                <p className="text-sm font-medium flex items-center gap-2">
                  📅 {date.toDateString()} • {slot}
                </p>
              </div>

              {/* FASTING INFO */}
              <div className="bg-gray-50 rounded-lg p-4 mt-4 flex items-start gap-3">
                <span className="text-yellow-500 text-lg">⚠</span>

                <p className="text-sm text-gray-600">
                  12 hours fasting is recommended for this test package.
                </p>
              </div>
            </div>

            {/* NEED ASSISTANCE CARD */}

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-2">
                Need Assistance?
              </h4>

              <p className="text-sm text-gray-600 mb-4">
                Our health advisors are available to help you with scheduling.
              </p>

              <button className="text-blue-600 font-semibold flex items-center gap-2">
                Call +91 1800-SOMACY 📞
              </button>
            </div>
          </div>
        </div>

        {/* FOOTER BUTTON */}
        <div className="flex justify-between mt-10">
          <button className="text-gray-500">← Back to Details</button>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
            Proceed to Payment →
          </button>
        </div>
      </div>
    </div>
  );
}
