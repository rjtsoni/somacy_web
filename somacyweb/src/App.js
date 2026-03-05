import "./App.css";

import Footer from "./Component/Footer";
import Header from "./Component/Header";
import RghsInfo from "./pages/RghsInfo";
import Homepage from "./pages/Homepage";
import CartPage from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
import MyOrder from "./pages/MyOrder";
import MedicineComparison from "./pages/MedicineComaprison";
import NotFound from "./pages/NotFound";
import UploadRghs from "./pages/UploadRghs";

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
          <Route path="/lab-test" element={<RghsInfo />} />
          <Route path="/medicine-search" element={<MedicineComparison />} />
          <Route path="/UploadRghs" element={<UploadRghs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
