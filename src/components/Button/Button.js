import React from 'react';
import styles from './Button.module.scss'
import AppContext from "../../context.js";

function Button(props) {

    const {clickedTier, setClickedTier} = React.useContext(AppContext);

    if(props.id.includes("tier4")){
        console.log(clickedTier)
        return (<div onClick={() => setClickedTier(props.id)} className={`${styles.updateButton} ${styles.tier4} ${styles.tierButton} ${(clickedTier.includes(props.id) ? styles.active:'')}`}>Tier {props.id[4]}</div>)
    }
    else if(props.id.includes("tier5")){
        return (<div onClick={() => setClickedTier(props.id)} className={`${styles.updateButton} ${styles.tier5} ${styles.tierButton} ${(clickedTier.includes(props.id) ? styles.active:'')}`}>Tier {props.id[4]}</div>)
    }
    else if(props.id.includes("tier6")){
        return (<div onClick={() => setClickedTier(props.id)} className={`${styles.updateButton} ${styles.tier6} ${styles.tierButton} ${(clickedTier.includes(props.id) ? styles.active:'')}`}>Tier {props.id[4]}</div>)
    }
    else if(props.id.includes("tier7")){
        return (<div onClick={() => setClickedTier(props.id)} className={`${styles.updateButton} ${styles.tier7} ${styles.tierButton} ${(clickedTier.includes(props.id) ? styles.active:'')}`}>Tier {props.id[4]}</div>)
    }
    else if(props.id.includes("tier8")){
        return (<div onClick={() => setClickedTier(props.id)} className={`${styles.updateButton} ${styles.tier8} ${styles.tierButton} ${(clickedTier.includes(props.id) ? styles.active:'')}`}>Tier {props.id[4]}</div>)
    }
    else if(props.id.includes("create")){
        return (<div className={`${styles.updateButton} ${styles.create}`}>Create card</div>)
    }
    else if(props.id.includes("update")){
        return (<div onClick={() => props.openModal(true)} className={`${styles.updateButton} ${styles.update}`} >Update resource prices</div>)
    }
}

export default Button;