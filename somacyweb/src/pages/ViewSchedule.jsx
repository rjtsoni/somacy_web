import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CalendarDays, Clock } from "lucide-react";

export default function ViewSchedule() {
  const [date, setDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState("");

  const slots = {
    Morning: ["09:30 AM", "10:00 AM", "10:30 AM"],
    Afternoon: ["12:00 PM", "12:30 PM"],
    Evening: ["05:00 PM", "05:30 PM"],
  };

  const bookedSlots = ["10:00 AM", "05:30 PM"];

  const handleBook = () => {
    if (!selectedSlot) {
      alert("Please select a slot");
      return;
    }

    alert(`Appointment booked on ${date.toDateString()} at ${selectedSlot}`);
  };

  return (
    <div className="max-w-full mx-auto p-6">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-6">Doctor Schedule</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <CalendarDays size={18} className="text-blue-600" />
            <p className="font-semibold text-gray-700">Select Date</p>
          </div>

          <Calendar
            value={date}
            onChange={setDate}
            minDate={new Date()}
            prev2Label={null}
            next2Label={null}
            className="w-full border-none"
          />
        </div>

        {/* Slots */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-5">Available Slots</h3>

          {Object.keys(slots).map((period) => (
            <div key={period} className="mb-6">
              <p className="text-gray-500 text-sm mb-3">{period}</p>

              <div className="flex flex-wrap gap-3">
                {slots[period].map((slot) => {
                  const isBooked = bookedSlots.includes(slot);

                  return (
                    <button
                      key={slot}
                      disabled={isBooked}
                      onClick={() => setSelectedSlot(slot)}
                      className={`px-4 py-2 rounded-lg border text-sm transition

                        ${isBooked
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : selectedSlot === slot
                            ? "bg-blue-600 text-white border-blue-600"
                            : "hover:bg-blue-50"
                        }
                      `}
                    >
                      <Clock size={14} className="inline mr-1" />
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Selected Slot */}
          {selectedSlot && (
            <div className="mt-4 text-sm text-gray-600">
              Selected:
              <span className="font-semibold ml-2">
                {date.toDateString()} — {selectedSlot}
              </span>
            </div>
          )}

          {/* Book Button */}
          <button
            onClick={handleBook}
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
