import React from 'react';
import styles from './TierButtonSection.module.scss';
import CreateItemButton from '../CrateItemButton/CreateItemButton';
import TierButton from '../TierButton/TierButton';

function TierButtonSection() {
  return (
    <>
        <div className={styles.tierButtons}>
          <div className="d-flex">
            <TierButton tier="4" />
            <TierButton tier="5" />
            <TierButton tier="6" />
            <TierButton tier="7" />
            <TierButton tier="8" />
          </div>

          <CreateItemButton />
        </div>
    </>
  )
}

export default React.memo(TierButtonSection)