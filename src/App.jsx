import "./App.css";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Details from "./pages/Details/Details.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Details />} path="/details" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
