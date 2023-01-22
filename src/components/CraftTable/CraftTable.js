
import { useState, memo } from "react";
import PropTypes from "prop-types";
import { CraftItemContext } from "../../context.js";
import { useDispatch, useSelector } from "react-redux";
import { removeCraftingItem } from "../../features/info/infoActions";

import styles from "./CraftTable.module.scss";

import FirstTable from "./FirstTable/FirstTable";
import SecondTable from "./SecondTable/SecondTable";
import ThirdTable from "./ThirdTable/ThirdTable";
import RemoveButton from "../RemoveButton/RemoveButton.js";

  
function CraftTable({ item, returnRate, tax }) {

  const dispatch = useDispatch();
  const uniquename = item["@uniquename"];
  const destinyCraftFameFactor = item["@destinycraftfamefactor"] ? item["@destinycraftfamefactor"]:1;

  // Tier of crafting item -> colour difference
  const tier = uniquename[1];

  // Several way to craft the <item></item>
  const craftingMethods = item.craftingrequirements;

  let arrayCraftingMethods = [];
  if (craftingMethods.length > 1) {
    arrayCraftingMethods = craftingMethods.slice(0);
  } else {
    arrayCraftingMethods.push(craftingMethods);
  }

  let resourceAmount = 0;
  let met = arrayCraftingMethods[0]["craftresource"];
  if(Array.isArray(met)){
    for(let res in met){
      if(!met[res]["@uniquename"].includes("ARTEFACT")){
        resourceAmount+= Number(met[res]["@count"]);
      }
    }
  } else {
    resourceAmount = Number(met["@count"]);
  }
  const [option, setOption] = useState("0");

  const [amount, setAmount] = useState(1);
  const [removing, setRemoving] = useState(false)

  const {craftingItems} = useSelector((state) => state.info);
  let maker;
  if(craftingItems.hunter.indexOf(item)>-1){
    maker = "hunter"
  } 
  else if(craftingItems.mage.indexOf(item)>-1){
    maker = "mage"
  }
  else if(craftingItems.warrior.indexOf(item)>-1){
    maker = "warrior"
  }
  else if(craftingItems.toolmaker.indexOf(item)>-1){
    maker = "toolmaker"
  }
  const handleRemove = () => {
    setRemoving(true);
    dispatch(removeCraftingItem({item, maker}));
  }

  let animation = (removing) ? styles.fade_out:styles.fade_in;

  const list = useSelector((state) => state.info.prices);
  let oneitem = {};
  if (list.length > 0) {
    oneitem = list.filter((obj) => obj.name === uniquename)[0];
  }
  let ar = oneitem ? [...oneitem.priceList]:[0,0,0,0,0];

  const [sellCost, setSellCost] = useState(ar);


  return (
    <CraftItemContext.Provider
      value={{
        returnRate,
        arrayCraftingMethods,
        option,
        amount,
        setAmount,
        tier,
        uniquename,
        setOption,
        sellCost,
        setSellCost,
        resourceAmount,
        destinyCraftFameFactor,
        maker,
        tax
      }}
    >
      <div className={`${styles.main} ${animation}`}>
        <div className={styles.left}>
          <div className={styles.tables_section}>
            <FirstTable />
            <div className={styles.calculations}>
              <SecondTable />
              <ThirdTable />
            </div>
          </div>
        </div>
        
        <div className={styles.right}>
          <div className={styles.content}>
            right
          </div>
          <RemoveButton removeFunc = {handleRemove}/>
        </div>
      </div>
    </CraftItemContext.Provider>
  );
}

CraftTable.propTypes = {
  item: PropTypes.object,
  returnRate: PropTypes.number,
  tax: PropTypes.number,
};

export default memo(CraftTable);
