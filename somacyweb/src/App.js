import "./App.css";

import Footer from "./Component/Footer";
import Header from "./Component/Header";
import RghsInfo from "./pages/RghsInfo";
import Homepage from "./pages/homepage";
import CartPage from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
import MyOrder from "./pages/MyOrder";
import MedicineComparison from "./pages/MedicineComaprison";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/myorder" element={<MyOrder />} />
          <Route path="/lab-test" element={<RghsInfo />} />
                    <Route path="/medicine-search" element={<MedicineComparison />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
