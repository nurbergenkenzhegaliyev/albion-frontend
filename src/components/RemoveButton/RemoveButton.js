import React from "react";
import styles from "./RemoveButton.module.scss";
import { removeCraftingItem } from "../../features/info/infoActions";
import { CraftItemContext } from "../../context";
import axios from "axios";
import { useDispatch } from "react-redux";
function RemoveButton() {

    
  let { uniquename } = React.useContext(CraftItemContext);

  const dispatch = useDispatch();
    async function remove() {
      const { data } = await axios.post("/info/getItemInfo", {
        uniquename: uniquename,
      });

      dispatch(removeCraftingItem(data));
    }

  // onClick={remove()}
  return (
    <div className={`${styles.removeButton} `} onClick={() => remove()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        viewBox="0 0 16 16"
        id="IconChangeColor"
      >
        {" "}
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          id="mainIconPathAttribute"
        ></path>{" "}
      </svg>
    </div>
  );
}

export default RemoveButton;
