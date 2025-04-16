import styles from './Input.module.css'

const Input  = ({onChange, value}) => {


    const handleChange = (evento) => {
        onChange(evento.target.value)
    }

    return <input className={styles.input} value={value} onChange={handleChange} />
}

export default Input
