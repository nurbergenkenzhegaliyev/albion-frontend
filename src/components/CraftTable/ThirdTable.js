import React from "react";
import styles from "./CraftTable.module.scss";
import { useSelector } from "react-redux";

function ThirdTable({
  craftingMethods,
  option,
  costTier0,
  costTier1,
  costTier2,
  costTier3,
  amount,
  returnBonus,
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
    sum *= amount;
    return sum.toFixed(0);
  };

  const looping = (materials, enchantment) => {

    let sum = 0;
    
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
      sum += count * cost
    }
    if(enchantment === 0) {
      sum += Number(costTier0)
    } 
    else if(enchantment === 1) {
      sum += Number(costTier1)
    } 
    else if(enchantment === 2) {
      sum += Number(costTier2)
    } 
    else if(enchantment === 3) {
      sum += Number(costTier3)
    }

    sum *= amount;
    return sum.toFixed(0);
  };




  const income = (enchantment) => {
    // Initialize sum
    let sum = 0;
    let materials = {};

    if (craftingMethods.length > 1) {
      // Get array of obj with material info depending on option
      materials = craftingMethods[option].craftresource;
      // Loop through every material in the array
      sum = looping(materials, enchantment);
    }
    else {
      materials = craftingMethods.craftresource;
      if (materials.length > 1) {
        sum = looping(materials, enchantment);
      }
      else {
        // Get unique name
        const uniquename = materials["@uniquename"];
        // Get amount
        const count = materials["@count"];
        // Initialize cost
        let cost = 0;

        if (enchantment === 0) {
          cost = resources[uniquename];
        } else {
          // Else change name and get cost from (redux) state
          cost =
            resources[uniquename + "_LEVEL" + enchantment + "@" + enchantment];
        }
        sum += count * cost * returnBonus
      }
    }
    
    sum *= amount;
    return sum.toFixed(0);
  };
  // (((incomeArr[2] - exprenseArr[2]) / exprenseArr[2]) * 100).toFixed(2)
  
  const exprenseArr = [expense(0), expense(1), expense(2), expense(3)];
  const incomeArr = [income(0), income(1), income(2), income(3)];

  const percentage = (enchantment) => {
    let p = (((incomeArr[enchantment] - exprenseArr[enchantment]) / exprenseArr[enchantment]) * 100)
    p = (p>100) ? p.toFixed(0) : p.toFixed(2);
    return p;
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
          <td>{exprenseArr[0]}</td>
          <td>{incomeArr[0]}</td>
          <td>{(incomeArr[0] - exprenseArr[0]).toFixed(0)}</td>
          <td>{percentage(0)}%</td>
          <td>0</td>
        </tr>
        <tr>
          <td>{exprenseArr[1]}</td>
          <td>{incomeArr[1]}</td>
          <td>{(incomeArr[1] - exprenseArr[1]).toFixed(0)}</td>
          <td>{percentage(1)}%</td>
          <td>0</td>
        </tr>
        <tr>
          <td>{exprenseArr[2]}</td>
          <td>{incomeArr[2]}</td>
          <td>{(incomeArr[2] - exprenseArr[2]).toFixed(0)}</td>
          <td>{percentage(2)}%</td>
          <td>0</td>
        </tr>
        <tr>
          <td>{exprenseArr[3]}</td>
          <td>{incomeArr[3]}</td>
          <td>{(incomeArr[3] - exprenseArr[3]).toFixed(0)}</td>
          <td>{percentage(3)}%</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ThirdTable;
