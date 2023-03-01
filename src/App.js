import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Popular } from "./pages/Popular/Popular";
import { TopRated } from "./pages/TopRated/TopRated";
import { SinglePage } from "./pages/SinglePage/SinglePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/popular/:id" element={<SinglePage />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/toprated/:id" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
