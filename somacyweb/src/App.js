import "./App.css";

import Footer from "./Component/Footer";
import Header from "./Component/Header";
import RghsInfo from "./pages/RghsInfo";
import Homepage from "./pages/homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <RghsInfo />
      {/* <LabReports /> */}
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
