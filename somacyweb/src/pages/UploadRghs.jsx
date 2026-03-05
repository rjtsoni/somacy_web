import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UploadCloud, FolderOpen, Camera, FileCheck2, Info, CheckCircle2, Wand2, ShieldCheck, Lock, Phone, Shield, ArrowRight } from 'lucide-react'
const UploadRghs = () => {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans w-full">

            <header className="bg-white border-b border-gray-200 px-3 md:px-8 py-4 flex items-center justify-between sm:justify-center relative overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-sm font-medium text-gray-400 flex-shrink-0">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-blue-600">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] sm:text-xs">1</div>
                        <span>Upload</span>
                    </div>

                    <div className="w-4 sm:w-12 h-px bg-gray-200"></div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-gray-200 flex items-center justify-center text-[10px] sm:text-xs">2</div>
                        <span>Details</span>
                    </div>
                    <div className="w-4 sm:w-12 h-px bg-gray-200"></div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-gray-200 flex items-center justify-center text-[10px] sm:text-xs">3</div>
                        <span>Review</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-sm font-medium text-gray-700 ml-6 sm:ml-0 sm:absolute right-4 md:right-8 flex-shrink-0">
                    <span>Support</span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-200 overflow-hidden border border-orange-300">
                        <img src="https://ui-avatars.com/api/?name=User&background=ffd5b4&color=f97316" alt="User" />
                    </div>
                </div>
            </header>


            <main className="flex-1 w-full px-6 py-8 flex flex-col">

                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Upload RGHS Prescription</h1>
                    <p className="text-gray-500">Provide your prescription and TID number for faster authorization by Rajasthan Government Health Scheme.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">


                    <div className="flex-1 flex flex-col gap-6">


                        <div className="bg-white rounded-xl border-2 border-dashed border-gray-200 p-10 flex flex-col items-center justify-center text-center hover:border-blue-400 transition-colors">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <UploadCloud className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Drag & drop your prescription here</h3>
                            <p className="text-gray-500 text-sm mb-6">Supports JPG, PNG, and PDF (Max 5MB)</p>

                            <div className="flex gap-4">
                                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
                                    <FolderOpen className="w-5 h-5" />
                                    Browse File
                                </button>
                                <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2.5 rounded-lg font-medium transition-colors">
                                    <Camera className="w-5 h-5" />
                                    Camera Scan
                                </button>
                            </div>
                        </div>


                        <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-5 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                <span className="text-blue-600"><FileCheck2 className="w-5 h-5" /></span>
                                Enter Prescription Details
                            </h3>

                            <div className="flex flex-col gap-1.5">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                                        TID Number (Token ID) <Info className="w-4 h-4 text-gray-400" />
                                    </label>
                                    <a href="#" className="text-sm text-blue-600 font-medium hover:underline">Find on RGHS Portal</a>
                                </div>
                                <input
                                    type="text"
                                    placeholder="e.g. 2023-RGHS-XXXXXXX"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50"
                                />
                            </div>

                            <div className="flex gap-4">
                                <div className="flex flex-col gap-1.5 flex-1">
                                    <label className="text-sm font-semibold text-gray-700">Doctor's Name</label>
                                    <input
                                        type="text"
                                        placeholder="Dr. Sharma"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5 flex-1 relative">
                                    <label className="text-sm font-semibold text-gray-700">Prescription Date</label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#f0f5ff] rounded-lg p-4 flex gap-3 text-sm border border-blue-100 mt-2">
                                <Wand2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <p className="text-gray-700 leading-relaxed">
                                    <span className="font-semibold text-gray-900">AI Enhancement:</span> Once you upload a file, our AI will automatically extract the TID and Doctor Name to save you time. Please verify before proceeding.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="w-full lg:w-80 flex flex-col gap-6">


                        <div className="bg-[#eef2fc] rounded-xl border border-blue-100 p-6 shadow-sm">
                            <h3 className="text-[15px] font-bold text-blue-700 flex items-center gap-2 mb-4">
                                <div className="bg-blue-600 rounded-full w-4 h-4 flex items-center justify-center">
                                    <CheckCircle2 className="w-3 h-3 text-white" />
                                </div>
                                Why TID is Important?
                            </h3>
                            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                                The <span className="font-semibold">Token ID (TID)</span> is a unique identifier from the Rajasthan Government portal. Entering this allows us to:
                            </p>
                            <ul className="flex flex-col gap-3">
                                <li className="flex gap-2 text-sm text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span>Instantly verify your RGHS eligibility.</span>
                                </li>
                                <li className="flex gap-2 text-sm text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span>Reduce medicine approval time from <strong>24h</strong> to <strong>1h</strong>.</span>
                                </li>
                                <li className="flex gap-2 text-sm text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span>Ensure 100% cashless billing at checkout.</span>
                                </li>
                            </ul>
                        </div>


                        <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-5 shadow-sm">
                            <h3 className="font-bold text-gray-900">Trust & Quality</h3>

                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                                    <ShieldCheck className="w-5 h-5 text-green-600" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-sm text-gray-900">Pharmacist Verified</span>
                                    <span className="text-xs text-gray-500">Every order reviewed by licensed pros.</span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                    <FileCheck2 className="w-5 h-5 text-blue-600" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-sm text-gray-900">RGHS Authorized Partner</span>
                                    <span className="text-xs text-gray-500">Official digital medicine partner.</span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0">
                                    <Lock className="w-5 h-5 text-purple-600" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-sm text-gray-900">Secure Health Vault</span>
                                    <span className="text-xs text-gray-500">Data encrypted with 256-bit SSL.</span>
                                </div>
                            </div>
                        </div>


                        <div className="bg-[#0f172a] rounded-xl p-6 relative overflow-hidden text-white shadow-lg">
                            <div className="absolute right-[-10px] bottom-[-10px] opacity-10">
                                <Phone className="w-24 h-24" />
                            </div>
                            <h3 className="text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">Need Help?</h3>
                            <p className="text-sm text-gray-300 mb-5 max-w-[80%] z-10 relative">Talk to our medical expert now</p>
                            <button className="w-full bg-white text-gray-900 rounded-lg px-4 py-3 font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors z-10 relative">
                                <Phone className="w-4 h-4" />
                                Call 1800-SOMACY
                            </button>
                        </div>

                    </div>
                </div>
            </main>


            <div className="w-full bg-white border-t border-gray-200 px-6 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                    <Shield className="w-5 h-5" />
                    Your medical data is safe with us.
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
                        Save as Draft
                    </button>
                    <button
                        onClick={() => navigate("/PReview")}
                        className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-sm">
                        Proceed to Review
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default UploadRghs