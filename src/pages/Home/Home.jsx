import Titulo from "../../components/Titulo/Titulo.jsx";
import Button from "../../components/Button/Button.jsx";
import Input from "../../components/Input/Input.jsx";
import styles from "../../test.module.css";
import TarjetaAnimal from "../../components/TarjetaAnimal/TarjetaAnimal.jsx";
import { useEffect, useState } from "react";

const animal1 = {
  nombre: "gato",
  edad: 10,
  peso: 4,
  color: "Rojo",
};

const animal2 = {
  nombre: "perro",
  edad: 15,
  peso: 20,
  color: "Verde",
};

const animal3 = {
  nombre: "Tortuga",
  edad: 100,
  peso: 15,
  color: "Amarillo",
};
const Home = () => {
  // const --> es constante
  // [nombre, setNombre] --> 1er valor es la definicion de la variable del estado, el segundo es una funcion para modificar el estado.
  //  const [nombre, setNombre] = useState("Agustin");

  const [contador, setContador] = useState(0);
  const [animales, setAnimales] = useState([animal1, animal2, animal3]);

  const [nombreNuevoAnimal, setNombreNuevoAnimal] = useState("");
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    localStorage.setItem("datosAnimales", JSON.stringify(animales));
  }, [animales]);

  useEffect(() => {
    const resultado = localStorage.getItem("datosAnimales");
    if (resultado) {
      setAnimales(JSON.parse(resultado));
    }
  }, []);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  if (contador > 15) {
    return <Titulo texto="Deja de tocar +, ya ganaste!!" />;
  }

  const onClickGuardarAnimalHandler = () => {
    setAnimales([
      ...animales,
      { nombre: nombreNuevoAnimal, peso: 0, edad: 0, color: "Gris" },
    ]);
    setNombreNuevoAnimal("");
  };

  const filtar = () => {
    const animalesFiltrados = animales.filter((item) => {
      //si o si retornar un T / F
    });
  };

  return (
    <div className="container">
      {animal1.nombre} <br />
      {animal1.edad}
      <Titulo texto={contador} />
      {contador >= 10 ? (
        <Titulo texto="Ganaste!" />
      ) : (
        <Titulo texto="Todavia no ganaste, segui participando!" />
      )}
      ˘
      <Button texto="+" onClick={sumar} />
      <Button texto="-" onClick={restar} />
      <Input value={busqueda} onChange={setBusqueda} />
      <Button className={styles.button} texto="Buscar" onClick={filtar} />
      <hr />
      {animales.map((animal) => {
        return (
          <TarjetaAnimal
            key={animal.nombre}
            nombre={animal.nombre}
            color={animal.color}
            edad={animal.edad}
            peso={animal.peso}
          />
        );
      })}
      <Input value={nombreNuevoAnimal} onChange={setNombreNuevoAnimal} />
      <Button texto="Guardar Animal" onClick={onClickGuardarAnimalHandler} />
    </div>
  );
};

export default Home;
