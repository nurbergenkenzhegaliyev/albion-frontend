import React from "react";
import styles from "./CraftItemName.module.scss";
import { CraftItemContext } from "../../../context.js";




function CraftItemName() {
    let { arrayCraftingMethods, uniquename, setOption} =
    React.useContext(CraftItemContext);

    let optionAmount = arrayCraftingMethods.length;
    let optionArray = [];
    for (var i = 0; i < optionAmount; i++) {
        optionArray.push(i);
    }

    return (
        <div className={styles.header}>
            <span className={styles.title}>{uniquename}</span>
            <div className={styles.options}>
            {optionAmount > 1 &&
                optionArray.map((num) => (
                <button className={styles.option} key={num} onClick={() => setOption(String(num))}>
                    {num + 1}
                </button>
                ))}
            </div>
        </div>
    )
}

export default CraftItemName;