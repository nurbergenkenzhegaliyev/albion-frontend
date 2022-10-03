import React from "react";
import styles from "./CraftTable.module.scss";
import { useState } from "react";
import SecondTable from "./SecondTable";
import ThirdTable from "./ThirdTable";

function CraftTable({ item }) {
  const returnBonus = 0.15;
  const [costTier0, setCostTier0] = useState(0);
  const [costTier1, setCostTier1] = useState(0);
  const [costTier2, setCostTier2] = useState(0);
  const [costTier3, setCostTier3] = useState(0);

  // console.log("item", item);

  const uniquename = item["@uniquename"];
  // console.log("Item uniquename: ", uniquename);

  const tier = uniquename[1];
  // console.log("Item tier: ", tier);

  // Several way to craft the item
  const craftingMethods = item.craftingrequirements;
  // console.log("Item crafting methods: ", craftingMethods);

  const [option, setOption] = useState("1");
  // console.log("Option: ", option);

  return (
    <div className={styles.main}>
      <div className={styles.tables_section}>
        <div className={styles.first_table}>
          <div className={styles.header}>
            <span>{uniquename}</span>
            <div className={styles.options}>
              <button onClick={() => setOption("0")}>1</button>
              <button onClick={() => setOption("1")}>2</button>
            </div>
          </div>

          {
            // Section to show multiple ways to craft an item
            craftingMethods.map((obj, index) => (
              <div key={index} className={styles.tableSlider}>
                <table id={index}>
                  <tbody
                    className={index.toString() === option ? "" : styles.hide}
                  >
                    <tr>
                      <th>Amount</th>
                      {obj.craftresource.map((resource) => (
                        <th key={resource["@uniquename"]+'1'}>{resource["@uniquename"]}</th>
                      ))}
                    </tr>
                    <tr>
                      <td>1</td>
                      {obj.craftresource.map((resource) => (
                        <td key={resource["@uniquename"]+'2'}>{resource["@count"]}</td>
                      ))}
                    </tr>
                    <tr>
                      {/* input */}
                      <td>0</td>
                      {obj.craftresource.map((resource) => (
                        <td key={resource["@uniquename"]+'3'}>{resource["@count"]}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            ))
          }
        </div>

        <div className={styles.calculations}>
          {/* Need to change this trash <---------------------------------*/}
          <SecondTable
            key={tier + 100}
            tier={tier}
            craftingMethods={craftingMethods}
            option={option}
            costTier0={costTier0}
            costTier1={costTier1}
            costTier2={costTier2}
            costTier3={costTier3}
            setCostTier0={setCostTier0}
            setCostTier1={setCostTier1}
            setCostTier2={setCostTier2}
            setCostTier3={setCostTier3}
            returnBonus={returnBonus}
          />
          {/* Need to change this trash <---------------------------------*/}

          <ThirdTable 
            key={tier + 200}
            craftingMethods={craftingMethods}
            option={option}
            costTier0={costTier0}
            costTier1={costTier1}
            costTier2={costTier2}
            costTier3={costTier3}
            returnBonus={returnBonus}
          />
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default CraftTable;
