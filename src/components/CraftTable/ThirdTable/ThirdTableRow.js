import React,{ useState, useContext } from "react";
import TotalExpense from "./TotalExpense";
import TotalIncome from "./TotalIncome";
import styles from "./ThirdTable.module.scss";
import { CraftItemContext } from "../../../context";

// Journal Fame = Material Amount * Fame Multiplier * POW(2, Enchantment Tier)


function ThirdTableRow({ ench, sellPrice, journalAmount }) {
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  const { resourceAmount, destinyCraftFameFactor } = useContext(CraftItemContext);

  const netProfit = totalIncome - totalExpense;

  const percentage = ((netProfit / totalExpense) * 100).toFixed(2);

  const color = netProfit < 0 ? styles.negtaiveValue : styles.positiveValue;

  return (
    <tr>
      <TotalExpense
        setTotalExpense={setTotalExpense}
        totalExpense={totalExpense}
        ench={ench}
      />
      <TotalIncome
        setTotalIncome={setTotalIncome}
        totalIncome={totalIncome}
        ench={ench}
        sellPrice={sellPrice}
      />
      <td className={color}>{netProfit}</td>
      <td className={color}>{percentage}%</td>
      <td>{journalAmount}</td>
    </tr>
  );
}

export default React.memo(ThirdTableRow);
