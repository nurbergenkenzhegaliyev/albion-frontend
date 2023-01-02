import React,{ useState, useContext } from "react";
import TotalExpense from "./TotalExpense";
import TotalIncome from "./TotalIncome";
import styles from "./ThirdTable.module.scss";
import { CraftItemContext } from "../../../context";

// Journal Fame = Material Amount * Fame Multiplier * POW(2, Enchantment Tier)

// Function to calculate crafting fame for item
const craftingFame = (tier, resAmount, factor) => {
  let temp = 0;
  switch (tier) {
    case 4:
      temp = resAmount*22.5
      break;
    case 5:
      temp = resAmount*90
      break;
    case 6:
      temp = resAmount*270
      break;
    case 7:
      temp = resAmount*645
      break;
    case 8:
      temp = resAmount*1395
      break;
    default:
      break;
  }
  temp = temp * factor;

  return temp.toFixed(0);
}

function ThirdTableRow({ ench, sellPrice }) {
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  const { resourceAmount, destinyCraftFameFactor } = useContext(CraftItemContext);

  const netProfit = totalIncome - totalExpense;

  const percentage = (netProfit / totalExpense).toFixed(2) * 100;

  const color = netProfit < 0 ? styles.negtaiveValue : styles.positiveValue;
  console.log("amount", resourceAmount);
  console.log("factor", destinyCraftFameFactor);

  console.log(craftingFame(4, resourceAmount, destinyCraftFameFactor))

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
      <td>10</td>
    </tr>
  );
}

export default React.memo(ThirdTableRow);
