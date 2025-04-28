import style from "./Titulo.module.css";

const Titulo = ({ texto }) => {
  return <h1 className="text-red-500">{texto}</h1>;
};

export default Titulo;
