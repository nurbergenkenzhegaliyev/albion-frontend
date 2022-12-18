import React from "react";
import TableInput from "../TableInput/TableInput.js";
import styles from "./ResourceTable.module.scss"

function ResourceTable({ tier }) {
  return (
    <>
      <table className={styles.resourceTable}>
        <tbody>
          <tr>
            <th className={styles['tier'+tier]}>Tier {tier}</th>
            <th className={styles['tier'+tier]}>.0</th>
            <th className={styles['tier'+tier]}>.1</th>
            <th className={styles['tier'+tier]}>.2</th>
            <th className={styles['tier'+tier]}>.3</th>
            <th className={styles['tier'+tier]}>.4</th>
          </tr>
          <tr>
            <td>Plank</td>
            <TableInput uniqueName={`T${tier}_PLANKS`} />
            <TableInput uniqueName={`T${tier}_PLANKS_LEVEL1@1`} />
            <TableInput uniqueName={`T${tier}_PLANKS_LEVEL2@2`} />
            <TableInput uniqueName={`T${tier}_PLANKS_LEVEL3@3`} />
            <TableInput uniqueName={`T${tier}_PLANKS_LEVEL4@4`} />
          </tr>
          <tr>
            <td>Metal</td>
            <TableInput uniqueName={`T${tier}_METALBAR`} />
            <TableInput uniqueName={`T${tier}_METALBAR_LEVEL1@1`} />
            <TableInput uniqueName={`T${tier}_METALBAR_LEVEL2@2`} />
            <TableInput uniqueName={`T${tier}_METALBAR_LEVEL3@3`} />
            <TableInput uniqueName={`T${tier}_METALBAR_LEVEL4@4`} />
          </tr>
          <tr>
            <td>Cloth</td>
            <TableInput uniqueName={`T${tier}_CLOTH`} />
            <TableInput uniqueName={`T${tier}_CLOTH_LEVEL1@1`} />
            <TableInput uniqueName={`T${tier}_CLOTH_LEVEL2@2`} />
            <TableInput uniqueName={`T${tier}_CLOTH_LEVEL3@3`} />
            <TableInput uniqueName={`T${tier}_CLOTH_LEVEL4@4`} />
          </tr>
          <tr>
            <td>Leather</td>
            <TableInput uniqueName={`T${tier}_LEATHER`} />
            <TableInput uniqueName={`T${tier}_LEATHER_LEVEL1@1`} />
            <TableInput uniqueName={`T${tier}_LEATHER_LEVEL2@2`} />
            <TableInput uniqueName={`T${tier}_LEATHER_LEVEL3@3`} />
            <TableInput uniqueName={`T${tier}_LEATHER_LEVEL4@4`} />
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default React.memo(ResourceTable);
