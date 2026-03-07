import { ShoppingCart, Shield, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png"


const Header = () => {
  const [mode, setMode] = useState("RGHS");
  const [activeTab, setActiveTab] = useState("Medicines");
  const navigate = useNavigate();

  const handleClick = (tab) => {
    setActiveTab(tab);

    switch (tab) {
      case "Medicines":
        navigate("/");
        break;

      case "Lab Tests":
        navigate("/lab-test");
        break;

      case "MyOrder":
        navigate("/myorder");
        break;

      case "ProductCart":
        navigate("/productcart");
        break;

      case "DoctorConsultancy":
        navigate("/doctorconsultancy");
        break;

      case "Cart":
        navigate("/cart");
        break;

      case "HelpCenter":
        navigate("/help-center");
        break;

      case "Signup":
        navigate("/signup");
        break;

      default:
        break;
    }
  };

  return (
    <header className="w-full bg-[#f5f7fa] border-b border-gray-200 px-8 py-3 flex items-center">
      {/* Logo */}

      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Somacy Logo"
          className="w-9 h-9 object-contain"
        />
        <div className="leading-tight">
          <h1 className="text-base font-bold text-blue-600">Somacy</h1>
          <p className="text-[10px] text-gray-400 tracking-wider">
            PREMIUM CARE
          </p>
        </div>
      </div>
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => handleClick("Medicines")}
      >
      </div>

      {/* Search */}
      <div className="ml-10 w-[460px]">
        <div className="bg-gray-200 rounded-full px-4 py-1.5 flex items-center">
          <Search className="w-4 h-4 m-2 text-gray-500" />
          <input
            type="text"
            placeholder="Search RGHS medicines, specialists, or lab tests"
            className="bg-transparent outline-none w-full text-sm placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-8 ml-auto">
        {/* Mode Switch */}
        <div className="flex items-center bg-gray-200 rounded-full p-1 text-sm">
          <p className="px-2 text-sm text-gray-600 font-medium">
            Switch Mode :
          </p>

          <button
            onClick={() => setMode("RGHS")}
            className={`px-3 py-1 rounded-full transition ${mode === "RGHS" ? "bg-blue-600 text-white" : "text-gray-600"
              }`}
          >
            RGHS
          </button>

          <button
            onClick={() => setMode("Retail")}
            className={`px-3 py-1 rounded-full transition ${mode === "Retail" ? "bg-blue-600 text-white" : "text-gray-600"
              }`}
          >
            Retail
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <button
            onClick={() => handleClick("Medicines")}
            className={`font-medium ${activeTab === "Medicines"
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "text-gray-600"
              }`}
          >
            Medicines
          </button>

          <button
            onClick={() => handleClick("Lab Tests")}
            className={`font-medium ${activeTab === "Lab Tests"
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "text-gray-600"
              }`}
          >
            Lab Tests
          </button>
          <button
            onClick={() => handleClick("HelpCenter")}
            className={`font-medium ${activeTab === "HelpCenter"
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "text-gray-600"
              }`}
          >
            Help Center
          </button>

          <button
            onClick={() => handleClick("MyOrder")}
            className={`font-medium ${activeTab === "MyOrder"
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "text-gray-600"
              }`}
          >
            MyOrder
          </button>

          <button
            onClick={() => handleClick("DoctorConsultancy")}
            className={`font-medium ${activeTab === "DoctorConsultancy"
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "text-gray-600"
              }`}
          >
            Doctor's Consultancy
          </button>
        </div>

        {/* Cart */}
        <div
          className="relative cursor-pointer"
          onClick={() => handleClick("Cart")}
        >
          <ShoppingCart className="w-5 h-5 text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
            1
          </span>
        </div>

        {/* Sign In */}
        <button
          onClick={() => handleClick("Signup")}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-full transition"
        >
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
