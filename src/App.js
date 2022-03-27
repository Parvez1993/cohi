import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appbar from "./components/Appbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Questionaries from "./pages/Questionaries";
import Error from "./components/Error";
import Results from "./pages/Results";
function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/survey" element={<Questionaries />} />
        <Route path="/result" element={<Results />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
