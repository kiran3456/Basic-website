import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Popup from "./pages/Popup";
import Slider from "./pages/Slider";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/popup" element={<Popup />} />
        <Route path="/slider" element={<Slider />} />
      </Routes>
    </Router>
  );
}

export default App;
