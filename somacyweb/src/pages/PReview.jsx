import React from 'react'
import { CheckCircle2, Zap, CreditCard, Truck, Phone, Info, ShieldCheck } from 'lucide-react'
import pharmacistImg from '../Assets/pharmacist_review.png'

const PReview = () => {
    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans w-full selection:bg-blue-100 overflow-x-hidden">
            <header className="bg-white sticky top-0 z-50 border-b border-gray-100 px-4 md:px-12 py-2.5 flex items-center justify-end">

                <div className="hidden md:flex items-center gap-8 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <button className="hover:text-blue-600 transition-colors">Dashboard</button>
                    <button className="hover:text-blue-600 transition-colors">Orders</button>
                    <button className="hover:text-blue-600 transition-colors">Help</button>
                    <div className="w-8 h-8 rounded-full border border-slate-100 overflow-hidden cursor-pointer shadow-sm">
                        <img src="https://ui-avatars.com/api/?name=User&background=f1f5f9&color=64748b&bold=true" alt="User" />
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-8 py-2 md:py-4">
                <div className="flex flex-col gap-4">
                    <div className="bg-white border border-slate-200/60 rounded-[1.5rem] p-4 md:p-5 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center gap-4">
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[8px] font-bold uppercase tracking-widest mb-2 border border-blue-100">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                                Verification Active
                            </div>
                            <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">
                                Your prescription is <span className="text-blue-600">being reviewed</span>
                            </h1>
                            <p className="text-slate-500 text-[14px] md:text-[16px] leading-relaxed max-w-xl font-medium">
                                Our certified pharmacist is currently reviewing your <span className="font-bold text-slate-700">RGHS prescription</span> for compliance and safety.
                            </p>
                        </div>
                        <div className="w-full max-w-[160px] flex-shrink-0">
                            <img
                                src={pharmacistImg}
                                alt="Pharmacist Reviewing"
                                className="w-full h-auto rounded-2xl shadow-sm border border-slate-100"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                        <div className="lg:col-span-8 bg-white rounded-[1.5rem] p-5 md:p-6 pb-2 shadow-sm border border-slate-200/60">
                            <h3 className="text-[13px] font-black text-slate-800 mb-4 flex items-center gap-2 uppercase tracking-widest">
                                Activity Log
                                <span className="text-[8px] font-black bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded-full border border-emerald-100">Live</span>
                            </h3>

                            <div className="space-y-5 relative ml-1">
                                <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-100" />

                                {[
                                    { title: "Prescription Received", time: "Completed at 10:00 AM" },
                                    { title: "AI Initial Scan Complete", time: "Completed at 10:02 AM" },
                                    { title: "Pharmacist Reviewing", time: "Completed at 10:03 AM" },
                                    { title: "Order Authorized", time: "Ready for Checkout" }
                                ].map((step, idx, arr) => (
                                    <div key={idx} className={`flex gap-6 ${idx !== arr.length - 1 ? 'pb-5' : ''} relative group`}>
                                        <div className="z-10 bg-white p-0.5">
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm ring-1 bg-emerald-500 ring-emerald-100">
                                                <CheckCircle2 className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                        <div className="pt-0.5">
                                            <h4 className="text-[15px] font-bold text-slate-800">{step.title}</h4>
                                            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wide mt-0.5">{step.time}</p>
                                        </div>
                                        {idx !== arr.length - 1 && (
                                            <div className="absolute left-4 top-8 w-px h-full bg-emerald-500" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-4 flex flex-col gap-4">
                            <div className="bg-blue-600 rounded-[1.5rem] p-5 text-white shadow-lg shadow-blue-200/50 relative overflow-hidden">
                                <h4 className="text-blue-100 text-[10px] font-black uppercase tracking-[0.2em] mb-1 opacity-80">Estimated Wait</h4>
                                <div className="text-3xl font-black tracking-tight">5-10 <span className="text-xs font-bold opacity-70 uppercase">min</span></div>
                                <p className="text-[11px] text-blue-100 mt-1 font-medium opacity-90 leading-normal">
                                    Approved notifications are sent instantly.
                                </p>
                            </div>

                            <div className="bg-white border border-slate-200/60 rounded-[1.5rem] p-5 shadow-sm">
                                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                                    <Info className="w-4 h-4 text-blue-600" />
                                </div>
                                <h4 className="text-[13px] font-bold text-slate-800 mb-1 tracking-tight">Quick Tip</h4>
                                <p className="text-[12px] text-slate-500 leading-relaxed font-medium">
                                    Ensure RGHS card details match the prescription to avoid any delays.
                                </p>
                            </div>

                            <div className="bg-slate-900 rounded-[1.5rem] p-5 text-white shadow-lg relative overflow-hidden group">
                                <h3 className="text-blue-400 font-black text-[9px] uppercase tracking-widest mb-1.5">Need Help?</h3>
                                <p className="text-[13px] font-bold text-slate-200 mb-4 z-10 relative">Talk to our medical expert</p>
                                <button className="w-full bg-white text-slate-900 rounded-xl py-2.5 font-black text-[10px] flex items-center justify-center gap-2 hover:bg-slate-100 transition-all z-10 relative shadow-md active:scale-95 uppercase tracking-wider">
                                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                                    CALL 1800-SOMACY
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-1 text-center">
                        <h2 className="text-[14px] font-black text-slate-900 mb-3 tracking-tight uppercase tracking-[0.1em]">What happens next?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {[
                                { icon: <Zap className="w-3.5 h-3.5" />, title: "Secure Checkout", desc: "Cart will be unlocked.", color: "bg-blue-50 text-blue-600" },
                                { icon: <CreditCard className="w-3.5 h-3.5" />, title: "Payment", desc: "Choose RGHS method.", color: "bg-indigo-50 text-indigo-600" },
                                { icon: <Truck className="w-3.5 h-3.5" />, title: "Home Delivery", desc: "Dispatch to your door.", color: "bg-emerald-50 text-emerald-600" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white rounded-[1.5rem] py-10 px-8 border border-slate-200/60 shadow-sm flex items-center gap-6 text-left hover:border-blue-200 transition-colors">
                                    <div className={`w-14 h-14 flex-shrink-0 ${item.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                                        {React.cloneElement(item.icon, { className: "w-7 h-7" })}
                                    </div>
                                    <div>
                                        <h4 className="text-[16px] font-black text-slate-900 leading-tight mb-1">{item.title}</h4>
                                        <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PReview
