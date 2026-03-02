import { useState } from "react"
import Table from "../Component/Table"
import { Pill, Merge, ShoppingCart } from "lucide-react"

const FilterSidebar = ({ price, setPrice }) => (
  <aside className="w-full lg:w-64 flex-shrink-0">
    <div className="bg-white rounded-xl p-6 border border-[#e7ebf3] sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-lg">Filters</h3>

      </div>

      <div className="space-y-8">
        <div>
          <p className="font-bold uppercase text-xs tracking-wider mb-4">
            Dosage Form
          </p>
          <label className="flex items-center gap-3 text-sm mb-2">
            <input type="radio" name="dosage" defaultChecked />
            Tablets
          </label>
          <label className="flex items-center gap-3 text-sm">
            <input type="radio" name="dosage" />
            Syrup
          </label>
        </div>



        <div>
          <p className="font-bold uppercase text-xs tracking-wider mb-4">
            Price Range
          </p>
          <input
            type="range"
            min="0"
            max="100"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full accent-[#135bec]"
          />
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>₹0</span>
            <span>₹{price}+</span>
          </div>
        </div>
      </div>


    </div>
  </aside>
)

const BrandCard = () => (
  <div className="w-80 p-4 bg-white border-2 border-[#135bec] rounded-xl relative overflow-hidden">
    <div className="flex items-start gap-4">
      <div className="w-16 h-16 flex-shrink-0 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center">
        <Pill className="w-7 h-7 text-[#135bec]" />
      </div>
      <div>
        <h3 className="font-bold text-lg">Panadol 500mg</h3>
        <p className="text-xs text-[#135bec] font-bold">
          Paracetamol (500mg)
        </p>
        <p className="text-xs text-gray-500 mt-1">
          GlaxoSmithKline
        </p>
        <div className="mt-2">
          <span className="text-xl font-black">₹42.00</span>
          <span className="text-xs text-gray-500"> / 10 tablets</span>
        </div>
      </div>
    </div>
  </div>
)


const MedicineCard = ({ name, company, price, mrp, savePercent }) => (
  <div className="bg-white rounded-xl p-5 border border-[#e7ebf3] hover:shadow-lg transition">
    <div className="flex items-start gap-4">

      <div className="w-20 h-20 flex-shrink-0 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center">
        <Pill className="w-8 h-8 text-[#135bec]" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <h3 className="font-bold text-xl">{name}</h3>
        </div>
        <p className="text-sm text-[#135bec] font-bold">Paracetamol (500mg)</p>
        <p className="text-sm text-gray-500">{company}</p>

        <div className="flex items-center gap-3 mt-2">
          <span className="text-2xl font-black text-gray-900">
            {price}
          </span>
          {savePercent && (
            <span className="text-xs font-bold text-green-600 border border-green-200 bg-green-50 rounded px-2 py-0.5">
              Save {savePercent}
            </span>
          )}
        </div>
        {mrp && (
          <p className="text-xs text-gray-400 mt-0.5">
            MRP: <span className="line-through">₹{mrp}</span> / 10 tablets
          </p>
        )}
        {!mrp && (
          <p className="text-xs text-gray-400 mt-0.5">/ 10 tablets</p>
        )}
      </div>

      <div className="flex flex-col gap-2 flex-shrink-0">
        <button
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm bg-[#135bec] text-white hover:bg-blue-700"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
        <button className="px-6 py-2.5 rounded-lg font-bold text-sm border border-gray-300 text-gray-700 hover:bg-gray-50">
          View Details
        </button>
      </div>
    </div>
  </div>
)

const MedicineComparison = () => {
  const [price, setPrice] = useState(100)

  const columns = [
    { header: "Medicine", accessor: "name" },
    { header: "Status", accessor: "status" },
    {
      header: "Retail Price",
      accessor: "retail",
      render: (row) => (
        <div className="font-medium">
          {row.retail}
        </div>
      )
    }
  ]

  const data = [
    {
      id: 1,
      name: "Panadol 500mg (Branded)",
      status: "Branded",
      retail: "₹42.00"
    },
    {
      id: 2,
      name: "Paracip 500 (Generic)",
      status: "Verified Generic",
      retail: "₹9.50"
    },
    {
      id: 3,
      name: "P-500 (Generic)",
      status: "Verified Generic",
      retail: "₹12.00"
    }
  ]

  return (
    <div className="bg-[#f6f6f8] min-h-screen text-[#0d121b]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-10 py-6">

        <div className="mb-8">
          <h1 className="text-3xl font-black mb-2">
            Generic alternatives for Panadol 500mg
          </h1>
          <p className="text-gray-500 text-lg">
            Save up to 80% with verified generic alternatives.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar price={price} setPrice={setPrice} />

          <div className="flex-1 space-y-6">
            <div className="flex flex-wrap gap-4">
              <BrandCard />
            </div>


            <MedicineCard
              name="Paracip 500"
              company="Cipla Ltd"
              price="₹9.50"
              mrp="81"
              savePercent="77%"
            />

            <MedicineCard
              name="P-500"
              company="Apex Laboratories"
              price="₹12.00"
              mrp="75.00"
              savePercent="71%"
            />

            <MedicineCard
              name="Calpol 500"
              company="GSK Pharmaceuticals"
              price="₹31.00"
              mrp="42"
              savePercent="26%"
            />

            <div className="mt-12 overflow-hidden rounded-xl border border-[#e7ebf3] bg-white">
              <Table
                title="Price Comparison Summary"
                columns={columns}
                data={data}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicineComparison