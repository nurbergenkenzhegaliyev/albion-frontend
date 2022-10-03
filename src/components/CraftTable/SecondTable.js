import React from "react";
import styles from "./CraftTable.module.scss";
import { useSelector } from "react-redux";
import TableInput from "../TableInput/TableInput";
import { useState } from "react";

function SecondTable({ tier, craftingMethods, option }) {
  const returnBonus = 0.15;
  const { resources } = useSelector((state) => state.info);

  const [tier0, setTier0] = useState(0);
  const [tier1, setTier1] = useState(0);
  const [tier2, setTier2] = useState(0);
  const [tier3, setTier3] = useState(0);

  // Function calculates the cost for every enchant
  // Net cost
  // 1. Return bonus
  // 2. Journals (For now it will not be included)

  const calculation = (enchantment) => {
    let sum = 0;
    const materials = craftingMethods[option].craftresource;
    for (const prop in materials) {
      const uniquename = materials[prop]["@uniquename"];
      const count = materials[prop]["@count"];
      let cost = 0;

      if (!uniquename.includes("ARTEFACT")) {
        if (enchantment === 0) {
          cost = resources[uniquename];
        } else {
          cost = resources[uniquename + "_LEVEL" + enchantment + "@" + enchantment];
        }
      } else {
        cost = resources[uniquename];
      }
      sum = (!uniquename.includes("ARTEFACT")) ? sum += count * cost * (1 - returnBonus) : sum += count * cost
    }
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
              value={tier0}
              onChange={(e) => setTier0(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>{tier}.1</td>
          <td>{calculation(1)}</td>
          <td>
            <input
              type="text"
              value={tier1}calculation
              onChange={(e) => setTier1(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>{tier}.2</td>
          <td>{calculation(2)}</td>
          <td>
            <input
              type="text"
              value={tier2}
              onChange={(e) => setTier2(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>{tier}.3</td>
          <td>{calculation(3)}</td>
          <td>
            <input
              type="text"
              value={tier3}
              onChange={(e) => setTier3(e.target.value)}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default SecondTable;
