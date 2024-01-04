import styles from "./searchBarContainer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import DropDownButton from "./dropDownButton";

const SearchBarContainer = (props) => {
    const sortOptions = ['topic', 'author'];
    // Function to debounce input events
    function debounce(func, delay) {
        var timer;
        return function () {
            var context = this;
            var args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                func.apply(context, args);
            }, delay);
        };
    }
    // Function to handle input events
    function handleInput(value) {
        console.log(value)
        props.onSearch(value);
    }
    return (
        <div className={styles.barSize}>
            <div className={styles.barContainer}>
                <div className={styles.searchIcon}><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                <div className={styles.searchInput}><input id="searchbar" className={`${styles.searchbarInput} ${styles.searchInput}`} type="text" name="search"
                    placeholder="Search the website..." autoComplete="off" onChange={debounce(function (event) {
                        handleInput(event.target.value);
                    }, 300)} /></div>
                <DropDownButton options={sortOptions} type="Sort" id="selection1" btn="btn1" onSort={props.onSort} />
                <DropDownButton options={props.categories} type="Filter" id="selection2" btn="btn2" onFilter={props.onFilter} />
            </div>
        </div>
    );
};
export default SearchBarContainer;