import styles from "./TarjetaAnimal.module.css"



const TarjetaAnimal = ({ nombre, peso, color, edad }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h2 className={styles.title}>{nombre}</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.infoItem}>
                    <span className={styles.label}>Peso:</span>
                    <span className={styles.value}>{peso} kg</span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.label}>Color:</span>
                    <div className={styles.colorInfo}>
                        <div
                            className={styles.colorSwatch}
                            style={{ backgroundColor: typeof color === "string" && color.startsWith("#") ? color : undefined }}
                        ></div>
                        <span className={styles.value}>{color}</span>
                    </div>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.label}>Edad:</span>
                    <span className={styles.value}>{edad} años</span>
                </div>
            </div>
        </div>
    )
}

export default TarjetaAnimal
