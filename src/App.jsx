import "./App.css";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Details from "./pages/Details/Details.jsx";
import Juegos from "./pages/Juegos/Juegos.jsx";
import { ROUTES } from "./const/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={ROUTES.home} />
        <Route element={<Details />} path={ROUTES.pokemon} />
        <Route element={<Juegos />} path={ROUTES.juegos} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
