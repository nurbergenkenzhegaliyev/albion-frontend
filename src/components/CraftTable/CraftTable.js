import React from "react";
import styles from "./CraftTable.module.scss";
import { useState } from "react";
import FirstTable from "./FirstTable/FirstTable";
import SecondTable from "./SecondTable/SecondTable";
import { CraftItemContext } from "../../context.js";
import RemoveButton from "../RemoveButton/RemoveButton.js";

function CraftTable({ item, returnBonus }) {

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
      }}
    >
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.tables_section}>
            <FirstTable />
            <SecondTable />
          </div>
        </div>
        
        <div className={styles.right}>
          <div className={styles.content}>
            right
          </div>
          <RemoveButton />
        </div>
      </div>
    </CraftItemContext.Provider>
  );
}

export default CraftTable;
