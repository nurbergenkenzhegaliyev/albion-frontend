import React from "react";
import styles from "./FirstTable.module.scss";
import { CraftItemContext } from "../../../context.js";
import CraftItemName from "../CraftItemName/CraftItemName.js";
import Options from "./Options";

function FirstTable() {
  let {arrayCraftingMethods, option} = React.useContext(CraftItemContext);

  const mtable = arrayCraftingMethods.map((obj, index) => (
      <table id={index} key={index} >
        <tbody className={index.toString() === option ? "" : styles.hide}>
          <Options obj={obj}/>
        </tbody>
      </table>
  ));

  
  return (
    <div className={styles.first_table}>
       <CraftItemName />
       {mtable}
    </div>

  );
}

export default React.memo(FirstTable);
