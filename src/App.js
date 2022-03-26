import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appbar from "./components/Appbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Questionaries from "./pages/Questionaries";
function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/survey" element={<Questionaries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
