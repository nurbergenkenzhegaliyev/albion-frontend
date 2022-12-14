import React from "react";
import styles from "./Button.module.scss";
import {AppContext} from "../../context.js";
import { useDispatch } from "react-redux";
import { addCraftingItem } from "../../features/info/infoActions";
import axios from "axios";

function Button({ bid, onClk }) {
  const dispatch = useDispatch();
  const { clickedTier, setClickedTier, itemName } =
    React.useContext(AppContext);

 
  async function on() {
      // 1. Get item uniquename
      const item = "T" + clickedTier + "_" + itemName.name;
      // 2. Get item info
      const {data} = await axios.post('/info/getItemInfo', {uniquename: item})
      // 3. Add obj to craftingItems list
      dispatch(addCraftingItem(data)); 
  };


  const handleClickCreate = () => {
    if (clickedTier === "") {
      console.log("Tier not selected");
    } else {
      on();
    }
  };

  if (bid.includes("create")) {
    return (
      <button
        className={`${styles.updateButton} ${styles.create}`}
        onClick={handleClickCreate}
      >
        Create card
      </button>
    );
  } 
  
  else if (bid.includes("update")) {
    return (
      <button
        className={`${styles.updateButton} ${styles.update}`}
        onClick={onClk}
      >
        Update resource prices
      </button>
    );
  } 
  
  else if (bid.includes("update")) {
    return (
      <button
        className={`${styles.updateButton} ${styles.update}`}
        onClick={onClk}
      >
        Update resource prices
      </button>
    );
  }  
  
  else {
    return (
      <button
        onClick={() => setClickedTier(bid)}
        className={`${styles["tier" + bid]} ${styles.tierButton} ${
          clickedTier.includes(bid) ? styles.active : ""
        }`}
      >
        Tier {bid}
      </button>
    );
  }
}

export default React.memo(Button);
