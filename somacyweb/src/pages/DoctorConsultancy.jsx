import { Search, MapPin, Star, Zap } from "lucide-react";
import { useState } from "react";
import logo from "../Assets/logo.png";
import Pagination from "../Component/Pagination";
import { useNavigate } from "react-router-dom";

const InstantConsultationBanner = () => (
  <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 flex items-center justify-between text-white shadow">
    <div className="flex items-center gap-4">
      <div className="bg-white/20 p-4 rounded-full">
        <Zap size={24} />
      </div>
      <div>
        <h2 className="text-lg font-semibold">Need care right now?</h2>
        <p className="text-sm text-blue-100">
          Connect with an available General Physician in under 5 minutes.
        </p>
      </div>
    </div>

    <button className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50">
      Start Instant Consultation
    </button>
  </div>
);

const FilterSidebar = () => {
  const [rghsOnly, setRghsOnly] = useState(true);
  const [consultType, setConsultType] = useState("All");
  return (
    <aside className="w-72 flex-shrink-0 space-y-6">
      <div className="bg-white border rounded-xl p-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-sm">RGHS Specialist</h3>
          <p className="text-xs text-gray-500">
            Only show doctors empaneled under Rajasthan Govt Health Scheme.
          </p>
        </div>
        <button
          onClick={() => setRghsOnly(!rghsOnly)}
          className={`w-11 h-6 flex-shrink-0 flex items-center rounded-full p-0.5 transition-colors duration-200 ${rghsOnly ? "bg-blue-600" : "bg-gray-300"
            }`}
        >
          <div
            className={`bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-200 ${rghsOnly ? "translate-x-5" : "translate-x-0"
              }`}
          ></div>
        </button>
      </div>

      <div className="bg-white border rounded-xl p-5">
        <div className="flex justify-between mb-4">
          <h3 className="font-semibold">Filters</h3>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-semibold text-gray-500 mb-3">
            SPECIALIZATION
          </h4>

          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              Cardiology
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              General Physician
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Pediatrics
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Orthopedics
            </label>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-semibold text-gray-500 mb-3">
            EXPERIENCE
          </h4>

          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="radio" name="exp" />
              5+ Years
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="exp" />
              10+ Years
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="exp" />
              20+ Years
            </label>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-500 mb-3">
            CONSULTATION TYPE
          </h4>

          <div className="flex gap-2">
            {["All", "Video", "In-Clinic"].map((type) => (
              <button
                key={type}
                onClick={() => setConsultType(type)}
                className={`px-3 py-1 rounded-full text-sm ${consultType === type
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

const DoctorList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const doctors = [
    {
      name: "Dr. Sarah D'Souza",
      specialization: "Senior Cardiologist, MD",
      rating: "4.9 (1.2k reviews)",
      experience: 18,
      location: "City Heart Center, Mansarovar",
      tags: ["HEART SURGERY", "ANGIOPLASTY"],
      image: logo,
      status: "Online",
      fee: "0",
    },
    {
      name: "Dr. Rajesh Kumar",
      specialization: "Consultant Cardiologist",
      rating: "4.7 (840 reviews)",
      experience: 12,
      location: "Jaipur Medical College & Hospital",
      tags: ["ECG TESTING", "HEART HEALTH"],
      image: logo,
      status: "Online",
      fee: "100",
    },
    {
      name: "Dr. Sidesh Saini",
      specialization: "Consultant Cardiologist",
      rating: "4.2 (840 reviews)",
      experience: 15,
      location: "AIMS Delhi",
      tags: ["ECG TESTING", "HEART HEALTH"],
      image: logo,
      status: "Online",
      fee: "100",
    },
    {
      name: "Dr. Virat Kohli",
      specialization: "Consultant Cardiologist",
      rating: "4.7 (840 reviews)",
      experience: 24,
      location: "AIMS Mumbai",
      tags: ["ECG TESTING", "HEART HEALTH"],
      image: logo,
      status: "Online",
      fee: "100",
    },
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDoctors = doctors.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className="space-y-6">
        {paginatedDoctors.map((doc, i) => (
          <DoctorCard doctor={doc} key={i} />
        ))}
      </div>
      <Pagination
        totalItems={doctors.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white border rounded-xl p-6 flex justify-between items-center shadow-sm">
      <div className="flex gap-5">
        <img src={doctor.image} className="w-24 h-24 rounded-xl object-cover" />

        <div>
          <h3 className="text-lg font-semibold">{doctor.name}</h3>
          <p className="text-blue-600 text-sm font-medium">
            {doctor.specialization}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
            <div className="flex items-center gap-1">
              <Star size={14} className="text-yellow-500" />
              {doctor.rating}
            </div>

            <span>{doctor.experience} Years Exp</span>
          </div>

          <div className="flex gap-2 mt-3">
            {doctor.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-500 mt-3">
            <MapPin size={14} />
            {doctor.location}
          </div>

          <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
            {doctor.status}
          </span>
        </div>
      </div>

      <div className="text-right flex flex-col items-end space-y-3">
        <div>
          <p className="text-xs text-gray-500">Consultation Fee</p>
          <p className="text-green-600 font-bold text-xl">₹{doctor.fee}</p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium w-full hover:bg-blue-800">
          Book Appointment
        </button>

        <button
          onClick={() => navigate("/doctor-profile")}
          className="border px-5 py-2 rounded-lg font-medium w-full"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default function DoctorsPage() {
  return (
    <div className=" max-w-full mx-auto bg-gray-50 min-h-screen p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Book a Doctor Consultation</h1>

          <p className="text-gray-500 text-sm">
            Find and book appointments with top-rated specialists or RGHS
            empanenled doctors.
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />

          <input
            className="border rounded-lg pl-10 pr-4 py-2 w-96"
            placeholder="Search Specialty, Doctor, or Hospital..."
          />
        </div>
      </div>

      <InstantConsultationBanner />

      <div className="flex gap-8 mt-8">
        <FilterSidebar />

        <div className="flex-1">
          <DoctorList />
        </div>
      </div>
    </div>
  );
}
