import React from "react";
import TableInput from "../TableInput/TableInput";

function ResourceTable({ tier }) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Tier {tier}</th>
            <th>.0</th>
            <th>.1</th>
            <th>.2</th>
            <th>.3</th>
          </tr>
          <tr>
            <td>Plank</td>
            <td>
              <TableInput uniqueName={`T${tier}_PLANKS`} />
            </td>
            <td>
              <TableInput uniqueName={`T${tier}_PLANKS_LEVEL1@1`} />
            </td>
            <td>
              <TableInput uniqueName={`T${tier}_PLANKS_LEVEL2@2`} />
            </td>
            <td>
              <TableInput uniqueName={`T${tier}_PLANKS_LEVEL3@3`} />
            </td>
          </tr>
          <tr>
            <td>Metal</td>
            <td>
              <TableInput uniqueName={`T${tier}_METALBAR`} />
            </td>
            <td>
              <TableInput uniqueName={`T${tier}_METALBAR_LEVEL1@1`} />
            </td>
            <td>
              <TableInput uniqueName={`T${tier}_METALBAR_LEVEL2@2`} />
            </td>
            <td>
              <TableInput uniqueName={`T${tier}_METALBAR_LEVEL3@3`} />
            </td>
          </tr>
          <tr>
            <td>Cloth</td>
            <td>
              <TableInput uniqueName={`T${tier}_CLOTH`} />
            </td>
            <td>
              <TableInput uniqueName={`T${tier}_CLOTH_LEVEL1@1`} />
            </td>
            <td>
              <TableInput uniqueName={`T${tier}_CLOTH_LEVEL2@2`} />
            </td>
            <td>
              <TableInput uniqueName={`T${tier}_CLOTH_LEVEL3@3`} />
            </td>
          </tr>
          <tr>
            <td>Leather</td>
            <td>
              <TableInput uniqueName={`T${tier}_LEATHER`} />
            </td>
            <td>
              <TableInput uniqueName={`T${tier}_LEATHER_LEVEL1@1`} />
            </td>
            <td>
              <TableInput uniqueName={`T${tier}_LEATHER_LEVEL2@2`} />
            </td>
            <td>
              <TableInput uniqueName={`T${tier}_LEATHER_LEVEL3@3`} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ResourceTable;
