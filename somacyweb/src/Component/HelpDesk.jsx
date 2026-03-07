import { HelpCircle, MessageSquare } from "lucide-react";
import React from "react";

function HelpDesk() {
  return (
    <div>
      <div className="bg-blue-50 border rounded-2xl p-6 text-center relative">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow">
          <HelpCircle size={18} />
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 className="font-semibold text-gray-800">Need Assistance?</h3>

          <p className="text-sm text-gray-500 mt-2">
            Our specialized RGHS support desk is available 24/7 to help with
            authorization queries.
          </p>

          <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center gap-2">
            <MessageSquare size={16} />
            Chat with Support
          </button>

          <button className="w-full mt-3 border rounded-lg py-2 text-gray-600 hover:bg-gray-50">
            Call Help Desk
          </button>
        </div>
      </div>
    </div>
  );
}

export default HelpDesk;
