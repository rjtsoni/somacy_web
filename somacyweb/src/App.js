import logo from "./logo.svg";
import "./App.css";
import LabReports from "./pages/LabReports";
import Footer from "./Component/Footer";
import Header from "./Component/Header";

function App() {
  return (
    <div className="App">
      <Header />
    <LabReports />
    <Footer />
    </div>
  );
}

export default App;
