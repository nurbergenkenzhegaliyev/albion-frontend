import React, { useContext } from "react";
import { CraftItemContext } from "../../../context";
import styles from "./ThirdTable.module.scss";
import ThirdTableRow from "./ThirdTableRow";

const calculateFame = (tier, ench, resAmount, factor) => {
  let base = 0;
  if(tier = 4){
    base =  (22.5);
  }
  else if(tier = 5){
    base =  (90);
  }
  else if(tier = 6){
    base =  (270);
  }
  else if(tier = 7){
    base =  (645);
  }
  else if(tier = 8){
    base =  (1395);
  }
  else {
    base =  0;
  }
  let sum = (base * resAmount* factor).toFixed(0) * Math.pow(2,ench)
  return sum;

};

const calculateJournalAmount = (tier, ench, resAmount, factor, itemAmount) => {
  let fame = calculateFame(tier, ench, resAmount, factor)
  let base = 0;
  if(tier = 4){
    base = 3600;
  }
  else if(tier = 5){
    base = 7200;
  }
  else if(tier = 6){
    base = 14400;
  }
  else if(tier = 7){
    base = 28380;
  }
  else if(tier = 8){
    base = 58590;
  }

  return (fame*itemAmount)/base;

}


function ThirdTable() {
  const { sellCost, tier, resourceAmount, destinyCraftFameFactor, amount } =
    useContext(CraftItemContext);
  console.log(calculateJournalAmount(tier, 0, resourceAmount, destinyCraftFameFactor, amount))
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
          <ThirdTableRow ench={0} sellPrice={sellCost[0]} journalAmount={calculateJournalAmount(tier, 0, resourceAmount, destinyCraftFameFactor, amount)}/>
          <ThirdTableRow ench={1} sellPrice={sellCost[1]} journalAmount={calculateJournalAmount(tier, 1, resourceAmount, destinyCraftFameFactor, amount)}/>
          <ThirdTableRow ench={2} sellPrice={sellCost[2]} journalAmount={calculateJournalAmount(tier, 2, resourceAmount, destinyCraftFameFactor, amount)}/>
          <ThirdTableRow ench={3} sellPrice={sellCost[3]} journalAmount={calculateJournalAmount(tier, 3, resourceAmount, destinyCraftFameFactor, amount)}/>
          <ThirdTableRow ench={4} sellPrice={sellCost[4]} journalAmount={calculateJournalAmount(tier, 4, resourceAmount, destinyCraftFameFactor, amount)}/>
        </tbody>
      </table>
    </div>
  );
}

export default React.memo(ThirdTable);
