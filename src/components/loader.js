import styles from "./loader.module.css";

const Loader = () => {
    return (
        <div className={styles.alignLoader}><div className={styles.loader} id="loader"></div></div>
    );
};

export default Loader;
