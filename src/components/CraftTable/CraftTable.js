import React from "react";
import styles from "./CraftTable.module.scss";

function CraftTable({ uniquename }) {
  const tier = uniquename[1];
  return (
    <div className={styles.main}>
      <div className={styles.tables_section}>
        <table className={styles.first_table}>
          <thead>
            <tr>
              <th colSpan={100}>NAME OF ITEM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Amount</th>
              <th>Брусья</th>
              <th>Слиток</th>
              <th>Ткань</th>
              <th>Кожа</th>
              <th>Артефакт111111</th>
            </tr>
            <tr>
              <td>0</td>
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
              <td>0</td>
            </tr>
          </tbody>
        </table>

        <div className={styles.calculations}>
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
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>{tier}.1</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>{tier}.2</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>{tier}.3</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>

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
