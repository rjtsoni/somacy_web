import "./App.css";

import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Homepage from "./pages/Homepage";
import CartPage from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
import MyOrder from "./pages/MyOrder";
import MedicineComparison from "./pages/MedicineComaprison";
import NotFound from "./pages/NotFound";
import LabTestScreen from "./pages/LabTestScreen";
import LabTestPage from "./pages/LabTestPage";
import SlotBooking from "./pages/SlotBooking";
import UploadRghs from "./pages/UploadRghs";
import PReview from "./pages/PReview";
function App() {
  return (
    // <div className="min-h-screen flex flex-col">
    <div className="min-h-screen flex flex-col bg-slate-50 relative overflow-hidden w-full">
      <Header />

      <main className="flex-grow w-full">
        {/* <main className="flex-grow flex"> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/myorder" element={<MyOrder />} />
          <Route path="/lab-test" element={<LabTestScreen />} />
          <Route path="/medicine-search" element={<MedicineComparison />} />
          <Route path="/UploadRghs" element={<UploadRghs />} />
          <Route path="/lab-test/:category" element={<LabTestPage />} />
          <Route path="/lab-test/:category/slot" element={<SlotBooking />} />
          <Route path="/PReview" element={<PReview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
