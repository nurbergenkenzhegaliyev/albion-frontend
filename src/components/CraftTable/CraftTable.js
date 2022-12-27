import React from "react";
import styles from "./CraftTable.module.scss";
import { useState } from "react";
import FirstTable from "./FirstTable/FirstTable";
import SecondTable from "./SecondTable/SecondTable";
import ThirdTable from "./ThirdTable/ThirdTable";
import { CraftItemContext } from "../../context.js";
import RemoveButton from "../RemoveButton/RemoveButton.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeCraftingItem } from "../../features/info/infoActions";

  
function CraftTable({ item, returnBonus }) {

  const dispatch = useDispatch();
  const uniquename = item["@uniquename"];

  // Tier of crafting item -> colour difference
  const tier = uniquename[1];

  // Several way to craft the item
  const craftingMethods = item.craftingrequirements;

  let arrayCraftingMethods = [];
  if (craftingMethods.length > 1) {
    arrayCraftingMethods = craftingMethods.slice(0);
  } else {
    arrayCraftingMethods.push(craftingMethods);
  }

  const [option, setOption] = useState("0");

  const [amount, setAmount] = useState(10);
  const [removing, setRemoving] = useState(false)

  async function remove() {
    const { data } = await axios.post("/info/getItemInfo", {
      uniquename: uniquename,
    });
    // setTimeout(() => {
      dispatch(removeCraftingItem(data));
    // }, 100);
  }
  const handleRemove = () => {
    setRemoving(true);
    remove();
  }

  let animation = (removing) ? styles.fade_out:styles.fade_in;

  const list = useSelector((state) => state.info.prices);
  let oneitem = {};
  if (list.length > 0) {
    oneitem = list.filter((obj) => obj.name === uniquename)[0];
  }
  let ar = oneitem ? [...oneitem.priceList]:[0,0,0,0,0];

  const [sellCost, setSellCost] = useState(ar);

  return (
    <CraftItemContext.Provider
      value={{
        returnBonus,
        arrayCraftingMethods,
        option,
        amount,
        setAmount,
        tier,
        uniquename,
        setOption,
        sellCost,
        setSellCost
      }}
    >
      <div className={`${styles.main} ${animation}`}>
        <div className={styles.left}>
          <div className={styles.tables_section}>
            <FirstTable />
            <div className={styles.calculations}>
              <SecondTable />
              <ThirdTable />
            </div>
          </div>
        </div>
        
        <div className={styles.right}>
          <div className={styles.content}>
            right
          </div>
          <RemoveButton removeFunc = {handleRemove}/>
        </div>
      </div>
    </CraftItemContext.Provider>
  );
}

export default React.memo(CraftTable);
