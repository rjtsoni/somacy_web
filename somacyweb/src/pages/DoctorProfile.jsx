import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  CalendarDays,
  GraduationCap,
  Info,
  MessageSquare,
  PlusSquare,
  Star,
  Trophy,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DoctorProfile = () => {
  const [date, setDate] = useState(new Date());
  const [openCal, setOpenCal] = useState(false);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const formatDate = (d) =>
    d.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });

  const handleChange = (value) => {
    setDate(value);
    setOpenCal(false);
  };
  const bookedSlots = [
    {
      date: "2026-03-08",
      time: "10:30 AM - 11:00 AM",
    },
    {
      date: "2026-03-09",
      time: "12:00 PM - 12:30 PM",
    },
  ];

  return (
    <div className=" bg-gray-50 min-h-screen">
      {/* Container */}
      <div className="max-w-full mx-auto pl-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-6">
            {/* Doctor Header */}
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row gap-6">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="doctor"
                className="w-40 h-40 rounded-xl object-cover"
              />

              <div className="flex-1">
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                  RGHS EMPANELED
                </span>

                <h1 className="text-2xl font-bold mt-2">Dr. Smith Johnson</h1>

                <p className="text-blue-600 font-semibold">
                  Senior Cardiologist
                </p>

                <p className="text-gray-500 text-sm">
                  MBBS, MD (Cardiology), FACC (USA)
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 mt-4 text-sm">
                  <div>
                    <p className="text-gray-400">Experience</p>
                    <p className="font-semibold text-lg">15+ Years</p>
                  </div>

                  <div>
                    <p className="text-gray-400">Consultations</p>
                    <p className="font-semibold text-lg">10,000+</p>
                  </div>

                  <div>
                    <p className="text-gray-400">Satisfaction</p>
                    <p className="font-semibold text-lg text-yellow-500">
                      4.9 ★
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-3">About</h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                Dr. Smith Johnson is a highly distinguished Senior Cardiologist
                with over 15 years of experience in interventional cardiology.
                He specializes in complex coronary interventions, heart failure
                management, and preventive cardiology.
              </p>
            </div>

            {/* Specializations */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <PlusSquare className="text-blue-600 w-5 h-5" />
                <h2 className="text-lg font-semibold">Specializations</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "Interventional Cardiology",
                  "Heart Valve Disease",
                  "Electrophysiology",
                  "Preventive Cardiology",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-gray-100 border rounded-full text-sm text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap className="text-blue-600 w-5 h-5" />
                <h2 className="text-lg font-semibold">Education & Training</h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <GraduationCap className="text-gray-400 w-5 h-5 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      MD in Cardiology
                    </p>
                    <p className="text-gray-500 text-sm">
                      All India Institute of Medical Sciences (AIIMS)
                    </p>
                    <p className="text-gray-400 text-sm">2005 - 2008</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <GraduationCap className="text-gray-400 w-5 h-5 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Fellowship in Interventional Cardiology
                    </p>
                    <p className="text-gray-500 text-sm">
                      Mayo Clinic, Rochester, MN, USA
                    </p>
                    <p className="text-gray-400 text-sm">2009 - 2011</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Award */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Trophy className="text-blue-600 w-5 h-5" />
                <h2 className="text-lg font-semibold">Awards & Recognition</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3 border rounded-xl p-4 bg-gray-50">
                  <Trophy className="text-orange-500 w-5 h-5 mt-1" />

                  <div>
                    <p className="font-semibold text-gray-900">
                      Best Cardiologist of the Year
                    </p>
                    <p className="text-gray-500 text-sm">
                      Medical Excellence Awards 2022
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 border rounded-xl p-4 bg-gray-50">
                  <Trophy className="text-orange-500 w-5 h-5 mt-1" />

                  <div>
                    <p className="font-semibold text-gray-900">
                      Clinical Excellence Award
                    </p>
                    <p className="text-gray-500 text-sm">
                      Healthcare Summit 2020
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <MessageSquare className="text-blue-600 w-5 h-5" />
                  <h2 className="text-lg font-semibold">
                    Patient Reviews (124)
                  </h2>
                </div>

                <button className="text-blue-600 text-sm font-medium">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {/* REVIEW CARD */}
                <div className="border rounded-xl p-5 bg-white">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-semibold text-gray-600">
                        JD
                      </div>

                      <div>
                        <p className="font-semibold">John Doe</p>
                        <p className="text-gray-400 text-xs">
                          Verified Patient • 2 weeks ago
                        </p>
                      </div>
                    </div>

                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mt-3 italic">
                    "Dr. Johnson is extremely professional and explains
                    everything clearly. The RGHS cashless process was seamless."
                  </p>
                </div>

                {/* REVIEW CARD */}
                <div className="border rounded-xl p-5 bg-white">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-semibold text-gray-600">
                        SM
                      </div>

                      <div>
                        <p className="font-semibold">Sarah Miller</p>
                        <p className="text-gray-400 text-xs">
                          Verified Patient • 1 month ago
                        </p>
                      </div>
                    </div>

                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mt-3 italic">
                    "Very patient and calm. Helped me manage my blood pressure
                    effectively with minimal medication."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT BOOKING CARD */}
          <div>
            <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm relative mx-auto">
              <h3 className="font-semibold text-lg mb-4">Book Consultation</h3>

              {/* Retail Fee */}
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg text-sm mb-3">
                <span className="text-gray-500">Retail Fee</span>
                <span className="font-semibold text-gray-900">₹800</span>
              </div>

              {/* Benefit */}
              <div className="flex justify-between items-center bg-green-50 p-4 rounded-xl mb-5">
                <div>
                  <p className="text-green-600 text-xs font-semibold tracking-wide">
                    BENEFICIARY BENEFIT
                  </p>
                  <p className="text-gray-800 font-medium">RGHS Cashless</p>
                </div>

                <span className="text-green-600 font-bold text-lg">₹0</span>
              </div>

              <div className="border-t pt-4">
                <p className="text-xs tracking-widest text-gray-400 mb-2">
                  AVAILABLE NEXT SLOT
                </p>

                {/* Date Selector */}
                <div
                  onClick={() => setOpenCal(!openCal)}
                  className="border border-blue-200 bg-blue-50 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-blue-100 transition"
                >
                  <div className="flex gap-3 items-center">
                    <CalendarDays className="text-blue-600 w-5 h-5" />

                    <div>
                      <p className="font-medium text-gray-800">
                        {formatDate(date)}
                      </p>

                      <p className="text-xs text-gray-500">
                        10:30 AM - 11:00 AM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Calendar Popup */}
                {openCal && (
                  <div className="absolute z-30 mt-3 bg-white shadow-lg rounded-xl p-2">
                    <Calendar
                      onChange={handleChange}
                      value={date}
                      minDate={new Date()}
                    />
                  </div>
                )}
              </div>

              {/* Buttons */}
              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow">
                Book Appointment
              </button>

              <button
                onClick={() => setOpenModal(true)}
                className="w-full mt-3 border py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition"
              >
                View Schedule
              </button>

              {/* Info */}
              <div className="flex gap-2 items-start bg-blue-50 p-3 rounded-xl mt-4 text-sm text-blue-600">
                <Info className="w-4 h-4 mt-1" />
                <p>
                  Video consultation and in-clinic visits are both supported by
                  this doctor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[400px] rounded-xl shadow-lg p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Booked Schedule</h3>

              <button
                onClick={() => setOpenModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="space-y-3 max-h-[300px] overflow-y-auto">
              {bookedSlots.length === 0 ? (
                <p className="text-gray-400 text-center py-6">
                  No record found
                </p>
              ) : (
                bookedSlots.map((slot, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-3 flex justify-between"
                  >
                    <span className="text-gray-700">{slot.date}</span>

                    <span className="text-blue-600 font-medium">
                      {slot.time}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorProfile;
