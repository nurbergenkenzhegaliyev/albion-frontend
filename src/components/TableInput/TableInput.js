import {memo, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeResourcePrice } from "../../features/info/infoActions.js";
import styles from "./TableInput.module.scss";

// Input component for Recources Table in Modal
// Component takes uniqueName of an item
function TableInput({ uniqueName }) {
  const dispatch = useDispatch();

  // State for input
  // Initial state is taken from user state(redux)
  const [price, setPrice] = useState(
    useSelector((state) => state.info.resources[uniqueName])
  );

  //To store price of an item when input value changes
  const handleChange = (price) => {
    setPrice(price);

    // Sending request to change price of item with uniqueName in the database
    dispatch(changeResourcePrice({ name: uniqueName, price }));
  };

  return (
    <td>
      <input
        value={price}
        onChange={(e) => handleChange(e.target.value)}
        className={styles.input}
      />
    </td>
  );
}

export default memo(TableInput);
