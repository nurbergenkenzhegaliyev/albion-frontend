import { useContext, memo, useState,useMemo, useEffect } from "react";
import { CraftItemContext } from "../../../context";
import styles from "./ThirdTable.module.scss";
import ThirdTableRow from "./ThirdTableRow";
import axios from "axios";

const calculateFame = (tier, ench, resAmount, factor) => {
  let base = 0;
  if(Number(tier) === 4){
    base =  (22.5);
  }
  else if(Number(tier) === 5){
    base =  (90);
  }
  else if(Number(tier) === 6){
    base =  (270);
  }
  else if(Number(tier) === 7){
    base =  (645);
  }
  else if(Number(tier) === 8){
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
  if(Number(tier) === 4){
    base = 3600;
  }
  else if(Number(tier) === 5){
    base = 7200;
  }
  else if(Number(tier) === 6){
    base = 14400;
  }
  else if(Number(tier) === 7){
    base = 28380;
  }
  else if(Number(tier) === 8){
    base = 58590;
  }

  return ((fame*itemAmount)/base).toFixed(2);

};

const calculateItemValue = (tier, ench, resAmount, artefactIV) => {
  let base = 0;
  if(Number(tier) === 4){
    base = resAmount*(16*Math.pow(2,ench));
  }
  else if(Number(tier) === 5){
    base = 7200;
  }
  else if(Number(tier) === 6){
    base = 14400;
  }
  else if(Number(tier) === 7){
    base = 28380;
  }
  else if(Number(tier) === 8){
    base = 58590;
  }
  return base+artefactIV;
};

function ThirdTable() {
  const { sellCost, tier, resourceAmount, destinyCraftFameFactor, amount, arrayCraftingMethods, option } =
    useContext(CraftItemContext);

  const [itemValue, setItemValue] = useState(0)

  const fetchData = async () => {
    if(Array.isArray(arrayCraftingMethods[option].craftresource)){
      for(let mat in arrayCraftingMethods[option].craftresource){
        let uniquename = arrayCraftingMethods[option].craftresource[mat]["@uniquename"]
        if(uniquename.includes("ARTEFACT") && !uniquename.includes("TOKEN")){
          const response = await axios.post("/info/getSimpleItemIV", {uniquename});
          setItemValue(prev => response.data);
          // console.log("change")
        }
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, [option])

  let arrayIV = [0,0,0,0,0];
  let arrayJournals = [0,0,0,0,0];
  for(let i=0;i<5;i++){
    arrayIV[i] = calculateItemValue(tier, i, resourceAmount, itemValue)
    arrayJournals[i] = calculateJournalAmount(tier, i, resourceAmount, destinyCraftFameFactor, amount)
  }
  // console.log(arrayIV)

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
          <ThirdTableRow ench={0} sellPrice={sellCost[0]} journalAmount={arrayJournals[0]} IV={arrayIV[0]}/>
          <ThirdTableRow ench={1} sellPrice={sellCost[1]} journalAmount={arrayJournals[1]} IV={arrayIV[1]}/>
          <ThirdTableRow ench={2} sellPrice={sellCost[2]} journalAmount={arrayJournals[2]} IV={arrayIV[2]}/>
          <ThirdTableRow ench={3} sellPrice={sellCost[3]} journalAmount={arrayJournals[3]} IV={arrayIV[3]}/>
          <ThirdTableRow ench={4} sellPrice={sellCost[4]} journalAmount={arrayJournals[4]} IV={arrayIV[4]}/>
        </tbody>
      </table>
    </div>
  );
}

export default memo(ThirdTable);
