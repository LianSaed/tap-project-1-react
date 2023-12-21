import styles from "./searchBarContainer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBarContainer = () => (
    <div className={styles.barSize}>
        <div className={styles.barContainer}>
            <div className={styles.searchIcon}><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            <div className={styles.searchInput}><input id="searchbar" className={`${styles.searchbarInput} ${styles.searchInput}`} type="text" name="search"
                placeholder="Search the website..." autoComplete="off" /></div>

        </div>
    </div>
);
export default SearchBarContainer;