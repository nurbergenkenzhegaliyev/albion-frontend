import { memo, useContext } from "react";
import { useDispatch } from "react-redux";

import Button from "../../UI/Button/Button";
import axios from "../../axios.js";
import { CraftContext } from "../../context.js";
import { addCraftingItem } from "../../features/info/infoActions";

export const CreateItemButton = () => {
  const dispatch = useDispatch();
  const { clickedTier, itemName, makerType } = useContext(CraftContext);

  async function on() {
    // 1. Get item uniquename
    const uniquename = "T" + clickedTier + "_" + itemName.name;
    // 2. Get item info
    const { data } = await axios.post("/info/getItemInfo", { uniquename });
    // 3. Add obj to craftingItems list
    dispatch(addCraftingItem({ item: data, makerType }));
  }

  const handleClickCreate = () => {
    if (clickedTier === "") {
      console.log("Tier not selected");
    } else {
      on();
    }
  };

  return (
    <Button onclick={handleClickCreate} style={"create"}>
      Create card
    </Button>
  );
};


export default memo(CreateItemButton);
