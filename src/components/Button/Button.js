import React from 'react';
import styles from './Button.module.scss'
import AppContext from "../../context.js";
import { useDispatch } from "react-redux";
import { addCraftingItem, removeCraftingItem } from '../../features/info/infoActions';
import axios from 'axios';

function Button(props) {

    
    const dispatch = useDispatch();
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
    // else if(props.id.includes("delete")){
    //     function on() {
    //         if(clickedTier) {
    //             const item = "T" + clickedTier + "_" + itemName.name;
    //             let obj = {}
    //             for(let i=0;i<props.craftingItems.length;i++) {
    //                 if(props.craftingItems[i]['@uniquename'] === item) {
    //                     obj = props.craftingItems[i];
    //                     break;
    //                 }
    //             }
    //             dispatch(removeCraftingItem(obj));
    //         }
    //         else {
    //             return console.log("Tier is not selected");
    //         }
    //     };
    //     return (<div className={`${styles.updateButton} ${styles.create}`} onClick={()=>on()}>Delete card</div>)
    // }
    else if(props.id.includes("create")){
        async function on() {
            if(clickedTier) {
                // 1. Get item uniquename
                const item = "T" + clickedTier + "_" + itemName.name;
                // 2. Get item info
                const {data} = await axios.post('/info/getItemInfo', {uniquename: item})
                // 3. Add obj to craftingItems list
                dispatch(addCraftingItem(data));
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