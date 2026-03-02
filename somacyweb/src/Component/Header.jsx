import { ShoppingCart, Shield, Search } from "lucide-react"
import { useState } from "react"

const Header = () => {
  const [mode, setMode] = useState("RGHS")
  const [activeTab, setActiveTab] = useState("Medicines")

  return (

    <header className="w-full border-b border-gray-200 px-4 md:px-8 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-y-4">

      <div className="flex items-center gap-2 md:gap-3 shrink-0">
        <div className="w-8 h-8 md:w-9 md:h-9 bg-blue-600 rounded-lg flex items-center justify-center">
          <Shield className="text-white w-4 h-4" />
        </div>
        <div className="leading-tight">
          <h1 className="text-sm md:text-base font-semibold text-blue-600">Somacy</h1>
          <p className="text-[9px] md:text-[10px] text-gray-400 tracking-wider">
            PREMIUM CARE
          </p>
        </div>
      </div>

      <div className="w-full md:w-[460px] order-last md:order-none mx-auto md:ml-10">
        <div className="bg-white md:bg-gray-200 rounded-full px-4 py-1.5 flex items-center border border-gray-200 md:border-transparent">
          <Search className="w-4 h-4 m-2 text-gray-500" />
          <input
            type="text"
            placeholder="Search RGHS medicines, specialists, or lab tests"
            className="bg-transparent outline-none w-full text-xs md:text-sm placeholder:text-gray-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-8 shrink-0">

        <div className="flex items-center bg-gray-200 rounded-full p-0.5 md:p-1 text-[10px] md:text-sm">
          <p className="px-1.5 md:px-2 text-gray-600 font-medium hidden sm:block">Switch Mode : </p>
          <button
            onClick={() => setMode("RGHS")}
            className={`px-2 py-1 md:px-3 md:py-1 rounded-full transition ${mode === "RGHS"
              ? "bg-blue-600 text-white"
              : "text-gray-600"
              }`}
          >
            RGHS
          </button>
          <button
            onClick={() => setMode("Retail")}
            className={`px-2 py-1 md:px-3 md:py-1 rounded-full transition ${mode === "Retail"
              ? "bg-blue-600 text-white"
              : "text-gray-600"
              }`}
          >
            Retail
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-sm">
          <button
            onClick={() => setActiveTab("Medicines")}
            className={`font-medium ${activeTab === "Medicines"
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "text-gray-600"
              }`}
          >
            Medicines
          </button>

          <button
            onClick={() => setActiveTab("Lab Tests")}
            className={`font-medium ${activeTab === "Lab Tests"
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "text-gray-600"
              }`}
          >
            Lab Tests
          </button>
        </div>

        <div className="relative cursor-pointer mr-1 md:mr-0">
          <ShoppingCart className="w-5 h-5 text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
            1
          </span>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm px-3 py-1.5 md:px-4 rounded-full transition">
          Sign In
        </button>

      </div>

    </header>
  )
}

export default Header



























