import React from "react";
import { useNavigate } from "react-router-dom";
import {
  UploadCloud,
  FolderOpen,
  Camera,
  FileCheck2,
  Info,
  CheckCircle2,
  Wand2,
  ShieldCheck,
  Lock,
  Phone,
  Shield,
  ArrowRight,
} from "lucide-react";
import HelpDesk from "../Component/HelpDesk";

const UploadRghs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col max-w-full mx-auto">
      {/* PAGE CONTENT */}
      <main className="flex-1 w-full px-6 py-8">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Upload RGHS Prescription
          </h1>
          <p className="text-gray-500">
            Provide your prescription and TID number for faster authorization.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT SIDE */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Upload Box */}
            <div className="bg-white rounded-xl border-2 border-dashed border-gray-200 p-10 text-center hover:border-blue-400 transition">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UploadCloud className="text-blue-600" />
              </div>

              <h3 className="font-semibold text-gray-800">
                Drag & Drop Prescription
              </h3>

              <p className="text-sm text-gray-500 mb-6">
                Supports JPG, PNG, PDF (Max 5MB)
              </p>

              <div className="flex gap-4 justify-center">
                <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg">
                  <FolderOpen size={18} />
                  Browse File
                </button>

                <button className="flex items-center gap-2 bg-gray-100 px-6 py-2.5 rounded-lg">
                  <Camera size={18} />
                  Camera Scan
                </button>
              </div>
            </div>

            {/* Prescription Details */}
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <h3 className="font-semibold flex items-center gap-2 mb-4">
                <FileCheck2 size={18} />
                Enter Prescription Details
              </h3>

              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-sm font-medium">TID Number</label>

                  <input
                    className="w-full border rounded-lg px-4 py-3 mt-1"
                    placeholder="2023-RGHS-XXXX"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Doctor Name</label>

                    <input
                      className="w-full border rounded-lg px-4 py-3 mt-1"
                      placeholder="Dr. Sharma"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">
                      Prescription Date
                    </label>

                    <input
                      type="date"
                      className="w-full border rounded-lg px-4 py-3 mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* AI Info */}
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg mt-4 flex gap-2 text-sm">
                <Wand2 className="text-blue-600" />
                AI will auto extract details after upload.
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="w-full lg:w-80 flex flex-col gap-6">
            {/* Why TID */}
            <div className="bg-blue-50 border rounded-xl p-6">
              <h3 className="font-semibold text-blue-700 mb-4">
                Why TID is Important?
              </h3>

              <ul className="text-sm space-y-2">
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  Verify RGHS eligibility
                </li>

                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  Faster approval
                </li>

                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  100% cashless billing
                </li>
              </ul>
            </div>

            {/* Trust */}
            <div className="bg-white border rounded-xl p-6 space-y-4">
              <h3 className="font-semibold">Trust & Quality</h3>

              <div className="flex gap-3">
                <ShieldCheck className="text-green-600" />
                Pharmacist Verified
              </div>

              <div className="flex gap-3">
                <FileCheck2 className="text-blue-600" />
                RGHS Authorized Partner
              </div>

              <div className="flex gap-3">
                <Lock className="text-purple-600" />
                Secure Health Vault
              </div>
            </div>

            {/* Help */}
            <HelpDesk />
          </div>
        </div>
      </main>

      {/* Bottom Bar */}
      <div className="bg-white border-t p-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Shield size={16} />
          Your medical data is safe with us.
        </div>

        <button
          onClick={() => navigate("/PReview")}
          className="bg-blue-600 text-white px-6 py-2.5 rounded-lg flex items-center gap-2"
        >
          Proceed to Review
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default UploadRghs;
