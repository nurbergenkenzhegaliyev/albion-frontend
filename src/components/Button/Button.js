import React from 'react';
import styles from './Button.module.scss'
import AppContext from "../../context.js";

function Button(props) {

    const {clickedTier, setClickedTier, itemName} = React.useContext(AppContext);

    if(props.tier === "4"){
        console.log(clickedTier)
        return (<div onClick={() => setClickedTier(props.tier)} className={`${styles.updateButton} ${styles.tier4} ${styles.tierButton} ${(clickedTier.includes(props.tier) ? styles.active:'')}`}>Tier {props.tier}</div>)
    }
    else if(props.tier === "5"){
        return (<div onClick={() => setClickedTier(props.tier)} className={`${styles.updateButton} ${styles.tier5} ${styles.tierButton} ${(clickedTier.includes(props.tier) ? styles.active:'')}`}>Tier {props.tier}</div>)
    }
    else if(props.tier === "6"){
        return (<div onClick={() => setClickedTier(props.tier)} className={`${styles.updateButton} ${styles.tier6} ${styles.tierButton} ${(clickedTier.includes(props.tier) ? styles.active:'')}`}>Tier {props.tier}</div>)
    }
    else if(props.tier === "7"){
        return (<div onClick={() => setClickedTier(props.tier)} className={`${styles.updateButton} ${styles.tier7} ${styles.tierButton} ${(clickedTier.includes(props.tier) ? styles.active:'')}`}>Tier {props.tier}</div>)
    }
    else if(props.tier === "8"){
        return (<div onClick={() => setClickedTier(props.tier)} className={`${styles.updateButton} ${styles.tier8} ${styles.tierButton} ${(clickedTier.includes(props.tier) ? styles.active:'')}`}>Tier {props.tier}</div>)
    }
    else if(props.id.includes("create")){
        function on() {
            if(clickedTier) {
                const item = "T" + clickedTier + "_" + itemName.name;
                console.log(item);
            }
            else {
                return console.log("Tier is not selected");
            }
        };
        
        return (<div className={`${styles.updateButton} ${styles.create}`} onClick={()=>on()}>Create card</div>)
    }
    else if(props.id.includes("update")){
        return (<div onClick={() => props.openModal(true)} className={`${styles.updateButton} ${styles.update}`} >Update resource prices</div>)
    }
}

export default Button;