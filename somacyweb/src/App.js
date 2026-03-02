import logo from "./logo.svg";
import "./App.css";
import LabReports from "./pages/LabReports";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import RghsInfo from "./pages/RghsInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <RghsInfo/>
    {/* <LabReports /> */}
    <Footer />
    </div>
  );
}

export default App;
