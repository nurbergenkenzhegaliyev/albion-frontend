import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import { CraftContext } from "../../context.js";
import { useDispatch } from "react-redux";
import { addCraftingItem } from "../../features/info/infoActions";
import axios from "../../axios.js";

function Button({bid}) {
  const dispatch = useDispatch();
  const { clickedTier, setClickedTier, itemName, makerType } =
    React.useContext(CraftContext);

  
  async function on() {
      // 1. Get item uniquename
      const uniquename = "T" + clickedTier + "_" + itemName.name;
      // 2. Get item info
      const {data} = await axios.post('/info/getItemInfo', {uniquename})
      // 3. Add obj to craftingItems list
      console.log("sending: ",data)
      console.log("makerType: ",makerType)
      dispatch(addCraftingItem({item: data, makerType})); 
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
      >
        Update resource prices
      </button>
    );
  } 
  
  else if (bid.includes("update")) {
    return (
      <button
        className={`${styles.updateButton} ${styles.update}`}
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

Button.propTypes = {
  bid: PropTypes.string
};

export default React.memo(Button);
