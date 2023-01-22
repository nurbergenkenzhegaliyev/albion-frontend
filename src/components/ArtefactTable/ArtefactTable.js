import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./ArtefactTable.module.scss";
import { connect } from "react-redux";
import ArtefactTableRow from "./ArtefactTableRow";

function ArtefactTable({craftingItems}) {

  let arrayOfUniquenames = [];

  for (const makerName in craftingItems) {
    let maker = craftingItems[makerName];
    for (let item in maker) {
      let requirement = maker[item].craftingrequirements;

      if (Array.isArray(requirement)) {
        for (let option in requirement) {
          let resources = requirement[option].craftresource;

          if (Array.isArray(resources)) {
            for (let material in resources) {
              if (resources[material]["@uniquename"].includes("ARTEFACT")) {
                arrayOfUniquenames.push(
                  resources[material]["@uniquename"].slice(3)
                );
              }
            }
          }
        }
      }
    }
  }

  const unique = [...new Set(arrayOfUniquenames)];

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
        {unique.map((item) => (
          <ArtefactTableRow key={item} item={item} />
        ))}
      </tbody>
    </table>
  );
}

ArtefactTable.propTypes = {
  craftingItems: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    craftingItems: state.info.craftingItems,
  }
}

export default connect(mapStateToProps)(memo(ArtefactTable));
