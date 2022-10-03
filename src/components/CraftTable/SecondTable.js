import React from "react";
import styles from "./CraftTable.module.scss";
import { useSelector } from "react-redux";

function SecondTable({
  tier,
  craftingMethods,
  option,
  costTier0,
  costTier1,
  costTier2,
  costTier3,
  setCostTier0,
  setCostTier1,
  setCostTier2,
  setCostTier3,
  returnBonus
}) {
  const { resources } = useSelector((state) => state.info);

  // Function calculates the cost for every enchant
  // Net cost
  // 1. Return bonus
  // 2. Journals (For now it will not be included)
  const calculation = (enchantment) => {
    // Initialize sum
    let sum = 0;
    // Get array of obj with material info depending on option
    const materials = craftingMethods[option].craftresource;
    // Loop through every material in the array
    for (const prop in materials) {
      // Get unique name
      const uniquename = materials[prop]["@uniquename"];
      // Get amount
      const count = materials[prop]["@count"];
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
          (sum += count * cost * (1 - returnBonus))
        : (sum += count * cost);
    }
    // Add item craft cost-------------->

    // Return total cost of craft
    return sum;
  };

  return (
    <table className={styles.second_table}>
      <thead>
        <tr>
          <th>Tier</th>
          <th>Cost</th>
          <th>Sell price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{tier}.0</td>
          <td>{calculation(0)}</td>
          <td>
            <input
              type="text"
              value={costTier0}
              onChange={(e) => setCostTier0(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>{tier}.1</td>
          <td>{calculation(1)}</td>
          <td>
            <input
              type="text"
              value={costTier1}
              onChange={(e) => setCostTier1(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>{tier}.2</td>
          <td>{calculation(2)}</td>
          <td>
            <input
              type="text"
              value={costTier2}
              onChange={(e) => setCostTier2(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>{tier}.3</td>
          <td>{calculation(3)}</td>
          <td>
            <input
              type="text"
              value={costTier3}
              onChange={(e) => setCostTier3(e.target.value)}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default SecondTable;
