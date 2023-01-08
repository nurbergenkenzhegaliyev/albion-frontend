import CraftTable from "../../components/CraftTable/CraftTable.js";
import { useSelector } from "react-redux";
import CityBonus from "../../components/CityBonus/CityBonus.js";
import ItemChooseSection from "../../components/ItemChooseSection/ItemChooseSection.js";
import styles from "./CraftContainer.module.scss";
import Accordion from "../../components/Accordion/Accordion.js";
import { useState, memo } from "react";


function CraftContainer() {
  const { craftingItems } = useSelector((state) => state.info);

  const [focus, setFocus] = useState(false);
  const [premium, setPremium] = useState(false);

  const [returnRate, setReturnRate] = useState(0.15);

  const [hunterTax, setHunterTax] = useState(500);
  const [mageTax, setMageTax] = useState(500);
  const [warriorTax, setWarriorTax] = useState(500);
  const [toolmakerTax, setToolmakerTax] = useState(500);

  return (
    <div className={styles.craft}>
      <ItemChooseSection />
      <CityBonus
        focus={focus}
        setFocus={setFocus}
        premium={premium}
        setPremium={setPremium}
        returnRate={returnRate}
        setReturnRate={setReturnRate}
      />

      <Accordion title={"Hunter"} length={craftingItems["hunter"].length} tax={hunterTax} setTax={setHunterTax}>
        {craftingItems["hunter"].map((obj, index) => (
          <CraftTable
            key={obj["@uniquename"]}
            item={obj}
            returnRate={returnRate}
            tax={hunterTax}
          />
        ))}
      </Accordion>

      <Accordion title={"Mage"} length={craftingItems["mage"].length} tax={mageTax} setTax={setMageTax}>
        {craftingItems["mage"].map((obj, index) => (
          <CraftTable
            key={obj["@uniquename"]}
            item={obj}
            returnRate={returnRate}
            tax={mageTax}
          />
        ))}
      </Accordion>

      <Accordion title={"Warrior"} length={craftingItems["warrior"].length} tax={warriorTax} setTax={setWarriorTax}>
        {craftingItems["warrior"].map((obj, index) => (
          <CraftTable
            key={obj["@uniquename"]}
            item={obj}
            returnRate={returnRate}
            tax={warriorTax}
          />
        ))}
      </Accordion>
    </div>
  );
}

export default memo(CraftContainer);
