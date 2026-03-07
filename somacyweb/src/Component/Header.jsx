import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";

const Header = () => {
  const [mode, setMode] = useState("RGHS");
  const [activeTab, setActiveTab] = useState("Medicines");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false);

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
    <>
      <header className="w-full bg-[#f5f7fa] border-b border-gray-200 px-6 py-3 flex items-center gap-6 flex-nowrap">

        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Somacy Logo" className="w-9 h-9 object-contain" />
          <div className="leading-tight">
            <h1 className="text-base font-bold text-blue-600">Somacy</h1>
            <p className="text-[10px] text-gray-400 tracking-wider">
              PREMIUM CARE
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-[500px] hidden sm:block">
          <div className="bg-gray-200 rounded-full px-4 py-1.5 flex items-center">
            <Search className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search RGHS medicines, specialists, or lab tests"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
        </div>

        {/* Mode Switch */}
        <div className="flex items-center bg-gray-200 rounded-full p-1 text-sm shrink-0">
          <p className="px-2 text-gray-600 font-medium hidden sm:block">
            Switch Mode :
          </p>

          <button
            onClick={() => setMode("RGHS")}
            className={`px-3 py-1 rounded-full ${mode === "RGHS" ? "bg-blue-600 text-white" : "text-gray-600"
              }`}
          >
            RGHS
          </button>

          <button
            onClick={() => setMode("Retail")}
            className={`px-3 py-1 rounded-full ${mode === "Retail" ? "bg-blue-600 text-white" : "text-gray-600"
              }`}
          >
            Retail
          </button>
        </div>

        {/* Navigation (Desktop Only) */}
        <div className="hidden min-[1115px]:flex items-center gap-5 text-sm whitespace-nowrap shrink-0">
          <button onClick={() => handleClick("Medicines")}>Medicines</button>
          <button onClick={() => handleClick("Lab Tests")}>Lab Tests</button>
          <button onClick={() => handleClick("HelpCenter")}>Help Center</button>
          <button onClick={() => handleClick("MyOrder")}>MyOrder</button>
          <button onClick={() => handleClick("DoctorConsultancy")}>
            Doctor's Consultancy
          </button>
        </div>

        {/* Cart */}
        <div
          className="relative cursor-pointer shrink-0"
          onClick={() => handleClick("Cart")}
        >
          <ShoppingCart className="w-5 h-5 text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
            1
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="min-[1115px]:hidden cursor-pointer shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        {/* Sign In */}
        <button
          onClick={() => handleClick("Signup")}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-full shrink-0 hidden min-[1115px]:block"
        >
          Sign In
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="min-[1115px]:hidden bg-[#f5f7fa] border-b border-gray-200 px-6 py-4 flex flex-col gap-4 text-sm">
          <button onClick={() => handleClick("Medicines")}>Medicines</button>
          <button onClick={() => handleClick("Lab Tests")}>Lab Tests</button>
          <button onClick={() => handleClick("HelpCenter")}>Help Center</button>
          <button onClick={() => handleClick("MyOrder")}>MyOrder</button>
          <button onClick={() => handleClick("DoctorConsultancy")}>
            Doctor's Consultancy
          </button>

          <button
            onClick={() => handleClick("Signup")}
            className="bg-blue-600 text-white py-2 rounded-full"
          >
            Sign In
          </button>
        </div>
      )}
    </>
  );
};

export default Header;