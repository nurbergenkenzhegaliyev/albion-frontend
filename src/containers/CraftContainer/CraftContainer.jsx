import React from "react";
import CraftTable from "../../components/CraftTable/CraftTable.js";
import { useSelector } from "react-redux";
import CityBonus from "../../components/CityBonus/CityBonus.js";
import ItemChooseSection from "../../components/ItemChooseSection/ItemChooseSection.js";
import styles from './CraftContainer.module.scss'
import { CraftContext } from "../../context.js";
import Accordion from "../../components/Accordion/Accordion.js";

const returnBonus = 0.15;

function CraftContainer() {
  const { craftingItems } = useSelector((state) => state.info);

  const [clickedTier, setClickedTier] = React.useState("");
  const [makerType, setMakerType] = React.useState({
    url: "none",
    name: "none",
  });
  const [itemType, setItemType] = React.useState({ url: "none", name: "none" });
  const [itemName, setItemName] = React.useState({ url: "none", name: "none" });
  const [close, setClose] = React.useState(false);

  return (
    <CraftContext.Provider 
      value={{
        clickedTier,
        setClickedTier,
        makerType,
        setMakerType,
        itemType,
        setItemType,
        itemName,
        setItemName,
      }}
    >
      <div className={styles.craft}>
        <ItemChooseSection />
        <CityBonus />
        <Accordion title={"Section name"}>
          {craftingItems.map((obj, index) => (
            <CraftTable
              key={obj["@uniquename"]}
              item={obj}
              returnBonus={returnBonus}
            />
          ))}
        </Accordion>
      </div>
    </CraftContext.Provider>
    
  );
}

export default React.memo(CraftContainer);
