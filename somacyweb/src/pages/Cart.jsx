import React from "react";
import {
  Trash2,
  Minus,
  Plus,
  ShieldCheck,
  BadgeCheck,
  Info,
  Pill,
  Microscope,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartItem = ({
  title,
  subtitle,
  price,
  quantity,
  rghs,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between gap-4">
      <div className="flex gap-4">
        <div className="w-20 h-20 bg-gray-100 rounded-lg"></div>

        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-gray-800">{title}</h4>

            {rghs && (
              <span className="flex items-center gap-1 text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                <BadgeCheck size={14} />
                RGHS VERIFIED
              </span>
            )}
          </div>

          <p className="text-sm text-gray-500">{subtitle}</p>

          <p className="mt-2 font-semibold text-blue-600 text-lg">₹{price}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-lg overflow-hidden">
          <button onClick={onDecrease} className="px-3 py-2 hover:bg-gray-100">
            <Minus size={16} />
          </button>
          <span className="px-4 text-sm">{quantity}</span>
          <button onClick={onIncrease} className="px-3 py-2 hover:bg-gray-100">
            <Plus size={16} />
          </button>
        </div>

        <button className="text-gray-400 hover:text-red-500 transition">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default function CartPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl w-full mx-auto px-4 py-8 text-left">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-2">Home / Shopping Cart</p>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
        <p className="text-gray-500 mt-1 mb-6">
          Review your medicine prescriptions and diagnostic lab bookings
        </p>

        <div className="flex gap-6 border-b mb-8 overflow-x-auto">
          <button className="pb-3 border-b-2 border-blue-600 text-blue-600 font-medium whitespace-nowrap">
            All Items (5)
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 pt-4">
              <Pill className="text-blue-600" size={24} />

              <h3 className="text-xl font-semibold text-gray-800">Medicines</h3>
            </div>

            <CartItem
              title="Amoxicillin 500mg"
              subtitle="Strip of 10 Capsules | Zydus Healthcare"
              price="0.00"
              quantity={2}
              rghs={true}
            />

            <CartItem
              title="HealthVit Vitamin D3"
              subtitle="60 Softgels | Retail Purchase"
              price="499.00"
              quantity={1}
            />
            <div className="flex items-center gap-3 pt-4">
              <Microscope className="text-blue-600" size={24} />

              <h3 className="text-xl font-semibold text-gray-800">Lab Tests</h3>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-gray-800">
                    Complete Blood Count (CBC)
                  </h4>
                  <span className="flex items-center gap-1 text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                    <BadgeCheck size={14} />
                    RGHS VERIFIED
                  </span>
                </div>

                <p className="text-sm text-gray-500">
                  Home Sample Collection | NABL Accredited Lab
                </p>

                <p className="mt-2 font-semibold text-blue-600 text-lg">
                  ₹0.00
                </p>
              </div>

              <Trash2
                size={18}
                className="text-gray-400 hover:text-red-500 cursor-pointer"
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 lg:sticky lg:top-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                Order Summary
              </h3>

              {/* Price Details */}
              <div className="space-y-4 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Retail Items Subtotal</span>
                  <span className="font-medium text-gray-800">₹1,798.00</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>RGHS Subtotal (Gross)</span>
                  <span className="font-medium text-gray-800">₹940.00</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Lab Collection Fee</span>
                  <span className="font-medium text-green-600">FREE</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>RGHS Subsidy (100%)</span>
                  <span className="font-medium">-₹940.00</span>
                </div>
              </div>

              <div className="border-t my-6"></div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">
                  Total Payable
                </span>

                <span className="text-2xl font-bold text-blue-600">
                  ₹1,798.00
                </span>
              </div>

              {/* Button */}
              <button
                onClick={() => navigate("/checkout")}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium shadow-md transition"
              >
                Proceed to Checkout
              </button>

              {/* T&C */}
              <p className="text-xs text-gray-500 text-center mt-4">
                By clicking, you agree to our{" "}
                <span className="underline cursor-pointer">T&C</span>
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <ShieldCheck size={20} className="text-green-600" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">
                    Safe and Secure Payments
                  </h4>
                  <p className="text-sm text-gray-500">
                    PCI-DSS compliant payment gateway
                  </p>
                </div>
              </div>

              {/* Verified */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <BadgeCheck size={20} className="text-blue-600" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">
                    Verified by Somacy
                  </h4>
                  <p className="text-sm text-gray-500">
                    Quality assured medicines and NABL labs
                  </p>
                </div>
              </div>

              {/* Prescription Required Box */}
              <div className="flex items-start gap-4 bg-gray-50 border-l-4 border-blue-600 p-4 rounded-xl">
                <Info size={20} className="text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Prescription Required
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Some items in your cart require a valid prescription. You
                    can upload it in the next step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
