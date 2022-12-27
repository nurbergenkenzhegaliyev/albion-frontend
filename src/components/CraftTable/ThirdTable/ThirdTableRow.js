import React from 'react';
import { useState } from 'react';
import TotalExpense from './TotalExpense';

function ThirdTableRow({ench, sellPrice}) {
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);

  return (
    <tr>
        <TotalExpense setTotalExpense={setTotalExpense} totalExpense={totalExpense} ench={ench}/>
        <td>3000000</td>
        <td>214124</td>
        <td>10%</td>
        <td>10</td>
    </tr>
  )
}

export default React.memo(ThirdTableRow)