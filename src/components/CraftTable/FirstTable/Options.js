import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { CraftItemContext } from "../../../context";
import styles from "./FirstTable.module.scss";
import axios from "../../../axios.js";

function Options({ craftingMethod }) {
  let { amount, setAmount, tier } = React.useContext(CraftItemContext);

  let uniquename = null;

  if(Array.isArray(craftingMethod.craftresource)){
    for (let item in craftingMethod.craftresource) {
      if (craftingMethod.craftresource[item]["@uniquename"].includes("ARTEFACT")) {
        uniquename = craftingMethod.craftresource[item]["@uniquename"];
      }
    }
  }


  const [localizedName, setLocalizedName] = React.useState("default");
  const getter = async (uniqueName) => {
    const response = await axios.post("/info/getItemLocalization", {
      uniqueName,
    });
    setLocalizedName((prev) => response.data.LocalizedNames["EN-US"]);
  };

  useEffect(() => {
    if(uniquename!=null){
      getter(uniquename);
    }
  }, [uniquename]);

  const genrateFirstRow = (title, object, str) => {
    return (
      <tr>
        <th>{title}</th>
        {Array.isArray(object.craftresource) ? (
          object.craftresource.map((resource, index) => (
            <th key={resource[str] + index} className={resource[str].includes("ARTEFACT")||resource[str].includes("TOKEN") ? styles.lastWidth:""}>
              {resource[str].includes("ARTEFACT")
                ? localizedName
                : resource[str].slice(3)}
            </th>
          ))
        ) : (
          <th key={object.craftresource[str] + "33"}>
            {object.craftresource[str].slice(3)}
          </th>
        )}
      </tr>
    );
  };

  const genrateRow = (title, object, str) => {
    return (
      <tr>
        <th>{title}</th>
        {Array.isArray(object.craftresource) ? (
          object.craftresource.map((resource, index) => (
            <th key={resource[str] + index}>{resource[str]}</th>
          ))
        ) : (
          <th key={object.craftresource[str] + "33"}>
            {object.craftresource[str]}
          </th>
        )}
      </tr>
    );
  };

  const generateCountRow = (object, str, amount) => {
    return (
      <tr>
        <td>
          <input
            type="text"
            value={amount}
            className={styles["tier" + tier]}
            onChange={(e) => setAmount(e.target.value)}
          />
        </td>
        {Array.isArray(object.craftresource) ? (
          object.craftresource.map((resource, index) => (
            <th key={resource[str] + index}>{resource[str] * amount}</th>
          ))
        ) : (
          <th key={object.craftresource[str] + "11"}>
            {object.craftresource[str] * amount}
          </th>
        )}
      </tr>
    );
  };

  return (
    <>
      {genrateFirstRow("Amount", craftingMethod, "@uniquename")}
      {genrateRow("1", craftingMethod, "@count")}
      {generateCountRow(craftingMethod, "@count", amount)}
    </>
  );
}

Options.propTypes = {
  craftingMethod: PropTypes.object
};


export default React.memo(Options);
