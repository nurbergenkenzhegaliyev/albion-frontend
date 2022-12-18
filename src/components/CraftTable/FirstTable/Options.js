import React, { useEffect } from "react";
import { CraftItemContext } from "../../../context";
import styles from "./FirstTable.module.scss";
import axios from "axios";

function Options({ obj }) {
  let { amount, setAmount, tier } = React.useContext(CraftItemContext);

  let uniquename = null;
  for (let item in obj.craftresource) {
    if (obj.craftresource[item]["@uniquename"].includes("ARTEFACT")) {
      uniquename = obj.craftresource[item]["@uniquename"];
    }
  }

  const [localizedName, setLocalizedName] = React.useState("s");
  const getter = async (uniqueName) => {
    const response = await axios.post("/info/getItemLocalization", {
      uniqueName,
    });
    setLocalizedName((prev) => response.data.LocalizedNames["EN-US"]);
  };

  useEffect(() => {
    getter(uniquename);
  }, [uniquename]);

  const genrateFirstRow = (title, object, str) => {
    return (
      <tr>
        <th>{title}</th>
        {Array.isArray(object.craftresource) ? (
          object.craftresource.map((resource, index) => (
            <th key={resource[str] + index}>
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
      {genrateFirstRow("Amount", obj, "@uniquename")}
      {genrateRow("1", obj, "@count")}
      {generateCountRow(obj, "@count", amount)}
    </>
  );
}

export default Options;
