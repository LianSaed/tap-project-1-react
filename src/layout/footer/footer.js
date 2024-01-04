import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
    <footer>
        <p class={styles.footerText}>
            Developed with <FontAwesomeIcon icon={faHeart} className={styles.heartColor} /> @2023
        </p>
    </footer>
);
export default Footer;