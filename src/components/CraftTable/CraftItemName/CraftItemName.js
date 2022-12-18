import React, {useEffect} from "react";
import styles from "./CraftItemName.module.scss";
import { CraftItemContext } from "../../../context.js";
import axios from "axios";




function CraftItemName() {
    let { arrayCraftingMethods, uniquename, setOption, tier} =
    React.useContext(CraftItemContext);

    let optionAmount = arrayCraftingMethods.length;
    let optionArray = [];
    for (var i = 0; i < optionAmount; i++) {
        optionArray.push(i);
    }

    const [localizedName, setLocalizedName] = React.useState('s')
    const getter = async(uniqueName) => {
        const response = await axios.post("/info/getItemLocalization", { uniqueName })
        setLocalizedName(prev => response.data.LocalizedNames['EN-US']);
        
    }
    useEffect(() => {
        getter(uniquename);
    }, [uniquename])
    
    // const localizedName = getLocalization(uniquename, "EN-US");
    // console.log(getLocalization(uniquename, "EN-US"))

    return (
        <div className={`${styles.header} ${styles["tier"+tier]}`}>
            <span className={styles.title}>{localizedName}</span>
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