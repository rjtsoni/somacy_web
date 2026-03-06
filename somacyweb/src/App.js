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
import LabTestList from "./pages/LabTestList";
import LabTestPage from "./pages/LabTestPage";
import SlotBooking from "./pages/SlotBooking";
import UploadRghs from "./pages/UploadRghs";
import PReview from "./pages/PReview";
import ProductCart from "./pages/ProductCart";
import BookingConfirmed from "./pages/BookingConfirmed";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccess from "./pages/OrderSuccess";
import OrderConfirmed from "./pages/OrderConfirmed";
import TrackOrder from "./pages/TrackOrder";
import OrderDetails from "./pages/OrderDetails";

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
          <Route path="/:category" element={<LabTestList />} />
          {/* <Route path="/lab-test/:category" element={<LabTestList />} /> */}
          <Route path="/:category/:testName" element={<LabTestPage />} />

          <Route path="/lab-test/:category/slot" element={<SlotBooking />} />
          <Route path="/PReview" element={<PReview />} />
          <Route path="/drugs/:medicineName" element={<ProductCart />} />
          <Route
            path="/lab-test/:category/confirmed"
            element={<BookingConfirmed />}
          />
          <Route path="/Prescription-Review" element={<PReview />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          {/* <Route path="/order-success/:orderId" element={<OrderSuccess />} /> */}
          {/* <Route path="/order-success" element={<OrderSuccess />} /> */}
          {/* <Route path="/order-confirmed/:orderId" element={<OrderConfirmed />} /> */}
          <Route path="/order-confirmed" element={<OrderConfirmed />} />
          {/* <Route path="/track-order/:orderId" element={<TrackOrder />} /> */}
          <Route path="/track-order" element={<TrackOrder />} />
          {/* <Route path="/order/:orderId" element={<OrderDetails />} /> */}
          <Route path="/order" element={<OrderDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
