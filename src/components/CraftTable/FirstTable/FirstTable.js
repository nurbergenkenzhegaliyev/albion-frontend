import React from "react";
import styles from "./FirstTable.module.scss";
import { CraftItemContext } from "../../../context.js";
import CraftItemName from "../CraftItemName/CraftItemName.js"

function FirstTable() {
  let { arrayCraftingMethods, option, amount, setAmount } =
    React.useContext(CraftItemContext);

  const genrateRow = (title, object, str) => {
    return (
      <tr>
        <th>{title}</th>
        {Array.isArray(object.craftresource) ? (
          object.craftresource.map((resource, index) => (
            <th key={resource[str] + index}>{resource[str]}</th>
          ))
        ) : (
          <th key={object.craftresource[str] + "33"}>
            {object.craftresource[str]}
          </th>
        )}
      </tr>
    );
  };

  const generateCountRow = (object, str, amount) => {
    return (
      <tr>
        <td>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </td>
        {Array.isArray(object.craftresource) ? (
          object.craftresource.map((resource, index) => (
            <th key={resource[str] + index}>{resource[str] * amount}</th>
          ))
        ) : (
          <th key={object.craftresource[str] + "11"}>
            {object.craftresource[str] * amount}
          </th>
        )}
      </tr>
    );
  };

  const mtable = arrayCraftingMethods.map((obj, index) => (
    
    // <div className={styles.first_table}>
      <table id={index} key={index} >
        <tbody className={index.toString() === option ? "" : styles.hide}>
          {genrateRow("Amount", obj, "@uniquename")}
          {genrateRow("1", obj, "@count")}
          {generateCountRow(obj, "@count", amount)}
        </tbody>
      </table>
    // </div>
  ));

  

  return (
    <div className={styles.first_table}>
       <CraftItemName />
       {mtable}
    </div>

  );
}

export default FirstTable;
