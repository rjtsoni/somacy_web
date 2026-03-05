import { Search, Truck } from "lucide-react";
import Pagination from "../Component/Pagination";
import { useState } from "react";
import HelpDesk from "../Component/HelpDesk";
import { useNavigate } from "react-router-dom";

const MyOrder = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [orderType, setOrderType] = useState("All");
  const navigate = useNavigate();
  const itemsPerPage = 4;

  const orders = Array.from({ length: 22 }, (_, i) => ({
    id: i + 1,
    orderNo: `SOM-${1000 + i}`,
    date: "Oct 25, 2023",
    items: Math.floor(Math.random() * 5) + 1,
    status: i % 2 === 0 ? "In-Transit" : "Delivered",

    // Filtering fields
    type: i % 3 === 0 ? "Lab Tests" : "Medicine",
    mode: i % 2 === 0 ? "RGHS" : "Retail",
  }));

  //   const filteredOrders = orders.filter((order) => {
  //     if (orderType === "All") return true;
  //     if (orderType === "RGHS") return order.mode === "RGHS";
  //     if (orderType === "Medicine") return order.type === "Medicine";
  //     if (orderType === "Lab Tests") return order.type === "Lab Tests";
  //     return true;
  //   });
  const filteredOrders = orders.filter((order) => {
    switch (orderType) {
      case "All":
        return true;

      case "RGHS":
        return order.mode === "RGHS";

      case "Medicine":
        return order.type === "Medicine";

      case "Lab Tests":
        return order.type === "Lab Tests";

      default:
        return true;
    }
  });
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirst, indexOfLast);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          My Orders & Bookings
        </h1>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-8 flex flex-col lg:flex-row gap-4">
          <div className="flex items-center border rounded-lg px-3 py-2 flex-1">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search by Order ID or Medicine Name"
              className="ml-2 outline-none w-full text-sm"
            />
          </div>

          <select
            value={orderType}
            onChange={(e) => {
              setOrderType(e.target.value);
              setCurrentPage(1);
            }}
            className="border rounded-lg px-4 py-2 text-sm"
          >
            <option value="All">All</option>
            <option value="RGHS">RGHS</option>
            <option value="Medicine">Medicine</option>
            <option value="Lab Tests">Lab Tests</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {currentOrders.length === 0 && (
              <div className="bg-white p-6 rounded-xl shadow text-center text-gray-500">
                No orders found.
              </div>
            )}

            {currentOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
              >
                <div className="flex gap-5">
                  <div className="w-20 h-20 rounded-xl bg-gray-100 overflow-hidden">
                    <img
                      src={order.image}
                      alt="order"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">
                          Order #{order.orderNo}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          Placed on {order.date} • {order.items} Items
                        </p>

                        <p className="text-xs mt-1 text-gray-400">
                          Type: {order.type} | Mode: {order.mode}
                        </p>

                        <div className="mt-4">
                          <div className="h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-blue-600 rounded-full w-2/3"></div>
                          </div>

                          <p className="text-sm mt-3 flex items-center gap-2 text-gray-600">
                            <Truck size={16} className="text-blue-600" />
                            Expected by{" "}
                            <span className="font-medium">Today, 8:00 PM</span>
                          </p>
                        </div>
                      </div>

                      <span
                        className={`px-3 py-1 text-sm rounded-full ${
                          order.status === "In-Transit"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>

                    <div className="border-t mt-6 pt-4 flex justify-between items-center">
                      <div className="flex gap-6 text-sm text-gray-600">
                        <span className="cursor-pointer hover:text-blue-600">
                          View Details
                        </span>
                        <span className="cursor-pointer hover:text-blue-600">
                          Help
                        </span>
                      </div>

                      <button
                        onClick={() => navigate("/track-order")}
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                      >
                        Track Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 h-fit">
            <h4 className="font-semibold text-blue-700 mb-2">
              Need Assistance?
            </h4>

            <p className="text-sm text-gray-600 mb-4">
              Our healthcare experts are available 24/7.
            </p>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Chat Now
            </button>
          </div> */}
          <HelpDesk />
        </div>

        <Pagination
          totalItems={filteredOrders.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default MyOrder;
