import styles from "./dropDownButton.module.css";

const DropDownButton = (props) => {
    let btnClass = styles[props.btn];
    const handelFilter = (value) => {
        props.onFilter(value)

    }
    const handelSort = (value) => {
        props.onSort(value)
    }
    return (
        <>
            <div className={`${styles.dropbtn} ${btnClass}`}>
                <div className={styles.smallFontSize}>{props.type} By:</div>
                <select className={styles.dropdown} id={props.id} onChange={(event) =>
                    props.type === "Filter"
                        ? handelFilter(event.target.value)
                        : handelSort(event.target.value)
                }>
                    <option value="Default">
                        Default
                    </option>
                    {props.options.map((value, id) => (
                        <option value={value} key={id}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
        </>);
};
export default DropDownButton;