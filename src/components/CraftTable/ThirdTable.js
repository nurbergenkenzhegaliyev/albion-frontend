import React from "react";
import styles from "./CraftTable.module.scss";
import { useSelector } from "react-redux";

function ThirdTable({
    craftingMethods,
    option,
    costTier0,
    costTier1,
    costTier3,
    costTier4
}) {
    const { resources } = useSelector((state) => state.info);

    const expense = (enchantment) => {
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
          sum += count * cost;
        }
        return sum;
    }


  return (
    <table className={styles.third_table}>
      <thead>
        <tr>
          <th>Expense</th>
          <th>Imcome</th>
          <th>Net</th>
          <th>%</th>
          <th>Jour.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{expense(0)}</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ThirdTable;
