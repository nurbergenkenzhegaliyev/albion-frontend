import React from "react";
import styles from "./ArtefactTable.module.scss";
import { useSelector } from "react-redux";
import ArtefactTableRow from "./ArtefactTableRow";

function ArtefactTable() {
  const {craftingItems} = useSelector((state) => state.info);

  let arr = [];

  for (const maker in craftingItems) {
    let mak = craftingItems[maker];
    for(let item in mak){
      let req = mak[item].craftingrequirements;

      if (Array.isArray(req)) {
        for (let option in req) {
          let res = req[option].craftresource;

          if (Array.isArray(res)) {
            for (let mat in res) {
              if (res[mat]["@uniquename"].includes("ARTEFACT")) {
                arr.push(res[mat]["@uniquename"].slice(3));
              }
            }
          }
        }
      }
    }
    

  }

  const uniq = [...new Set(arr)];
  return (
    <table className={styles.resourceTable}>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Tier 4</th>
          <th>Tier 5</th>
          <th>Tier 6</th>
          <th>Tier 7</th>
          <th>Tier 8</th>
        </tr>
        {
            uniq.map(item => (
              <ArtefactTableRow key={item} item={item} />
            ))
        }
      </tbody>
    </table>
  );
}

export default ArtefactTable;
