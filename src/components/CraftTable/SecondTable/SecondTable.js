import React from "react";
import styles from "./SecondTable.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { CraftItemContext } from "../../../context.js";
import { useEffect } from "react";
import { addCraftingItemSellPrice } from "../../../features/info/infoActions.js";

function SecondTable() {
  const { resources } = useSelector((state) => state.info);
  const dispatch = useDispatch();

  const { uniquename, arrayCraftingMethods, tier, option, returnRate, sellCost, setSellCost } =
    React.useContext(CraftItemContext);
    

  const handleSetSellCost = (ench, cost) => {
    setSellCost(sellCost.map((obj, index) => {
      if(index === ench){
        obj = cost;
      }
      return obj;
    }))
  };

  useEffect(() => {
    dispatch(
      addCraftingItemSellPrice({
        name: uniquename,
        priceList: sellCost,
      })
    );
  },[sellCost])

  const looping = (materials, enchantment) => {
    let sum = 0;

    for (let obj in materials) {
      // Get unique name
      const uniquename = materials[obj]["@uniquename"];

      // Get amount
      const count = materials[obj]["@count"];

      // Initialize cost
      let cost = 0;

      // Check if material is artefact (they do not have enchantment level)
      if (!uniquename.includes("ARTEFACT")) {
        // If no enchantment
        if (enchantment === 0) {
          cost = resources[uniquename];
        } else {
          // Else change name and get cost from (redux) state
          cost =
            resources[uniquename + "_LEVEL" + enchantment + "@" + enchantment];
        }
      } else {
        // Get cost if it is arftefact
        cost = resources[uniquename];
      }

      // Add total cost of material to the sum
      sum = !uniquename.includes("ARTEFACT")
        ? //Here is used returBonus. Need to change. ALso add journals.--------->
          (sum += count * cost * (1 - returnRate))
        : (sum += count * cost);
    }
    return sum;
  };

  // Function calculates the cost for every enchant
  // Net cost
  // 1. Return bonus
  // 2. Journals (For now it will not be included)
  const calculation = (enchantment) => {
    // Initialize sum
    let sum = 0;

    // Get array of obj with material info depending on option
    let materials = [];

    if (Array.isArray(arrayCraftingMethods[option].craftresource)) {
      materials = arrayCraftingMethods[option].craftresource.slice(0);
    } else {
      materials.push(arrayCraftingMethods[option].craftresource);
    }
    // Loop through every material in the array
    sum = looping(materials, enchantment);

    // Return total cost of craft
    return Math.ceil(sum);
  };

  const generateRows = (tier, ench) => {
    return (
      <tr key={tier * ench}>
        <td>
          {tier}.{ench}
        </td>
        <td>{calculation(ench)}</td>
        <td>
          <input
            type="text"
            value={sellCost[ench]}
            className={styles["tier"+tier]}
            onChange={(e) => handleSetSellCost(ench, e.currentTarget.value)}
          />
        </td>
      </tr>
    );
  };

  return (
    <div className={styles.secondTable}>
      <table>
        <thead>
          <tr>
            <th>Tier</th>
            <th>Cost</th>
            <th>Sell price</th>
          </tr>
        </thead>
        <tbody>{[0, 1, 2, 3, 4].map((ench) => generateRows(tier, ench))}</tbody>
      </table>
    </div>
  );
}

export default React.memo(SecondTable);
