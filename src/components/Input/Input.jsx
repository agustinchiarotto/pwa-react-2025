import styles from "./Input.module.css";

const Input = ({ onChange, value }) => {
  const handleChange = (evento) => {
    onChange(evento.target.value);
  };

  return (
    <input
      className="text-white border border-white rounded-lg p-2 text-xs w-24 "
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
