import React from 'react';
import { useState } from 'react';
import TotalExpense from './TotalExpense';
import TotalIncome from './TotalIncome';
import styles from './ThirdTable.module.scss';

function ThirdTableRow({ench, sellPrice}) {
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);

    const netProfit = totalIncome-totalExpense;
    const percentage = ((netProfit)/totalExpense).toFixed(2)*100;
    const color = (netProfit)<0 ? styles.negtaiveValue:styles.positiveValue;
  return (
    <tr>
        <TotalExpense setTotalExpense={setTotalExpense} totalExpense={totalExpense} ench={ench}/>
        <TotalIncome setTotalIncome={setTotalIncome} totalIncome={totalIncome} ench={ench} sellPrice={sellPrice}/>
        <td className={color}>{netProfit}</td>
        <td className={color}>{percentage}%</td>
        <td>10</td>
    </tr>
  )
}

export default React.memo(ThirdTableRow)