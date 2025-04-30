import "./App.css";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Pokemon from "./pages/Pokemon/Pokemon.jsx";
import Juegos from "./pages/Juegos/Juegos.jsx";
import { ROUTES } from "./const/routes";
import Idioma from "./pages/idioma/Idioma";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={ROUTES.home} />
        <Route element={<Pokemon />} path={ROUTES.pokemon} />
        <Route element={<Juegos />} path={ROUTES.juegos} />
        <Route element={<Idioma />} path={ROUTES.idioma} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
