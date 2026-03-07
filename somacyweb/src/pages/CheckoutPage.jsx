import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState("home");
  const addresses = [
    {
      id: "home",
      title: "Home",
      address: "H-42, Sector 5, Malviya Nagar, Jaipur, Rajasthan - 302017",
    },
    {
      id: "office",
      title: "Office",
      address: "Cyber City Building 10C, Gurgaon, Haryana - 122002",
    },
  ];

  return (
    <div className="bg-gray-50  p-6">
      <div className="max-w-full mx-auto grid lg:grid-cols-3 gap-6">
        {/* LEFT SIDE */}

        <div className="lg:col-span-2 space-y-6">
          {/* BENEFICIARY INFO */}

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold mb-4">Beneficiary Info</h3>

            <p className="text-sm text-gray-500">Patient Name</p>

            <p className="font-medium">Rajesh Kumar Sharma</p>

            <p className="text-sm text-gray-400 mt-2">
              RGHS ID: RJ-2023-99-4421-XX
            </p>
          </div>

          {/* DELIVERY ADDRESS */}

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Delivery Address</h3>

              <button className="text-blue-600 text-sm font-medium">
                + Add Address
              </button>
            </div>

            <div className="space-y-4">
              {addresses.map((addr) => (
                <label
                  key={addr.id}
                  className={`flex items-start gap-3 border rounded-xl p-4 cursor-pointer transition
        ${selectedAddress === addr.id
                      ? "border-blue-600 bg-blue-50"
                      : "hover:border-gray-300"
                    }`}
                >
                  <input
                    type="radio"
                    name="address"
                    checked={selectedAddress === addr.id}
                    onChange={() => setSelectedAddress(addr.id)}
                    className="mt-1 accent-blue-600"
                  />

                  <div>
                    <p className="font-medium">{addr.title}</p>

                    <p className="text-sm text-gray-500">{addr.address}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}

        <div className="space-y-6">
          {/* ORDER SUMMARY */}

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold mb-4">Order Summary</h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Atorvastatin 10mg</span>
                <span>₹245</span>
              </div>

              <div className="flex justify-between">
                <span>Glycomet-GP2</span>
                <span>₹182</span>
              </div>

              <div className="flex justify-between">
                <span>Voglibose</span>
                <span>₹158</span>
              </div>
            </div>

            <div className="border-t mt-4 pt-4 flex justify-between font-semibold">
              <span>Total</span>

              <span>₹585</span>
            </div>
          </div>

          {/* WALLET IMPACT */}

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold mb-3">Wallet Impact</h3>

            <div className="flex justify-between text-sm">
              <span>Order Value</span>

              <span>₹585</span>
            </div>

            <div className="flex justify-between text-green-600 text-sm mt-2">
              <span>RGHS Subsidy</span>

              <span>-₹585</span>
            </div>

            <div className="border-t mt-3 pt-3 flex justify-between font-semibold">
              <span>Payable</span>

              <span className="text-green-600">₹0</span>
            </div>
          </div>
        </div>
      </div>

      {/* PAYMENT BUTTON */}

      <div className="max-w-7xl mx-auto mt-8">
        <button
          onClick={() => navigate("/order-confirmed")}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-medium hover:bg-blue-700"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
