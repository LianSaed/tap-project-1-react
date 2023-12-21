import styles from "./dropDownButton.module.css";

const DropDownButton = () => (

return (<>
    <div class="dropbtn btn1">
        <div class="small-font-size">Sort by:</div>
        <select class="dropdown" id="selection1">
            <option value="0">
                Default
            </option>
            <option value="1">
                Topic Title
            </option>
            <option value="2">
                Author Name
            </option>
        </select>
    </div>
</>)
);
export default DropDownButton;