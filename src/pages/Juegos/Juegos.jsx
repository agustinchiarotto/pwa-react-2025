import { useEffect } from "react";

const Juegos = () => {
  const getJuegos = async () => {
    const juegosRes = await fetch(
      "https://68095d861f1a52874cdcac01.mockapi.io/api/v1/juegos",
    );
    const juegosParsed = await juegosRes.json();

    // console.log(juegosParsed);
  };

  const getDetallesJuego = async () => {
    const detallesJuego1 = await fetch(
      "https://68095d861f1a52874cdcac01.mockapi.io/api/v1/detallesJuego/1",
    );
    const juegoParsed = await detallesJuego1.json();

    console.log(juegoParsed);
  };

  useEffect(() => {
    getDetallesJuego();
  }, []);

  return <h1>Juegos</h1>;
};

export default Juegos;
