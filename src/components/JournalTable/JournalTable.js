import styles from './JournalTable.module.scss';
import { memo } from 'react';
import JournalTableRow from './JournalTableRow';

function JournalTable() {
  return (
    <>
    <table className={styles.wrapper}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Tier 4</th>
          <th>Tier 5</th>
          <th>Tier 6</th>
          <th>Tier 7</th>
          <th>Tier 8</th>
        </tr>
      </thead>
    </table>
    <JournalTableRow title={"Hunter"}/>
    <JournalTableRow title={"Mage"}/>
    <JournalTableRow title={"Warrior"}/>
    </>
  )
}


export default memo(JournalTable)