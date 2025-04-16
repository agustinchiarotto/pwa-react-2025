import style from './Titulo.module.css';

const Titulo = ({ texto }) => {
  return <h1 className={style.verde}  >{texto}</h1>;
};

export default Titulo;
