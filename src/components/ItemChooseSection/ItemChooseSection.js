import React, { useEffect } from "react";
import Dropdown from "../../components/Dropdown/Dropdown.js";
import Modal from "../../components/Modal/Modal.js";
import * as Constants from "../../constants/constants.js";
import TierButtonSection from "../TierButtonSection/TierButtonSection.js";
import styles from "./ItemChooseSection.module.scss";
import { CraftContext } from "../../context.js";
import UpdateResourceButton from "../UpdateResourceButton/UpdateResourceButton.js";

const makers = Constants.MAKERS;
const types = Constants.TYPES;
const items = Constants.ITEMS;

function ItemChooseSection() {
  const [modalActive, setModalActive] = React.useState(false);

  const [clickedTier, setClickedTier] = React.useState("");
  const [makerType, setMakerType] = React.useState({
    url: "none",
    name: "none",
  });
  const [itemType, setItemType] = React.useState({ url: "none", name: "none" });
  const [itemName, setItemName] = React.useState({ url: "none", name: "none" });

  useEffect(() => {
    if (modalActive) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [modalActive]);
  console.log("Modalactive: ", modalActive)

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
      <div className={styles.main}>
        <div className={styles.chooseButtons}>
          <Dropdown imgLinkArray={makers} type="maker" />
          <Dropdown imgLinkObj={types} type="item" />
          <Dropdown imgLinkObj={items} type="name" />
        </div>

        <TierButtonSection />

        <UpdateResourceButton onclick={setModalActive}/>

        <Modal active={modalActive} setActive={setModalActive} />
      </div>
    </CraftContext.Provider>
  );
}

export default React.memo(ItemChooseSection);
