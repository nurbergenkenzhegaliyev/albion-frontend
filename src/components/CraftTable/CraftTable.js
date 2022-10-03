import React from "react";
import styles from "./CraftTable.module.scss";
import { useState } from "react";
import SecondTable from "./SecondTable";

function CraftTable({ item }) {
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
                        <th>{resource["@uniquename"]}</th>
                      ))}
                    </tr>
                    <tr>
                      <td>1</td>
                      {obj.craftresource.map((resource) => (
                        <td>{resource["@count"]}</td>
                      ))}
                    </tr>
                    <tr>
                      {/* input */}
                      <td>0</td>
                      {obj.craftresource.map((resource) => (
                        <td>{resource["@count"]}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            ))
          }
        </div>

        <div className={styles.calculations}>
          <SecondTable tier={tier} craftingMethods={craftingMethods} option={option} />

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
              <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default CraftTable;
