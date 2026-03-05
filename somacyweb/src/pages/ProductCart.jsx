import { Pill, Truck } from "lucide-react"

const ProductCard = () => (
  <div className="bg-white border border-gray-200 rounded-xl p-6 flex gap-6 mt-5">
    <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
      <Pill size={60} className="text-gray-400" />
    </div>

    <div className="flex-1">
      <h1 className="text-2xl font-bold">Metformin 500mg Tablet</h1>
      <p className="text-gray-500 text-sm mb-4">Strip of 15 tablets</p>

      <div className="space-y-2 text-sm">
        <p>
          <span className="font-semibold text-gray-600">Salt:</span>{" "}
          <span className="text-blue-600">Metformin Hydrochloride (500mg)</span>
        </p>

        <p>
          <span className="font-semibold text-gray-600">Manufacturer:</span>{" "}
          Abbott Healthcare Ltd
        </p>

        <p>
          <span className="font-semibold text-gray-600">Packing:</span>{" "}
          Alu-Alu Blister Strip
        </p>
      </div>
    </div>
  </div>
)

const PriceCard = () => (
  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mt-5 ">

    <div className="flex items-center justify-between p-6">
      <h3 className="font-semibold text-lg">Pricing & Availability</h3>

      <span className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
        IN STOCK
      </span>
    </div>

    <div className="border-t border-gray-200 p-6 space-y-4">

      <div className="flex items-end justify-between">

        <div>
          <p className="text-xs text-gray-500">RETAIL PRICE</p>
          <p className="text-xs text-gray-400">Regular retail purchase</p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-400 line-through">MRP ₹150.00</p>

          <div className="flex items-center gap-2 justify-end">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
              17% OFF
            </span>

            <span className="text-2xl font-bold">₹125.00</span>
          </div>
        </div>

      </div>

      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium">
        Add to Cart
      </button>

    </div>

    <div className="border-t border-gray-200 p-5 flex gap-3 items-start text-sm text-gray-600">
      <Truck size={20} className="text-blue-500" />
      <p>
        Free delivery by <span className="font-medium">Tomorrow, 12:00 PM</span>
        <br />
        Available at 12 partner pharmacies near you
      </p>

    </div>

  </div>
)

const adviceData = [
  "Take this medicine with food to reduce the chance of an upset stomach.",
  "Monitor your blood sugar levels regularly as advised by your doctor.",
  "Lifestyle changes like low-fat diet and exercise help this medicine work better."
]

const ExpertAdviceCard = () => (
  <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">

    <div className="flex items-center gap-2 font-semibold text-gray-800">
      Expert Advice
    </div>

    <div className="space-y-4">
      {adviceData.map((item, index) => (
        <div key={index} className="flex gap-3 items-start">

          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-semibold">
            {index + 1}
          </div>

          <p className="text-sm text-gray-600">{item}</p>

        </div>
      ))}
    </div>

  </div>
)

const InfoCard = ({ title, text }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-6">
    <h3 className="font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{text}</p>
  </div>
)

const safetyData = [
  { title: "Alcohol", status: "Unsafe", color: "text-red-500", description: "Increases risk of lactic acidosis" },
  { title: "Pregnancy", status: "Safe if prescribed", color: "text-green-600", description: "Safe if prescribed by the doctor" },
  { title: "Driving", status: "Safe", color: "text-green-600", description: "Doesn't affect driving ability" },
  { title: "Kidney", status: "Consult doctor", color: "text-yellow-600", description: "Adjustment needed for kidney patients" }
]

const SafetyAdviceCard = () => (
  <div className="bg-white border border-gray-200 rounded-xl p-6">
    <h3 className="font-semibold mb-4">Safety Advice</h3>

    <div className="grid grid-cols-2 gap-4 text-sm ">
      {safetyData.map((item, index) => (
        <div key={index} className="border rounded-lg p-3 space-y-2">
          <p className="font-medium">{item.title}</p>
          <p className={`${item.color} text-xs font-bold`}>{item.status}</p>
          <p className="text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
)

const genericData = [
  { name: "Glycomet 500mg Tablet", price: "72.00", company: "USV PRIVATE LTD", save: "10% OFF", mrp: "100.00" },
  { name: "Exermet 500mg Tablet", price: "60.00", company: "CIPLA LTD", save: "15% OFF", mrp: "90.00" },
  { name: "Metsmall 500mg Tablet", price: "80.50", company: "DR REDDY'S LABS", save: "20% OFF", mrp: "115.00" },
  { name: "Obimet 500mg Tablet", price: "75.00", company: "ABBOT INDIA", save: "25% OFF", mrp: "125.00" }
]

const GenericCard = ({ name, price, company, save, mrp }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">

    <div className="flex items-start justify-between">
      <span className="text-xs bg-green-100 text-green-700 font-semibold px-2.5 py-1 rounded-md">{save}</span>
    </div>

    <div className="mt-4">
      <h4 className="font-bold text-base">{name}</h4>
      <p className="text-xs text-green-600 font-medium mt-1">{company}</p>
    </div>

    <div className="flex items-end justify-between mt-5">
      <div>
        <p className="text-xs text-gray-400 line-through">MRP ₹{mrp}</p>
        <p className="text-xl font-bold">₹{price}</p>
      </div>
      <button className="border border-blue-500 text-blue-600 font-semibold text-xs px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors">
        ADD
      </button>
    </div>

  </div>
)

const ProductCart = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full max-w-[1600px] mx-auto px-8">

        <div className="grid lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 space-y-6">

            <ProductCard />

            <InfoCard
              title="What it is used for ?"
              text="Metformin 500mg belongs to a class of medicines called biguanides. It is the firts-line treatment for adults with type-2 diabetes mellitus. It helps control blood sugar levels, reducing the risk of serious complications like kidney damage, blindness, nerve problems, and toss of limbs. Proper control of diabetes also reduces the risk of heart attck or stroke."

            />

            <InfoCard
              title="How it works ?"
              text="It works in three ways: first, it decreases the amount of glucose(sugar) made by your liver. Second, it decreases the amount of glucose your body absorbs from food. And third, it increases the sensitivity of your body's insulin receptors, helping your body use its own insulin mor effectively to clear sugar from the blood."
            />

            <SafetyAdviceCard />

          </div>

          <div className="space-y-6">
            <PriceCard />
            <ExpertAdviceCard />
          </div>

        </div>

        <div className="mt-10">
          <h2 className="font-semibold mb-4">Generic Alternatives</h2>

          <div className="grid md:grid-cols-4 gap-4">
            {genericData.map((item, index) => (
              <GenericCard
                key={index}
                name={item.name}
                price={item.price}
                company={item.company}
                save={item.save}
                mrp={item.mrp}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductCart