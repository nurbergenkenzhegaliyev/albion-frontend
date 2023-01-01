import React from 'react';
import styles from './ThirdTable.module.scss';
import ThirdTableRow from './ThirdTableRow';

function ThirdTable({sellCost, resourceAmount}) {

  // Journal Fame = Material Amount * Fame Multiplier * POW(2, Enchantment Tier)

  return (
    <div className={styles.thirdTable}>
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Income</th>
            <th>Net</th>
            <th>%</th>
            <th>J.</th>
          </tr>
        </thead>
        <tbody>
          <ThirdTableRow ench={0} sellPrice={sellCost[0]} />
          <ThirdTableRow ench={1} sellPrice={sellCost[1]} />
          <ThirdTableRow ench={2} sellPrice={sellCost[2]} />
          <ThirdTableRow ench={3} sellPrice={sellCost[3]} />
          <ThirdTableRow ench={4} sellPrice={sellCost[4]} />
        </tbody>
      </table>
    </div>
  )
}

export default React.memo(ThirdTable)