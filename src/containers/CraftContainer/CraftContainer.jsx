import React from "react";
import CraftTable from "../../components/CraftTable/CraftTable.js";
import { useSelector } from "react-redux";
import CityBonus from "../../components/CityBonus/CityBonus.js";
import ItemChooseSection from "../../components/ItemChooseSection/ItemChooseSection.js";
import styles from './CraftContainer.module.scss'

const returnBonus = 0.15;

function CraftContainer() {
  const { craftingItems } = useSelector((state) => state.info);

  return (
    <div className={styles.craft}>
      <ItemChooseSection />
      <CityBonus />

      {craftingItems.map((obj, index) => (
        <CraftTable
          key={obj["@uniquename"]}
          item={obj}
          returnBonus={returnBonus}
        />
      ))}
    </div>
  );
}

export default CraftContainer;
